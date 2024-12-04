import * as React from "react";
import { createContext } from "@radix-ui/react-context";

export const [SearchProvider, useSearchContext] = createContext<{
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearching: boolean;
}>("CitySearch");

export function SearchRoot({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const isSearching = searchQuery.length > 0;
  
  return (
    <SearchProvider 
      searchQuery={searchQuery} 
      setSearchQuery={setSearchQuery}
      isSearching={isSearching}
    >
      {children}
    </SearchProvider>
  );
}



export const PrimitivesSearch = {
  Root: SearchRoot,
};
