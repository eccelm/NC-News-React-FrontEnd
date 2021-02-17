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
            <h3>
              {article.title}{" "}
              <Link to={`${article.article_id}`}> Go to article</Link>{" "}
            </h3>
            <Collapsible trigger={<button>v More Details</button>}>
              <div className="article-list-item-container">
                <div className="ali-details">
                  <p> Article by: {article.author}</p>
                  <p>Posted: {article.created_at.slice(0, 10)}</p>
                  <p>Number of Comments: {article.comment_count}</p>
                </div>
                <div className="ali-votes">
                  <Voter article={article} />
                </div>
              </div>
            </Collapsible>
          </li>
        );
      })}
    </ul>
  );
}

export default ArticlesList;
