import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { Box, Heading, Flex, Text} from "@radix-ui/themes";
import { MDXProvider } from "@components/MDXComponents";
import { ThemesMDXComponents } from "@components/ThemesMDXComponents";
import { getAllFrontmatter, getMdxBySlug } from "@utils/mdx";
import { QuickNav } from "@components/QuickNav";
import { getTransportImage } from "@utils/unsplash";
import type { Frontmatter } from "types/frontmatter";
import { GetStaticPropsContext } from "next";
import { ThemesDocsPage } from "@components/ThemesDocsPage";
import { Footer } from "@components/Footer";
import { SEOHead } from "@components/SEOHead";
import { Breadcrumbs } from "@components/Breadcrumbs";

type Doc = {
  frontmatter: Frontmatter;
  code: string;
  headerImage: string;
};
export default function CityDoc({ frontmatter, code, headerImage }: Doc) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  
  const citySchema = {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    "name": `${frontmatter.metaTitle} Public Transport Guide`,
    "description": frontmatter.metaDescription,
    "image": headerImage,
    "publisher": {
      "@type": "Organization",
      "name": "NoSeat.co",
      "url": "https://noseat.co"
    }
  };

  return (
    <Flex direction="column" style={{ minHeight: '100vh' }}>
      <SEOHead 
        city={frontmatter.metaTitle}
        country={frontmatter.slug.split('/')[2]}
        description={frontmatter.metaDescription}
        slug={frontmatter.slug}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />
      <ThemesDocsPage>
        <Breadcrumbs 
          continent={frontmatter.slug.split('/')[0]}
          country={frontmatter.slug.split('/')[1]}
          city={frontmatter.metaTitle}
        />
        <Box mb="2">
          <img 
            src={headerImage} 
            alt={`Public transport in ${frontmatter.metaTitle}`}
            style={{
              width: '100%',
              height: '250px',
              objectFit: 'cover',
              borderRadius: 'var(--radius-3)'
            }}
          />
        </Box>

        <Heading
        as="h1"
        size="8"
        mb="2"
        style={{ scrollMarginTop: "var(--space-9)" }}
      >
        {frontmatter.metaTitle}
      </Heading>

      <Text size="3" mb="4">
        {frontmatter.metaDescription}
      </Text>
        <QuickNav key={frontmatter.slug} />
        <MDXProvider frontmatter={frontmatter}>
          <Component components={ThemesMDXComponents as any} />
        </MDXProvider>
      </ThemesDocsPage>
      <Flex justify="center" mt="auto">
        <Footer />
      </Flex>
    </Flex>
  );
}  export async function getStaticProps(
  context: GetStaticPropsContext<{ slug: string[] }>,
) {
  const { frontmatter, code } = await getMdxBySlug(
    "cities",
    context.params!.slug.join("/")
  );
  
  const headerImage = await getTransportImage(frontmatter.metaTitle);

  return { 
    props: { 
      frontmatter, 
      code,
      headerImage 
    } 
  };
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter("cities");

  return {
    paths: frontmatters.map((frontmatter) => ({
      params: { 
        slug: frontmatter.slug.replace("cities/", "").split("/")
      },
    })),
    fallback: false,
  };
}
