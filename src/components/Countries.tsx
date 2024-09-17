import { useEffect, useState } from "react";
import { ICountries } from "../models/ICountries";
import { CountriesServices } from "../services/CountriesServices";
import { AxiosResponse } from "axios";

interface IState {
  countries: ICountries[];
}

export const Countries: React.FC = () => {
  const [data, setData] = useState<IState>({
    countries: [] as ICountries[],
  });

  useEffect(() => {
    setData({ ...data });
    CountriesServices.getAllCountries().then((res: AxiosResponse) =>
      setData({ countries: res.data })
    );
  }, []);
  return (
    <div className="countries">
      <h1>Countries</h1>
      <ul>
        {data.countries.map((country, index) => (
          <li key={index}> {country.name.common} </li>
        ))}
      </ul>
    </div>
  );
};
