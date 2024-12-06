import React from "react";
import { Box, Text, Flex, Link, Tooltip} from "@radix-ui/themes";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import styles from "./Footer.module.css";

export const Footer = () => {
	return (
	  <Flex 
		justify="between" 
		align="center" 
		className={styles.FooterContainer}
	  >
		<Box style={{ flex: 1 }}>
		  <Text size="2" color='gray'>
			noseat.co © 2024
		  </Text>
		</Box>
  
		<Flex gap="4" align="center" justify="center" style={{ flex: 1 }}>
		{/* <Tooltip content="No Twitter for now!">
		  <Link  target="_blank">
			<TwitterLogoIcon width="20" height="20" color="gray"/>
		  </Link>
		  </Tooltip> */}
		  {/* <Link href="https://github.com/noseat/contribute" target="_blank">
			<GitHubLogoIcon width="20" height="20" color="gray"/>
		  </Link> */}
		  {/* <Link href="https://linkedin.com/company/noseat" target="_blank">
			<LinkedInLogoIcon width="20" height="20" color='gray' />
		  </Link> */}
		</Flex>
  
		<Box style={{ flex: 1, textAlign: 'right' }}>
		  <Link href="mailto:gastonrieder@gmail.com">
			<Text size="2" color='gray'>
			  Don't see your city? Contribute!
			</Text>
		  </Link>
		</Box>
	  </Flex>
	);
  };
  