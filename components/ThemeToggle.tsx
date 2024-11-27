import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Switch, Flex } from "@radix-ui/themes";
import Head from "next/head";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <>
      <Head>
        <style>{`
          :root {
            transition: background-color 0.3s ease, 
                        color 0.3s ease,
                        border-color 0.3s ease;
          }
          
          :root, .light, .light-theme {
            --theme-toggle-sun-icon-display: block;
            --theme-toggle-moon-icon-display: none;
          }
          .dark, .dark-theme {
            --theme-toggle-sun-icon-display: none;
            --theme-toggle-moon-icon-display: block;
          }
        `}</style>
      </Head>
      <Flex align="center" gap="2">
        <SunIcon width="16" height="16" />
        <Switch 
          size="2" 
          checked={theme === 'dark'}
          onCheckedChange={(checked) => {
            const newTheme = checked ? 'dark' : 'light';
            setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
          }}
        />
        <MoonIcon width="16" height="16" />
      </Flex>
    </>
  );
};