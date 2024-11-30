import { components } from "@components/MDXComponents";
import * as themesDocsAssets from "@components/ThemesDocsAssets";
import * as themesDocsTables from "@components/ThemesDocsTables";
import * as icons from "@radix-ui/react-icons";
import { Figure } from "./Figure";
import { ThemesPropsTable } from "./ThemesPropsTable";
import { ThemesUnofficialFigmaLibrary } from "./ThemesUnofficialFigmaLibrary";
import { ThemesUnofficialTailwindPlugin } from "./ThemesUnofficialTailwindPlugin";
import { Box, Text, Card, Tooltip, Theme } from "@radix-ui/themes";
import NextLink from "next/link";
import { ReactNode } from 'react';
import type { TooltipProps } from '@radix-ui/themes';

export const ThemesMDXComponents = {
	...components,
	table: (props: any) => (
		<table 
			{...props} 
			style={{ 
				width: '100%', 
				borderCollapse: 'collapse', 
				marginBottom: '1rem'
			}} 
		/>
	),
	th: (props: any) => (
		<th 
			{...props} 
			style={{ 
				borderBottom: '2px solid var(--gray-5)',
				padding: '0.5rem',
				textAlign: 'left'
			}} 
		/>
	),
	td: (props: any) => (
		<td 
			{...props} 
			style={{ 
				borderBottom: '1px solid var(--gray-4)',
				padding: '0.5rem'
			}} 
		/>
	),
	...themesDocsAssets,
	...themesDocsTables,
	...icons,
	Tooltip: ({ children, content }: { children: ReactNode; content: string }) => (
		<Tooltip content={content}>
		  <span>{children}</span>
		</Tooltip>
	  ),
	Figure,
	ThemesUnofficialFigmaLibrary,
	ThemesUnofficialTailwindPlugin,
	ThemesPropsTable: (props: any) => (
		<Box mt="4" mb="6">
			<ThemesPropsTable {...props} />
		</Box>
	),
	ThemesLinkCard: ({
		title,
		desc,
		href,
	}: {
		title: string;
		desc: string;
		href: string;
	}) => {
		const cardContent = (
			<>
				<Text as="div" size="2" weight="bold" mb="1">
					{title}
				</Text>
				<Text as="p" size="2" color="gray">
					{desc}
				</Text>
			</>
		);

		return href ? (
			<NextLink href={href} passHref legacyBehavior>
				<Card size="2" asChild>
					<a>{cardContent}</a>
				</Card>
			</NextLink>
		) : (
			<Card size="2">{cardContent}</Card>
		);
	},
};