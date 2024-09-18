export interface ICountries {
  translations: {
    fra: {
      common: string;
    };
  };
  continents: string[];
  capital: string;
  population: number;
  flags: {
    svg: string;
  };
}
