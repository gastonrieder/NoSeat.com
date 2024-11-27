"use client";
import * as React from "react";
import {
  Flex,
  IconButton,
  Link,
  Theme,
  Tooltip,
  Text
} from "@radix-ui/themes";
import styles from "./Header.module.css";
import { ThemeToggle } from "./ThemeToggle";
import { TwitterLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useMobileMenuContext } from "./MobileMenu";
import { RemoveScroll } from "react-remove-scroll";
import { BoxLink } from "./BoxLink";

export const Header = () => {
  const mobileMenu = useMobileMenuContext();
  const router = useRouter();

  return (
    <Theme asChild className="radix-themes-custom-fonts">
      <div className={styles.HeaderRoot}>
        <div className={styles.HeaderInner}>
          <div className={RemoveScroll.classNames.fullWidth}>
		  <Flex align="center" position="absolute" top="0" bottom="0" left="0" pl="4">
				<NextLink href="/" passHref legacyBehavior>
					<BoxLink>
						<Text size="6" weight="bold">NoSeat.com</Text>
					</BoxLink>
				</NextLink>
			</Flex>
            <div className={styles.HeaderProductLinksContainer}>
              <HeaderProductLink href="/" active={router.pathname === "/"}>
                Home
              </HeaderProductLink>
              <HeaderProductLink href="/about" active={router.pathname.startsWith("/about")}>
                About
              </HeaderProductLink>
              <HeaderProductLink href="/support" active={router.pathname.startsWith("/support")}>
                Support us!
              </HeaderProductLink>
            </div>

            <Flex
              display={{ initial: "none", md: "flex" }}
              align="center"
              gap="5"
              position="absolute"
              top="0"
              bottom="0"
              right="0"
              pr="4"
            >
              <Link size="2" color="gray" href="/contribute">
                Don't see your city? Contribute!
              </Link>

              <Tooltip content="No Twitter for now!">
                <IconButton asChild size="3" variant="ghost" color="gray">
                  <a  target="_blank" aria-label="Follow us on Twitter!">
                    <TwitterLogoIcon width="16" height="16" />
                  </a>
                </IconButton>
              </Tooltip>

              <ThemeToggle />
            </Flex>

            <Flex
              display={{ md: "none" }}
              align="center"
              gap="4"
              position="absolute"
              top="0"
              bottom="0"
              right="0"
              pr="4"
            >
              <ThemeToggle />
              <IconButton
                size="3"
                variant="ghost"
                color="gray"
                onClick={() => mobileMenu.setOpen((open) => !open)}
              >
                <HamburgerMenuIcon width="16" height="16" />
              </IconButton>
            </Flex>
          </div>
        </div>
      </div>
    </Theme>
  );
};

const HeaderProductLink = ({
	active,
	children,
	href = "",
	...props
  }: React.ComponentPropsWithoutRef<"a"> & { active?: boolean }) => (
	<NextLink 
	  href={href} 
	  passHref 
	  legacyBehavior
	>
	  <a
		data-state={active ? "active" : "inactive"}
		className={styles.HeaderProductLink}
		{...props}
	  >
		<span className={styles.HeaderProductLinkInner}>{children}</span>
		<span className={styles.HeaderProductLinkInnerHidden}>{children}</span>
	  </a>
	</NextLink>
  );