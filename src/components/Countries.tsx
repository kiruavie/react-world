import { useEffect, useState } from "react";
import { ICountries } from "../models/ICountries";
import { CountriesServices } from "../services/CountriesServices";
import { AxiosResponse } from "axios";
import { Card } from "./Card";

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
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};
