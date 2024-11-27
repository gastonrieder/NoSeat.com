import * as React from "react";
import styles from "./PrimitivesSearchDesktop.module.css";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Flex, Kbd, Tooltip } from "@radix-ui/themes";
import { useSearchContext } from "./PrimitivesSearch";

export const PrimitivesSearchDesktop = () => {
  const { setSearchQuery } = useSearchContext("CitySearch");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const isEditingContent = (event: KeyboardEvent) => {
      const element = event.target as HTMLElement;
      const tagName = element.tagName;
      return (
        element.isContentEditable ||
        ["INPUT", "SELECT", "TEXTAREA"].includes(tagName)
      );
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const isSlashKey = event.key === "/";
      if (!isEditingContent(event) && isSlashKey) {
        inputRef.current?.focus();
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Box>

      <div 
        className={styles.PrimitivesSearchDesktopButton}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <MagnifyingGlassIcon />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search cities..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.PrimitivesSearchDesktopInput}

        />
        <Tooltip
          className="radix-themes-custom-fonts"
          content="Press Slash key to search"
        >
          <Flex ml="auto" my="-2" aria-hidden>
            <Kbd size="2">/</Kbd>
          </Flex>
        </Tooltip>
      </div>
    </Box>
  );

};
