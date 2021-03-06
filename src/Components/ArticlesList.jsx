import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

function ArticlesList(props) {
	return (
		<StyledUl>
			{props.articles.map((article) => {
				return (
					<StyledLi key={article.article_id}>
						<StyledH2>{article.title} </StyledH2>
						<Link to={`${article.article_id}`}>Go to article...</Link>{' '}
						<StyledContainer>
							<p>{article.created_at.slice(0, 10)}</p>
							<p>{article.author}</p>
						</StyledContainer>
						<StyledContainer>
							<p>{article.comment_count} Comments</p>
							<p>{article.votes} Votes</p>
						</StyledContainer>
					</StyledLi>
				);
			})}
		</StyledUl>
	);
}

export default ArticlesList;
const StyledUl = styled.ul`
list-style: none;
`;
const StyledLi = styled.li`
	border-radius: 6px;
	border: 3px solid #7fb069;
	box-shadow: 6px 9px #51783f;
	margin: 1.5% auto;
	justify-content: center;
	text-align: center;
	max-width: 950px;
	font-size: 1.5rem;
`;

const StyledContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;

	p {
		font-size: 1.2rem;
	}
`;
const StyledH2 = styled.h2`
	text-transform: capitalize;
`;

/*
Alternate CSS

  border: 10px solid;
  border-image: radial-gradient( orange, yellow, orange) 1;


Old Collapsible
					 
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
            </Collapsible> 
  
*/
