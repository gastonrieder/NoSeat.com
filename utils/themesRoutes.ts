export const themesRoutes = [
	{
		label: "Africa (coming soon)",
		pages: [
			{
				title: "Nothing here for now",
				slug: "africa/nothing-here-for-now",
				cities: ["Nothing here for now"]
			},
		]
	},
	{
		label: "Asia",
		pages: [
			{
				title: "China",
				slug: "asia/china",
				cities: ["Chengdu (coming soon)"]
				// cities: ["Beijing", "Guangzhou", "Hong Kong", "Shanghai", "Shenzhen"]
			},
			{
				title: 'Hong Kong',
				slug: 'asia/hong-kong',
				cities: ['Hong Kong']
			},
			{
				title: 'India',
				slug: 'asia/india',
				cities: ['Delhi (coming soon)']
			},
		]
	},
	{
		label: "Europe",
		pages: [
			{
				title: "Belgium",
				slug: "europe/belgium",
				cities: ["Brussels"]
			},
			// {
			// 	title: "France",
			// 	slug: "europe/france",
			// 	cities: ["Paris"]
			// },
			{
				title: 'Netherlands',
				slug: 'europe/netherlands',
				cities: ['Amsterdam (coming soon)']
			},
			{
				title: "Germany",
				slug: "europe/germany",
				cities: ["Berlin (coming soon)"]
			},
			{
				title: "United Kingdom",
				slug: "europe/uk",
				cities: ["London", "Edinburgh (coming soon)"]
			}
		]
	},
	{
		label: "North America",
		pages: [
			{
				title: "Canada",
				slug: "north-america/canada",
				cities: ["Toronto"]
			},
			// {
			// 	title: "Mexico",
			// 	slug: "north-america/mexico",
			// 	cities: ["Nothing here for now"]
			// 	// cities: ["Cancún", "Guadalajara", "Mexico City", "Monterrey"]
			// },
			{
				title: "United States",
				slug: "north-america/usa",
				cities: ["New York City (coming soon)"]
			}
		]
	},
	{
		label: "South America",
		pages: [
			{
				title: "Argentina",
				slug: "south-america/argentina",
				cities: ["Buenos Aires (coming soon)"]
			},
			// {
			// 	title: "Brazil",
			// 	slug: "south-america/brazil",
			// 	cities: ["Nothing here for now"]
			// 	// cities: ["Belo Horizonte", "Brasília", "Curitiba", "Rio de Janeiro", "Salvador", "São Paulo"]
			// },
			// {
			// 	title: "Chile",
			// 	slug: "south-america/chile",
			// 	cities: ["Nothing here for now"]
			// 	// cities: ["Antofagasta", "Arica", "Calama", "Copiapó", "Iquique", "La Serena", "Puerto Montt", "Punta Arenas", "Santiago"]
			// }
		]
	}
];
export type PageProps = {
	title: string;
	slug: string;
	cities: string[];
};

export type RouteProps = {
	label: string;
	pages: PageProps[];
};

export const allThemesRoutes = themesRoutes.reduce<PageProps[]>((acc, curr) => {
	return [...acc, ...curr.pages];
}, []);