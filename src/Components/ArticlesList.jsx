import React from 'react';
//import Collapsible from "react-collapsible";
import { Link } from '@reach/router';
// import Voter from "./Voter";
import styled from 'styled-components';

function ArticlesList(props) {
	return (
		<ul>
			{props.articles.map((article) => {
				return (
					<StyledLi key={article.article_id}>
            <StyledDate>Posted: {article.created_at.slice(0, 10)}</StyledDate>
						<h3>{article.title} </h3>
						<p> Author: {article.author}</p>
						<Link to={`${article.article_id}`}>Go to article</Link>{' '}
						{/*     
            <Collapsible trigger={<button> More Details</button>}>
              <div className="article-list-item-container">
                <div className="ali-details">
                  <p> Article by: {article.author}</p>
                  <p>Posted: {article.created_at.slice(0, 10)}</p>
                  <p>Number of Comments: {article.comment_count}</p>
                </div>
                <div className="ali-votes">
     
                </div>
              </div>
            </Collapsible> */}
            				{/* <Voter article={article} /> */}
						<StyledContainer>
							<p>{article.comment_count} Comments</p>
							<p>{article.votes} Votes</p>
						</StyledContainer>
					</StyledLi>
				);
			})}
		</ul>
	);
}

export default ArticlesList;

const StyledLi = styled.li`
	border-radius: 2px;
	border: 4px solid orange;
  margin: auto;
	justify-content: center;
	text-align: center;
  max-width: 850px;
	h3 {
		color: purple;
	}
`;

const StyledContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;

	p {
		color: green;
	}
`;

const StyledDate = styled.p`
text-align: left;
`
