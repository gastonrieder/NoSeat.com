import { components } from "@components/MDXComponents";
import * as themesDocsAssets from "@components/ThemesDocsAssets";
import * as themesDocsTables from "@components/ThemesDocsTables";
import * as icons from "@radix-ui/react-icons";
import { Figure } from "./Figure";
import { Text, Card, Tooltip, Theme, Heading, Link, Box } from "@radix-ui/themes";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { ReactNode, useEffect, useState } from "react";
import NextLink from "next/link";
import styles from "./ThemesMDXComponents.module.css";

const MobileHeading = ({ children, size, ...props }: any) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Box className={styles.headingWrapper}>
      <Heading {...props} size={size} data-heading>
        {children}
      </Heading>
      {isMobile && (
        <Link href="#" className={styles.backToTop}>
          <ArrowUpIcon width={20} height={20} />
        </Link>
      )}
    </Box>
  );
};

export const ThemesMDXComponents = {
  ...components,
  h1: (props: any) => <Heading {...props} as="h1" size="8" data-heading />,
  h2: (props: any) => <MobileHeading {...props} as="h2" size="6" style={{ scrollMarginTop: 'calc(var(--header-height) + 16px)' }} />,
  h3: (props: any) => <Heading {...props} as="h3" size="4" data-heading style={{ scrollMarginTop: 'calc(var(--header-height) + 16px)' }} />,
  

  table: (props: any) => (
    <div style={{ overflowX: 'auto', maxWidth: '100%', marginBottom: '1rem' }}>
      <table {...props} style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }} />
    </div>
  ),

  th: (props: any) => (
    <th {...props} style={{ 
      borderBottom: '2px solid var(--gray-5)', 
      padding: '0.5rem', 
      textAlign: 'left', 
    }} />
  ),

  td: (props: any) => (
    <td {...props} style={{ 
      borderBottom: '1px solid var(--gray-4)', 
      padding: '0.5rem', 
      color: props.children.$$typeof ? 'var(--gray-12)' : 'var(--gray-11)',  
    }} />
  ),

  ...themesDocsAssets,
  ...themesDocsTables,
  ...icons,

  Tooltip: ({ children, content }: { children: ReactNode; content: string }) => (
    <Tooltip content={content}>
      <span>{children}</span>
    </Tooltip>
  ),
  Figure,

  ThemesLinkCard: ({ title, desc, href }: { title: string; desc: string; href: string }) => (
    <NextLink href={href || ''} passHref legacyBehavior>
      <Card size="2" asChild>
        <a>
          <Text as="div" size="2" weight="bold" mb="1">{title}</Text>
          <Text as="p" size="2" color="gray">{desc}</Text>
        </a>
      </Card>
    </NextLink>
  ),
};
