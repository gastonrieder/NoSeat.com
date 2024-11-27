import React from "react";
import { Text, Box } from "@radix-ui/themes";
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { useCurrentPageSlug } from "@utils/useCurrentPageSlug";
import styles from "./DocsNav.module.css";
import NextLink from "next/link";
import { useSearchContext } from "./PrimitivesSearch";

interface DocsNavProps {
	routes: {
		label: string;
		pages: {
			title: string;
			slug: string;
			cities: string[];
		}[];
	}[];
}

export const DocsNav = ({ routes }: DocsNavProps) => {
	const { searchQuery } = useSearchContext("CitySearch");
	const [expandedContinents, setExpandedContinents] = React.useState<string[]>([]);
	const [expandedCountries, setExpandedCountries] = React.useState<string[]>([]);
	
	const filteredRoutes = routes.map(continent => ({
	  ...continent,
	  pages: continent.pages.map(country => ({
		...country,
		cities: country.cities.filter(city => 
		  city.toLowerCase().includes(searchQuery.toLowerCase())
		)
	  })).filter(country => country.cities.length > 0)
	})).filter(continent => continent.pages.length > 0);
  
	// Handle search state changes
	React.useEffect(() => {
	  if (searchQuery.trim() === '') {
		setExpandedContinents([]);
		setExpandedCountries([]);
		return;
	  }
  
	  if (filteredRoutes.length > 0) {
		const matchingContinents = filteredRoutes.map(continent => continent.label);
		const matchingCountries = filteredRoutes
		  .flatMap(continent => continent.pages)
		  .map(country => country.slug);
		
		setExpandedContinents(matchingContinents);
		setExpandedCountries(matchingCountries);
	  }
	}, [searchQuery]);
  
	// Handle manual accordion interactions
	const handleContinentChange = (values: string[]) => {
	  if (!searchQuery) {
		setExpandedContinents(values);
	  }
	};
  
	const handleCountryChange = (values: string[]) => {
	  if (!searchQuery) {
		setExpandedCountries(values);
	  }
	};
  
	return (
	  <Box>
		<Accordion.Root 
		  type="multiple" 
		  value={expandedContinents}
		  onValueChange={handleContinentChange}
		>
		  {filteredRoutes.map((continent) => (
			<Accordion.Item key={continent.label} value={continent.label}>
			  <Accordion.Header>
				<Accordion.Trigger className={styles.AccordionTrigger} data-level="continent">
				  <Text size="3" weight="bold">
					{continent.label}
				  </Text>
				  <ChevronRightIcon className={styles.AccordionChevron} aria-hidden />
				</Accordion.Trigger>
			  </Accordion.Header>
			  
			  <Accordion.Content className={styles.AccordionContent}>
				<Accordion.Root 
				  type="multiple"
				  value={expandedCountries}
				  onValueChange={handleCountryChange}
				>
				  {continent.pages.map((country) => (
					<Accordion.Item key={country.slug} value={country.slug}>
					  <Accordion.Header>
						<Accordion.Trigger className={styles.AccordionTrigger} data-level="country">
						  <Text size="2">
							{country.title}
						  </Text>
						  <ChevronRightIcon className={styles.AccordionChevron} aria-hidden />
						</Accordion.Trigger>
					  </Accordion.Header>
					  <Accordion.Content className={styles.AccordionContent}>
						{country.cities.map((city) => (
						  <NextLink 
							key={city} 
							href={`/cities/${country.slug}/${city.toLowerCase()
							  .normalize('NFD')
							  .replace(/[\u0300-\u036f]/g, '')
							  .replace(/\s+/g, '-')}`} 
						  >
							<Box 
							  className={styles.CityItem}
							  onClick={(e) => {
								e.stopPropagation();
								window.location.href = `/cities/${country.slug}/${city.toLowerCase()
								  .normalize('NFD')
								  .replace(/[\u0300-\u036f]/g, '')
								  .replace(/\s+/g, '-')}`;
							  }}
							>
							  <Text size="1">{city}</Text>
							</Box>
						  </NextLink>
						))}
					  </Accordion.Content>
					</Accordion.Item>
				  ))}
				</Accordion.Root>
			  </Accordion.Content>
			</Accordion.Item>
		  ))}
		</Accordion.Root>
	  </Box>
	);
  };
  