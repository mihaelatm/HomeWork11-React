import { useParams } from "react-router-dom";

function Article() {
  const { id } = useParams();

  return (
    <div className="article_container">
      <h2>Статья {id}</h2>
      <p>Содержание статьи {id}</p>
    </div>
  );
}

export default Article;
