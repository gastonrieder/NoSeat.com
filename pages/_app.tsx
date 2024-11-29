import React from "react";
import { AppProps } from "next/app";
import { Router, useRouter } from "next/router";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "@components/ThemeProvider";
import { handleUrlChange } from "@utils/analytics";
import { CssLibPreferenceProvider } from "@components/CssLibPreference";
import { ThemesDocsPage } from "@components/ThemesDocsPage";
import { Favicon } from "@components/Favicon";
import "@radix-ui/themes/styles.css";
import "./styles.css";
import "./syntax-highlighting.css";

function Pages({ Component, pageProps }: AppProps) {
	const router = useRouter();

	
	if (router.pathname.startsWith("/themes/docs")) {
		return (
			<Theme accentColor="indigo" className="radix-themes-custom-fonts">
				<ThemesDocsPage>
					<Favicon />
					<Component {...pageProps} />
				</ThemesDocsPage>
			</Theme>
		);
	}

	return (
		<Theme accentColor="indigo" className="radix-themes-custom-fonts">
			<Favicon />
			<Component {...pageProps} />
		</Theme>
	);
}

import { SearchRoot } from "@components/PrimitivesSearch";

function App(props: AppProps) {
	useAnalytics();

	return (
		<SearchRoot>
			<CssLibPreferenceProvider>
				<ThemeProvider>
					<Pages {...props} />
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
