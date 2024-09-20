import React, { useState } from "react";
import { ArticlesEntity } from "../models/IArticles";
import axios from "axios";

interface IArticlProps {
  article: ArticlesEntity;
}
const Article: React.FC<IArticlProps> = ({ article }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editContent, setEditContent] = useState<string>("");

  const handleEdit = () => {
    const data = {
      author: article.author,
      content: editContent ? editContent : article.content,
      updated: Date.now(),
    };
    axios.put("http://localhost:3000/articles/" + article.id, data).then(() => {
      setIsEdit(false);
    });
  };

  const handleDelete = () => {
    axios.delete("http://localhost:3000/articles/" + article.id);
    window.location.reload();
  };

  const dataFormater = (date: number) => {
    const newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    return newDate;
  };
  return (
    <div
      className="article"
      style={{ background: isEdit ? "#f3feff" : "white" }}
    >
      <div className="card-header">
        <h3> {article.author} </h3>
        <em>Posté le {dataFormater(article.date)} </em>
      </div>
      {isEdit ? (
        <textarea
          autoFocus
          defaultValue={editContent ? editContent : article.content}
          onChange={(e) => setEditContent(e.target.value)}
        ></textarea>
      ) : (
        <p> {editContent ? editContent : article.content} </p>
      )}
      <div className="btn-container">
        {isEdit ? (
          <button onClick={handleEdit}>Valider</button>
        ) : (
          <button onClick={() => setIsEdit(true)}>Modifier</button>
        )}

        <button
          onClick={() => {
            if (
              window.confirm("Voulez vous vraiment supprimer cett article ?")
            ) {
              handleDelete();
            }
          }}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default Article;
