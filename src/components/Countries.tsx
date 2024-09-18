import { useEffect, useState } from "react";
import { ICountries } from "../models/ICountries";
import { CountriesServices } from "../services/CountriesServices";
import { AxiosResponse } from "axios";
import { Card } from "./Card";

interface IState {
  countries: ICountries[];
}

interface IRange {
  range: number;
}

export const Countries: React.FC = () => {
  const [data, setData] = useState<IState>({
    countries: [] as ICountries[],
  });

  const [rangeValue, setRangeValue] = useState<IRange>({ range: 36 });
  const [selectedRadio, setSelectedValue] = useState<string>("");
  const radios: string[] = ["Africa", "America", "Asia", "Europa", "Oceania"];

  useEffect(() => {
    setData({ ...data });
    CountriesServices.getAllCountries().then((res: AxiosResponse) =>
      setData({ countries: res.data })
    );
  }, []);
  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min={1}
          max={250}
          defaultValue={rangeValue.range}
          onChange={(e) => setRangeValue({ range: Number(e.target.value) })}
        />

        {radios.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              onChange={(e) => setSelectedValue(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      <ul>
        {data.countries
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a: ICountries, b: ICountries) => b.population - a.population)
          .slice(0, rangeValue.range)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};
