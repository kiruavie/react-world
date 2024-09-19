import React from "react";
import { ArticlesEntity } from "../models/IArticles";

interface IArticlProps {
  article: ArticlesEntity;
}
const Article: React.FC<IArticlProps> = ({ article }) => {
  return (
    <div className="article">
      <div className="card-header">
        <h3> {article.author} </h3>
        <em>Posté le {article.date} </em>
      </div>
      <p> {article.content} </p>
      <div className="btn-container">
        <button>Modifier</button>
        <button>Supprimer</button>
      </div>
    </div>
  );
};

export default Article;
