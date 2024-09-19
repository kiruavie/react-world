import { useEffect, useState } from "react";
import { Logo } from "../components/Logo";
import { Navigation } from "../components/Navigation";
import axios from "axios";
import Article from "../components/Article";
import { ArticlesEntity } from "../models/IArticles";

export const Blog: React.FC = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState<boolean>(false);

  // Initialiser BlogData comme un tableau d'article
  const [blogData, setBlogData] = useState<ArticlesEntity[]>([]);

  // get api database
  const getData = () => {
    axios
      .get("http://localhost:3000/articles")
      .then((res) => setBlogData(res.data))
      .catch((err) => console.error("Erreur l'appel de l'api", err));
  };

  useEffect(() => {
    getData();
  }, []);

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
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          placeholder="Message"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
        <input type="submit" value={"Envoyer"} />
      </form>
      <ul>
        {blogData.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
};
