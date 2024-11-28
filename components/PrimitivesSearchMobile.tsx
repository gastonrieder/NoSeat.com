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


// import { Cross2Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
// import { Box, Flex, IconButton } from "@radix-ui/themes";
// import { PrimitivesSearch } from "./PrimitivesSearch";
// import styles from "./PrimitivesSearchMobile.module.css";
// import * as React from "react";

// interface PrimitivesSearchMobileProps {
// 	onSearchShow?: () => void;
// 	onSearchHide?: () => void;
// }

// export const PrimitivesSearchMobile = ({
// 	onSearchShow,
// 	onSearchHide,
// }: PrimitivesSearchMobileProps) => {
// 	const inputRef = React.useRef<HTMLInputElement>(null);

// 	// Dismiss mobile keyboard when scrolling
// 	React.useEffect(() => {
// 		const onTouchMove = (event: TouchEvent) => {
// 			const input = inputRef.current;

// 			if (input === document.activeElement && event.target !== input) {
// 				input?.blur();
// 			}
// 		};

// 		window.addEventListener("touchmove", onTouchMove);
// 		return () => window.removeEventListener("touchmove", onTouchMove);
// 	}, []);

// 	return (
// 		<PrimitivesSearch.Root snippetLength={7} hitsPerPage={20}>
// 			<Box position="relative">
// 				<PrimitivesSearch.Input>
// 					<input
// 						ref={inputRef}
// 						className={styles.PrimitivesSearchMobileInput}
// 					/>
// 				</PrimitivesSearch.Input>

// 				<Flex
// 					position="absolute"
// 					align="center"
// 					top="0"
// 					left="0"
// 					height="40px"
// 					ml="3"
// 					style={{ pointerEvents: "none" }}
// 				>
// 					<MagnifyingGlassIcon width="18" height="18" color="var(--gray-a11)" />
// 				</Flex>

// 				<Flex
// 					align="center"
// 					position="absolute"
// 					top="0"
// 					bottom="0"
// 					right="0"
// 					mr="3"
// 					style={{ zIndex: 1 }}
// 				>
// 					<PrimitivesSearch.ClearButton>
// 						<IconButton size="2" color="gray" variant="ghost" radius="full">
// 							<Cross2Icon width="18" height="18" />
// 						</IconButton>
// 					</PrimitivesSearch.ClearButton>
// 				</Flex>
// 			</Box>

// 			<PrimitivesSearch.ResultsPanel
// 				onSearchShow={onSearchShow}
// 				onSearchHide={onSearchHide}
// 			>
// 				<Box
// 					py="4"
// 					style={{
// 						// Ensure padding when scrolling via keyboard
// 						scrollPaddingTop: "var(--space-2)",
// 						scrollPaddingBottom: "var(--space-2)",
// 					}}
// 				>
// 					<PrimitivesSearch.Results />
// 				</Box>
// 			</PrimitivesSearch.ResultsPanel>
// 		</PrimitivesSearch.Root>
// 	);
// };
