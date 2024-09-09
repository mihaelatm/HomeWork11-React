import { Link } from "react-router-dom";

function ArticleList() {
  const articles = [
    { id: 1, title: "Первая статья" },
    { id: 2, title: "Вторая статья" },
    { id: 3, title: "Третья статья" },
  ];

  return (
    <div className="article_list_container">
      <h1 className="article_list_title">Список статей</h1>
      <ul className="article_list">
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
