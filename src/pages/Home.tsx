import { Countries } from "../components/Countries";
import { Logo } from "../components/Logo";
import { Navigation } from "../components/Navigation";

export const Home: React.FC = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Countries />
    </div>
  );
};
