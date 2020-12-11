import React from "react";
import Collapsible from "react-collapsible";
import { Link } from "@reach/router";
import Voter from "./Voter";

function ArticlesList(props) {
  return (
    <ul>
      {props.articles.map((article) => {
        return (
          <li key={article.article_id}>
            <Collapsible trigger={article.title}>
              <div className="collapsed-article-container">
                <Link className="collapsed-1" to={`${article.article_id}`}>
                  Click here to read the full article
                </Link>
                <p className="collapsed-2"> Article by: {article.author}</p>
                <div className="collapsed-3">
                  <Voter article={article} />
                  <p>Number of Comments: {article.comment_count}</p>
                </div>
              </div>
            </Collapsible>
            <h3>...</h3>
          </li>
        );
      })}
    </ul>
  );
}

export default ArticlesList;
