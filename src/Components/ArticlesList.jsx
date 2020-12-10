import React from "react";
import Collapsible from "react-collapsible";
import { Link } from "@reach/router";

function ArticlesList(props) {
  return (
    <ul>
      {props.articles.map((article) => {
        return (
          <li key={article.article_id}>
            <Collapsible trigger={article.title}>
              <Link to={`${article.article_id}`}>
                Click here to read the full article
              </Link>
              <p> Article by: {article.author}</p>
              <p>
                Votes:{article.votes} Number of Comments:{" "}
                {article.comment_count}
              </p>
            </Collapsible>
          </li>
        );
      })}
    </ul>
  );
}

export default ArticlesList;
