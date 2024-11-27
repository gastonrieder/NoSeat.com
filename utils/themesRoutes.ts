export const themesRoutes = [
	{
		label: "Africa",
		pages: [
			{
				title: "Egypt",
				slug: "africa/egypt",
				cities: ["Alexandria", "Cairo", "Giza"]
			},
			{
				title: "Kenya",
				slug: "africa/kenya",
				cities: ["Mombasa", "Nairobi"]
			},
			{
				title: "Morocco",
				slug: "africa/morocco",
				cities: ["Casablanca", "Fez", "Marrakesh", "Rabat"]
			},
			{
				title: "Nigeria",
				slug: "africa/nigeria",
				cities: ["Abuja", "Kano", "Lagos"]
			},
			{
				title: "South Africa",
				slug: "africa/south-africa",
				cities: ["Cape Town", "Durban", "Johannesburg", "Pretoria"]
			}
		]
	},
	{
		label: "Asia",
		pages: [
			{
				title: "China",
				slug: "asia/china",
				cities: ["Beijing", "Guangzhou", "Hong Kong", "Shanghai", "Shenzhen"]
			},
			{
				title: "Japan",
				slug: "asia/japan",
				cities: ["Kyoto", "Nagoya", "Osaka", "Sapporo", "Tokyo"]
			},
			{
				title: "Singapore",
				slug: "asia/singapore",
				cities: ["Singapore"]
			},
			{
				title: "South Korea",
				slug: "asia/south-korea",
				cities: ["Busan", "Daegu", "Daejeon", "Incheon", "Seoul"]
			}
		]
	},
	{
		label: "Europe",
		pages: [
			{
				title: "France",
				slug: "europe/france",
				cities: ["Bordeaux", "Lyon", "Marseille", "Nice", "Paris"]
			},
			{
				title: "Germany",
				slug: "europe/germany",
				cities: ["Berlin", "Cologne", "Frankfurt", "Hamburg", "Munich"]
			},
			{
				title: "Italy",
				slug: "europe/italy",
				cities: ["Florence", "Milan", "Naples", "Rome", "Venice"]
			},
			{
				title: "Spain",
				slug: "europe/spain",
				cities: ["Barcelona", "Bilbao", "Madrid", "Seville", "Valencia"]
			},
			{
				title: "Sweden",
				slug: "europe/sweden",
				cities: ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Linköping"]
			},
			{
				title: "United Kingdom",
				slug: "europe/uk",
				cities: ["Edinburgh", "Glasgow", "Liverpool", "London", "Manchester"]
			}
		]
	},
	{
		label: "North America",
		pages: [
			{
				title: "Canada",
				slug: "north-america/canada",
				cities: ["Calgary", "Montreal", "Ottawa", "Toronto", "Vancouver"]
			},
			{
				title: "Mexico",
				slug: "north-america/mexico",
				cities: ["Guadalajara", "Mexico City", "Monterrey"]
			},
			{
				title: "United States",
				slug: "north-america/usa",
				cities: ["Boston", "Chicago", "New York", "San Francisco", "Washington DC"]
			}
		]
	},
	{
		label: "South America",
		pages: [
			{
				title: "Argentina",
				slug: "south-america/argentina",
				cities: ["Buenos Aires", "Córdoba", "Mendoza", "Rosario"]
			},
			{
				title: "Brazil",
				slug: "south-america/brazil",
				cities: ["Brasília", "Curitiba", "Rio de Janeiro", "Salvador", "São Paulo"]
			},
			{
				title: "Chile",
				slug: "south-america/chile",
				cities: ["Concepción", "Santiago", "Valparaíso"]
			}
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