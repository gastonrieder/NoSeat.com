import React from 'react';
import { Box, Button, Flex, Text, ScrollArea } from '@radix-ui/themes';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { PrimitivesSearch } from './PrimitivesSearch';

const geoData = {
  Africa: {
    Egypt: ['Cairo', 'Alexandria'],
    Nigeria: ['Lagos', 'Abuja'],
    Kenya: ['Nairobi', 'Mombasa']
  },
  Asia: {
    Japan: ['Tokyo', 'Osaka'],
    China: ['Beijing', 'Shanghai'],
    India: ['Mumbai', 'Delhi']
  },
  Europe: {
    France: ['Paris', 'Lyon'],
    Germany: ['Berlin', 'Munich'],
    Italy: ['Rome', 'Milan'],
    'United Kingdom': ['London', 'Manchester']
  },
  'North America': {
    'USA': ['New York', 'Los Angeles'],
    Canada: ['Toronto', 'Vancouver'],
    Mexico: ['Mexico City', 'Cancun']
  },
  'South America': {
    Brazil: ['São Paulo', 'Rio de Janeiro'],
    Argentina: ['Buenos Aires', 'Córdoba'],
    Chile: ['Santiago', 'Valparaíso']
  }
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [selectedContinent, setSelectedContinent] = React.useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = React.useState<string | null>(null);

  return (
    <Box
      style={{
        position: 'fixed',
        left: isOpen ? 0 : '-320px',
        top: 0,
        bottom: 0,
        width: '320px',
        backgroundColor: 'var(--color-panel-solid)',
        borderRight: '1px solid var(--gray-a5)',
        transition: 'left 0.3s ease',
        zIndex: 100,
      }}
    >
      <Button
        variant="ghost"
        style={{
          position: 'absolute',
          right: '-40px',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </Button>

      <ScrollArea style={{ height: '100vh' }}>
        <Flex direction="column" p="4" gap="4">
          <Text size="5" weight="bold">
            Geographic Navigation
          </Text>

          <PrimitivesSearch.Root>
            <PrimitivesSearch.Input>
              <input placeholder="Search locations..." />
            </PrimitivesSearch.Input>
            <PrimitivesSearch.ResultsPanel>
              <PrimitivesSearch.Results />
            </PrimitivesSearch.ResultsPanel>
          </PrimitivesSearch.Root>
          
          {Object.entries(geoData).map(([continent, countries]) => (
            <Box key={continent}>
              <Text 
                size="3" 
                weight="bold" 
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedContinent(continent === selectedContinent ? null : continent)}
              >
                {continent}
              </Text>
              
              {selectedContinent === continent && (
                <Box pl="3" mt="2">
                  {Object.entries(countries).map(([country, cities]) => (
                    <Box key={country} mb="2">
                      <Text 
                        size="2" 
                        weight="medium"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setSelectedCountry(country === selectedCountry ? null : country)}
                      >
                        {country}
                      </Text>
                      
                      {selectedCountry === country && (
                        <Box pl="3" mt="1">
                          {cities.map(city => (
                            <Text 
                              key={city} 
                              size="2" 
                              style={{ cursor: 'pointer' }}
                              onClick={() => console.log(`Selected: ${city}`)}
                            >
                              {city}
                            </Text>
                          ))}
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Flex>
      </ScrollArea>
    </Box>
  );
};