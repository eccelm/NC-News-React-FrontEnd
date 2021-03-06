import React from 'react';
//import Collapsible from "react-collapsible";
import { Link } from '@reach/router';
// import Voter from "./Voter";
import styled from 'styled-components';

function ArticlesList(props) {
	return (
		<StyledUl>
			{props.articles.map((article) => {
				return (
					<StyledLi key={article.article_id}>
    
						<StyledH2>{article.title} </StyledH2>
		
						<Link to={`${article.article_id}`}>Go to article...</Link>{' '}
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
`
const StyledLi = styled.li`
	border-radius: 6px;
  border: 3px solid #7FB069;
  box-shadow: 6px 9px #51783F;
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
const StyledH2 =styled.h2`
text-transform: capitalize;
`
const StyledDate = styled.p`
text-align: left;
`
/*
Alternate CSS

  border: 10px solid;
  border-image: radial-gradient( orange, yellow, orange) 1;

*/