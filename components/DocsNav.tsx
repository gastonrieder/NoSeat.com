import React from "react";
import { Text, Box } from "@radix-ui/themes";
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronRightIcon } from '@radix-ui/react-icons';
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

  const createCityUrl = (countrySlug: string, city: string) => 
    `/cities/${countrySlug}/${city.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')}`;

  const filteredRoutes = React.useMemo(() => 
    routes.map(continent => ({
      ...continent,
      pages: continent.pages.map(country => ({
        ...country,
        cities: country.cities.filter(city => 
          city.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(country => country.cities.length > 0)
    })).filter(continent => continent.pages.length > 0),
    [routes, searchQuery]
  );

  React.useEffect(() => {
    if (searchQuery.trim() === '') {
      setExpandedContinents([]);
      setExpandedCountries([]);
      return;
    }

    if (filteredRoutes.length > 0) {
      setExpandedContinents(filteredRoutes.map(continent => continent.label));
      setExpandedCountries(filteredRoutes.flatMap(continent => 
        continent.pages.map(country => country.slug)
      ));
    }
  }, [searchQuery, filteredRoutes]);

  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && searchQuery) {
        const allCities = filteredRoutes
          .flatMap(continent => continent.pages)
          .flatMap(country => country.cities.map(city => ({
            city,
            countrySlug: country.slug
          })));

        if (allCities.length === 1) {
          const { city, countrySlug } = allCities[0];
          window.location.href = createCityUrl(countrySlug, city);
        }
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [searchQuery, filteredRoutes]);

  const handleAccordionChange = (setter: React.Dispatch<React.SetStateAction<string[]>>) => 
    (values: string[]) => {
      if (!searchQuery) {
        setter(values);
      }
    };

  return (
    <Box>
      <Accordion.Root 
        type="multiple" 
        value={expandedContinents}
        onValueChange={handleAccordionChange(setExpandedContinents)}
      >
        {filteredRoutes.map((continent) => (
          <Accordion.Item key={continent.label} value={continent.label}>
            <Accordion.Header>
              <Accordion.Trigger className={styles.AccordionTrigger} data-level="continent">
                <Text size="3" weight="bold">{continent.label}</Text>
                <ChevronRightIcon className={styles.AccordionChevron} aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            
            <Accordion.Content className={styles.AccordionContent}>
              <Accordion.Root 
                type="multiple"
                value={expandedCountries}
                onValueChange={handleAccordionChange(setExpandedCountries)}
              >
                {continent.pages.map((country) => (
                  <Accordion.Item key={country.slug} value={country.slug}>
                    <Accordion.Header>
                      <Accordion.Trigger className={styles.AccordionTrigger} data-level="country">
                        <Text size="2">{country.title}</Text>
                        <ChevronRightIcon className={styles.AccordionChevron} aria-hidden />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className={styles.AccordionContent}>
                      {country.cities.map((city) => {
                        const cityUrl = createCityUrl(country.slug, city);
                        return (
                          <NextLink key={city} href={cityUrl}>
                            <Box className={styles.CityItem}>
                              <Text size="1">{city}</Text>
                            </Box>
                          </NextLink>
                        );
                      })}
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