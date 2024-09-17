import axios from "axios";

export class CountriesServices {
  private static URL: string = "https://restcountries.com/v3.1";

  public static getAllCountries = () => {
    const CountriesURL: string = `${this.URL}/all`;
    return axios.get(CountriesURL);
  };
}
