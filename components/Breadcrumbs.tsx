import { Flex, Text } from "@radix-ui/themes";
import { ChevronRightIcon, GlobeIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { themesRoutes } from "@utils/themesRoutes";
import * as Accordion from '@radix-ui/react-accordion';
import styles from "./DocsNav.module.css";

interface BreadcrumbsProps {
  continent: string;
  country: string;
  city: string;
}

export const Breadcrumbs = ({ continent, country, city }: BreadcrumbsProps) => {
  const continentData = themesRoutes.find(route => 
    route.label.toLowerCase().replace(/\s+/g, '-') === continent.toLowerCase()
  );
  const countryData = continentData?.pages.find(page => page.slug.includes(country.toLowerCase()));

  return (
    <Flex gap="2" align="center" mb="4">
      <GlobeIcon />
      <ChevronRightIcon />
      <Text size="2" color="gray">{continentData?.label || continent}</Text>
      <ChevronRightIcon />
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="cities">
          <Accordion.Trigger className={styles.AccordionTrigger}>
            <Text size="2" color="gray">{countryData?.title || country}</Text>
            <ChevronDownIcon className={styles.AccordionChevron} />
          </Accordion.Trigger>
          <Accordion.Content className={styles.AccordionContent}>
            {countryData?.cities.map(cityName => (
              <Text key={cityName} size="2" className={styles.CityItem}>
                {cityName}
              </Text>
            ))}
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
      <ChevronRightIcon />
      <Text size="2">{city}</Text>
    </Flex>
  );
};