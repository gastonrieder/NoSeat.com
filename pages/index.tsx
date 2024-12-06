import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { Box, Flex, Heading, Text} from "@radix-ui/themes";
import { MDXProvider } from "@components/MDXComponents";
import { ThemesMDXComponents } from "@components/ThemesMDXComponents";
import { getMdxBySlug } from "@utils/mdx";
import { getTransportImage } from "@utils/unsplash";
import { ThemesDocsPage } from "@components/ThemesDocsPage";
import { Footer } from "@components/Footer";
import { PrimitivesSearchDesktop } from "@components/PrimitivesSearchDesktop";
import { DocsNav } from "@components/DocsNav";
import { themesRoutes } from "@utils/themesRoutes";

type HomeProps = {
  frontmatter: {
    metaTitle: string;
    metaDescription: string;
    slug: string;  // Added slug property
  };
  code: string;
  headerImage: string;
};

export default function Home({ frontmatter, code, headerImage }: HomeProps) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <Flex direction="column" style={{ minHeight: '100vh' }}>
      <ThemesDocsPage>
        <Box mb="3">
          <img 
            src={headerImage} 
            alt={`Public Transport Guide`}
            style={{
              width: '100%',
              height: '250px',
              objectFit: 'cover',
              borderRadius: 'var(--radius-3)'
            }}
          />
        </Box>

        <Heading as="h1" size="8" mb="2">
          {frontmatter.metaTitle}
        </Heading>
        <Text size="3" mb="4">
          {frontmatter.metaDescription}
        </Text>

        <Box 
          display={{ initial: 'block', md: 'none' }} 
          mb="4" 
          style={{ 
            borderTop: '1px solid var(--gray-6)',
            paddingTop: '16px',
            marginTop: '16px'
          }}
        >
          <PrimitivesSearchDesktop />
          <Box mt="4">
            <DocsNav routes={themesRoutes} />
          </Box>
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
}export async function getStaticProps() {
  const { frontmatter, code } = await getMdxBySlug("templates/", "home");
  const headerImage = await getTransportImage("tram");

  return { 
    props: { 
      frontmatter, 
      code,
      headerImage 
    } 
  };
}

