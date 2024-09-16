import { Logo } from "../components/Logo";
import { Navigation } from "../components/Navigation";

export const Home: React.FC = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h2>Accueil</h2>
    </div>
  );
};
