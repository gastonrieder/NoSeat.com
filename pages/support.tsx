import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { Box, Flex } from "@radix-ui/themes";
import { MDXProvider } from "@components/MDXComponents";
import { ThemesMDXComponents } from "@components/ThemesMDXComponents";
import { getMdxBySlug } from "@utils/mdx";
import { getTransportImage } from "@utils/unsplash";
import { ThemesDocsPage } from "@components/ThemesDocsPage";
import { Footer } from "@components/Footer";

type SupportProps = {
  frontmatter: {
    metaTitle: string;
    metaDescription: string;
    slug: string;
  };
  code: string;
  headerImage: string;
};

export default function Support({ frontmatter, code, headerImage }: SupportProps) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <Flex direction="column" style={{ minHeight: '100vh' }}>
    <ThemesDocsPage>
      <Box mb="3">
        <img 
          src={headerImage} 
          alt="Support NoSeat"
          style={{
            width: '100%',
            height: '250px',
            objectFit: 'cover',
            borderRadius: 'var(--radius-3)'
          }}
        />
      </Box>

      <MDXProvider frontmatter={frontmatter}>
        <Component components={ThemesMDXComponents as any} />
      </MDXProvider>
    </ThemesDocsPage>
    <Flex justify="center" mt="auto">
          <Footer />
        </Flex>
      </Flex>
  );
}

export async function getStaticProps() {
  const { frontmatter, code } = await getMdxBySlug("templates/", "support");
  const headerImage = await getTransportImage("public transport people");

  return { 
    props: { 
      frontmatter, 
      code,
      headerImage 
    } 
  };
}
