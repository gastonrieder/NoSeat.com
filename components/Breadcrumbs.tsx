import { Flex, Text } from "@radix-ui/themes";
import { ChevronRightIcon, GlobeIcon } from "@radix-ui/react-icons";
import { themesRoutes } from "@utils/themesRoutes";

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
      <Text size="2" color="gray">{countryData?.title || country}</Text>
      <ChevronRightIcon />
      <Text size="2">{city}</Text>
    </Flex>
  );
};
