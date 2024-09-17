import { ICountries } from "../models/ICountries";

interface PROPS {
  country: ICountries;
}

export const Card: React.FC<PROPS> = ({ country }) => {
  return (
    <li className="card">
      <img
        src={country.flags.svg}
        alt={"drapeau " + country.translations.fra.common}
      />
      <div className="infos">
        <h2> {country.translations.fra.common} </h2>
        <h4> {country.capital} </h4>
        <p> Pop. {country.population.toString()} </p>
      </div>
    </li>
  );
};
