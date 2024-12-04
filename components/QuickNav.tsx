import React from "react";
import { Box, Link, Heading, ScrollArea } from "@radix-ui/themes";
import styles from "./QuickNav.module.css";

export function QuickNav({ title = "Route mapper (if you'll pardon the pun)" }: { title?: string }) {
  const [headings, setHeadings] = React.useState<HTMLHeadingElement[]>([]);
  const [isMobileOrTablet, setIsMobileOrTablet] = React.useState(false);

  React.useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("[data-heading]"));
    setHeadings(headingElements as HTMLHeadingElement[]);

    const checkDeviceType = () => setIsMobileOrTablet(window.innerWidth <= 1024);
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  const getLevel = (nodeName: string) => Number(nodeName.replace("H", ""));

  const navContent = (
    <ScrollArea>
      <Box
        asChild
        px="5"
        aria-labelledby="route-mapper"        style={{
          paddingBlock: 20,
          display: headings.length === 0 ? "none" : "block",
        }}
      >
        <nav>
          <Heading mb="3" size="4" id="route-mapper" asChild>
            <h4>{title}</h4>
          </Heading>
          <Box asChild p="0" style={{ listStyle: "none" }}>
            <ul>
              {headings.map(({ id, nodeName, innerText }) => {
                const level = getLevel(nodeName);
                return (
                  <Box
                    asChild
                    key={id}
                    data-level={level}
                    className={styles.LinkWrapper}
                  >
                    <li>
                      <Link 
                        href={`#${id}`} 
                        color="gray" 
                        size={level === 2 ? "2" : "1"}
                        weight={level === 2 ? "medium" : "regular"}
                        className={styles.Link}
                      >
                        {innerText}
                      </Link>
                    </li>
                  </Box>
                );
              })}
            </ul>
          </Box>
        </nav>
      </Box>
    </ScrollArea>
  );

  return (
    <Box
      className={isMobileOrTablet ? styles.mobileQuickNav : styles.desktopQuickNav}
      data-algolia-exclude
    >
      {navContent}
    </Box>
  );
}
