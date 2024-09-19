import { useState } from "react";
import { Logo } from "../components/Logo";
import { Navigation } from "../components/Navigation";

export const Blog: React.FC = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (content.length < 140) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>Blog</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom" />
        <textarea
          placeholder="Message"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
        <input type="submit" value={"Envoyer"} />
      </form>
    </div>
  );
};
