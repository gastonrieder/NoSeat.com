"use client";
import { themesRoutes } from "@utils/themesRoutes";
import { Box, ScrollArea } from "@radix-ui/themes";
import { ThemesHeader } from "./ThemesHeader";
import { DocsNav } from "./DocsNav";
import { MobileMenu } from "./MobileMenu";

export const ThemesMobileMenu = () => (
  <MobileMenu>
    <ThemesHeader />
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
