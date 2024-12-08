import React from "react";
import Head from 'next/head'
import { AppProps } from "next/app";
import { Router, useRouter } from "next/router";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import { handleUrlChange } from "@utils/analytics";
import { CssLibPreferenceProvider } from "@components/CssLibPreference";
import { Favicon } from "@components/Favicon";
import { SearchRoot } from "@components/PrimitivesSearch";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import "@radix-ui/themes/styles.css";
import "./styles.css";
import "./syntax-highlighting.css";
import { getTransportImage } from "@utils/unsplash";

const ogImage = await getTransportImage('tram');

function Pages({ Component, pageProps }: AppProps) {
	return (
		<Theme 
			accentColor="indigo" 
			className="radix-themes-custom-fonts"
			appearance="inherit"
		>
			<Head>
				<title>NoSeat.co - Public Transport Guides</title>
				<meta property="og:title" content="NoSeat.co" />
				<meta property="og:description" content="Your guide to seamless public transport payments" />
				<meta property="og:image" content={ogImage}/>
				<meta property="og:url" content="https://noseat.co" />
			</Head>
			<Favicon />
			<Component {...pageProps} />
		</Theme>
	);
}
function App(props: AppProps) {
	useAnalytics();

	return (
		<SearchRoot>
			<CssLibPreferenceProvider>
				<ThemeProvider enableSystem attribute="class" defaultTheme="system">
					<Pages {...props} />
					<Analytics/>
					<SpeedInsights />
				</ThemeProvider>
			</CssLibPreferenceProvider>
		</SearchRoot>
	);
}

export default App;

function useAnalytics() {
	React.useEffect(() => {
		Router.events.on("routeChangeComplete", handleUrlChange);
		return () => {
			Router.events.off("routeChangeComplete", handleUrlChange);
		};
	}, []);
}
