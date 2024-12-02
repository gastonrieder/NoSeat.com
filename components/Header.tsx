"use client";
import * as React from "react";
import {
  Flex,
  IconButton,
  Link,
  Theme,
  Tooltip,
  Text,
  Box
} from "@radix-ui/themes";
import { HomeIcon, InfoCircledIcon, HeartFilledIcon, TwitterLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import styles from "./Header.module.css";
import { ThemeToggle } from "./ThemeToggle";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useMobileMenuContext } from "./MobileMenu";
import { BoxLink } from "./BoxLink";


export const Header = () => {
  const mobileMenu = useMobileMenuContext();
  const router = useRouter();

  return (
    <Theme asChild className="radix-themes-custom-fonts">
      <div className={styles.HeaderRoot}>
        <div className={styles.HeaderInner}>
          <Flex align="center" position="absolute" top="0" bottom="0" left="0" pl="4">
				    <NextLink href="/" passHref legacyBehavior>
					    <BoxLink>
						    <Text size="6" weight="bold">NoSeat.com</Text>
					    </BoxLink>
				    </NextLink>
			    </Flex>

          {/* Center: Navigation */}
          <div className={styles.HeaderProductLinksContainer}>
            {/* Desktop Nav */}
            <Flex display={{ initial: 'none', md: 'flex' }} gap="3" justify="center">
              <HeaderProductLink href="/" active={router.pathname === "/"}>
                Home
              </HeaderProductLink>
              <HeaderProductLink href="/about" active={router.pathname.startsWith("/about")}>
                About
              </HeaderProductLink>
              <HeaderProductLink href="/support" active={router.pathname.startsWith("/support")}>
                Support us!
              </HeaderProductLink>
            </Flex>

            {/* Mobile Nav */}
            <Flex display={{ md: 'none' }} justify="center" align="center" style={{ height: '100%' }}>
              <HeaderProductLink href="/" active={router.pathname === "/"}>
                <HomeIcon width="18" height="18" />
              </HeaderProductLink>
              <HeaderProductLink href="/about" active={router.pathname.startsWith("/about")}>
                <InfoCircledIcon width="18" height="18" />
              </HeaderProductLink>
              <HeaderProductLink href="/support" active={router.pathname.startsWith("/support")}>
                <HeartFilledIcon width="18" height="18" />
              </HeaderProductLink>
            </Flex>
          </div>

          {/* Right: Actions */}
          <Flex
            align="center"
            gap="4"
            position="absolute"
            top="0"
            bottom="0"
            right="0"
            pr="4">
            <Box display={{ initial: 'none', md: 'block' }}>
              <Link size="2" color="gray" href="mailto:gastonrieder@gmail.com">
                Don't see your city? Contribute!
              </Link>
            </Box>

            <Tooltip content="No Twitter for now!">
              <IconButton asChild size="3" variant="ghost" color="gray">
                <a target="_blank" aria-label="No Twitter for now!">
                  <TwitterLogoIcon width="16" height="16" />
                </a>
              </IconButton>
            </Tooltip>

            <ThemeToggle />

            <Box display={{ initial: 'block', md: 'none' }}>
              <a
                data-state= "active"
                className={styles.HeaderProductLink}
                onClick={() => mobileMenu.setOpen((open) => !open)}
                style={{ display: 'flex', alignItems: 'center', height: '100%' }}
                >
                <span className={styles.HeaderProductLinkInner}>
                  <HamburgerMenuIcon width="16" height="16" />
                </span>
                <span className={styles.HeaderProductLinkInnerHidden}>
                  <HamburgerMenuIcon width="16" height="16" />
                </span>
              </a>
            </Box>
          </Flex>
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
  <NextLink href={href} passHref legacyBehavior>
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
