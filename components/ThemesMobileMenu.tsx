"use client";
import { themesRoutes } from "@utils/themesRoutes";
import { Box, ScrollArea } from "@radix-ui/themes";
import { Header } from "./Header";
import { DocsNav } from "./DocsNav";
import { MobileMenu } from "./MobileMenu";

export const ThemesMobileMenu = () => (
  <MobileMenu>
    <Header />
    <ScrollArea>
      <Box pt="4" px="3" pb="9">
        <DocsNav
          routes={[
            {
              label: "Menu",
              pages: [
                {
                  title: "Homepage",
                  slug: "",
                  cities: [],
                },
              ],
            },
            ...themesRoutes,
          ]}
        />
      </Box>
    </ScrollArea>
  </MobileMenu>
);
