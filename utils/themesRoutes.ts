export const themesRoutes = [
	{
		label: "Africa (coming soon)",
		pages: [
			{
				title: "Nothing here for now",
				slug: "africa/nothing-here-for-now",
				cities: ["Nothing here for now"]
			},
			// {
			// 	title: "Egypt",
			// 	slug: "africa/egypt",
			// 	cities: ["Nothing here for now"]
			// 	// cities: ["Alexandria", "Cairo", "Giza"]
			// },
			// {
			// 	title: "Kenya",
			// 	slug: "africa/kenya",
			// 	cities: ["Nothing here for now"]
			// 	// cities: ["Mombasa", "Nairobi"]
			// },
			// {
			// 	title: "Morocco",
			// 	slug: "africa/morocco",
			// 	cities: ["Nothing here for now"]
			// 	// cities: ["Casablanca", "Fez", "Marrakesh", "Rabat"]
			// },
			// {
			// 	title: "Nigeria",
			// 	slug: "africa/nigeria",
			// 	cities: ["Nothing here for now"]
			// 	//cities: ["Abuja", "Kano", "Lagos"]
			// },
			// {
			// 	title: "South Africa",
			// 	slug: "africa/south-africa",
			// 	cities: ["Nothing here for now"]
			// 	// cities: ["Cape Town", "Durban", "Johannesburg", "Pretoria"]
			// }
		]
	},
	{
		label: "Asia (coming soon)",
		pages: [
			{
				title: "Nothing here for now",
				slug: "asia/nothing-here-for-now",
				cities: ["Nothing here for now"]
			},
			// {
			// 	title: "China",
			// 	slug: "asia/china",
			// 	cities: ["Nothing here for now"]
			// 	// cities: ["Beijing", "Guangzhou", "Hong Kong", "Shanghai", "Shenzhen"]
			// },
			// {
			// 	title: "Japan",
			// 	slug: "asia/japan",
			// 	cities: ["Nothing here for now"]
			// 	// cities: ["Fukuoka", "Hiroshima", "Kyoto", "Nagoya", "Osaka", "Sapporo", "Tokyo"]
			// },
			// {
			// 	title: "Singapore",
			// 	slug: "asia/singapore",
			// 	cities: ["Nothing here for now"]
			// 	//cities: ["Singapore"]
			// },
			// {
			// 	title: "South Korea",
			// 	slug: "asia/south-korea",
			// 	cities: ["Nothing here for now"]
			// 	// cities: ["Busan", "Daegu", "Daejeon", "Incheon", "Seoul"]
			// }
		]
	},
	{
		label: "Europe",
		pages: [
			{
				title: "France",
				slug: "europe/france",
				cities: ["Paris"]
				//cities: ["Bordeaux", "Lyon", "Marseille", "Nice", "Paris"]
			},
			// {
			// 	title: "Germany",
			// 	slug: "europe/germany",
			// 	cities: ["Nothing here for now"]
			// 	// cities: ["Berlin", "Cologne", "Frankfurt", "Hamburg", "Munich"]
			// },
			// {
			// 	title: "Italy",
			// 	slug: "europe/italy",
			// 	cities: ["Nothing here for now"]
			// 	// cities: ["Florence", "Milan", "Naples", "Rome", "Venice"]
			// },
			// {
			// 	title: "Spain",
			// 	slug: "europe/spain",
			// 	cities: ["Nothing here for now"]
			// 	// cities: ["Barcelona", "Bilbao", "Madrid", "Seville", "Valencia"]
			// },
			// {
			// 	title: "Sweden",
			// 	slug: "europe/sweden",
			// 	cities: ["Nothing here for now"]
			// 	// cities: ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Linköping"]
			// },
			{
				title: "United Kingdom",
				slug: "europe/uk",
				cities: ["London"]
				// cities: ["Belfast", "Birmingham", "Bristol", "Cardiff", "Edinburgh", "Glasgow", "Liverpool", "London", "Manchester"]
			}
		]
	},
	{
		label: "N. America (coming soon)",
		pages: [
			{
				title: "Nothing here for now",
				slug: "north-america/nothing-here-for-now",
				cities: ["Nothing here for now"]
			},
			// {
			// 	title: "Canada",
			// 	slug: "north-america/canada",
			// 	cities: ["Nothing here for now"]
			// 	// cities: ["Calgary", "Montreal", "Ottawa", "Toronto", "Vancouver"]
			// },
			// {
			// 	title: "Mexico",
			// 	slug: "north-america/mexico",
			// 	cities: ["Nothing here for now"]
			// 	// cities: ["Cancún", "Guadalajara", "Mexico City", "Monterrey"]
			// },
			// {
			// 	title: "United States",
			// 	slug: "north-america/usa",
			// 	cities: ["Nothing here for now"]
			// 	// cities: ["Atlanta", "Austin", "Boston", "Chicago", "Dallas", "Denver", "Detroit", "Houston", "Los Angeles", "Miami", "New York", "Philadelphia", "Phoenix", "Portland", "San Antonio", "San Diego", "San Francisco", "Seattle", "Washington DC"]
			// }
		]
	},
	{
		label: "S. America (coming soon)",
		pages: [
			{
				title: "Nothing here for now",
				slug: "south-america/nothing-here-for-now",
				cities: ["Nothing here for now"]
			},
			// {
			// 	title: "Argentina",
			// 	slug: "south-america/argentina",
			// 	cities: ["Nothing here for now"]
			// 	// cities: ["Buenos Aires", "Córdoba", "Mendoza", "Rosario"]
			// },
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