import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Switch, Flex, Box, IconButton } from "@radix-ui/themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  // Desktop version with switch
  const DesktopToggle = (
    <Flex display={{ initial: 'none', md: 'flex' }} align="center" gap="2">
      <SunIcon width="16" height="16" color="var(--gray-a11)"/>
      <Switch 
        size="2" 
        checked={theme === 'dark'}
        onCheckedChange={(checked) => {
          setTheme(checked ? 'dark' : 'light');
        }}
      />
      <MoonIcon width="16" height="16" color="var(--gray-a11)"/>
    </Flex>
  );

  // Mobile version with single icon
const MobileToggle = (
  <Flex
    display={{ initial: 'flex', md: 'none' }} 
    style={{ height: '100%', alignItems: 'center' }}
  >
    <IconButton 
      size="2" 
      variant="ghost"
      color="gray" 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? 
        <MoonIcon width="16" height="16" /> : 
        <SunIcon width="16" height="16" />
      }
    </IconButton>
  </Flex>
);

  return (
    <>
      {DesktopToggle}
      {MobileToggle}
    </>
  );
};