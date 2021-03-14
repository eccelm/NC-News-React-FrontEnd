import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
	getArticleById,
	getArticleComments,
	postCommentToArticle,
	deleteArticleComment,
} from '../api';
import { Link } from '@reach/router';
import Loading from './Loading';
import Comments from './Comments';
import CommentAdder from './CommentAdder';
import Voter from './Voter';
/*
Promise.All ??
split into seperate useEffects
Consider refactor to objects with own personal {data loading error}
*/
function ArticlePage(props) {
	//console.log(props, 'Current props');
	const [article, setArticle] = useState();
	const [comments, setComments] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchArticle() {
			let article = await getArticleById(props.article_id);
			setArticle(article);
			//console.log('article recieved');
		}
		fetchArticle();
	}, [props.article_id]);

	useEffect(() => {
		async function fetchArticleComments() {
			let comments = await getArticleComments(props.article_id);
			setComments(comments);
			//console.log('article comments recieved');
			setLoading(false);
		}
		fetchArticleComments();
	}, [props.article_id]);

	function handleNewComment(comment) {
		const { article_id } = article;
		postCommentToArticle(article_id, comment).then((comment) => {
			setComments((prevComments) => [comment, ...prevComments]);
		});
	}
	function removeComment(comment_id) {
		deleteArticleComment(comment_id).then((res) => {
			const filteredComments = comments.filter((comment) => {
				return comment.comment_id !== parseInt(comment_id);
			});
			setComments(filteredComments);
		});
	}

	if (loading) {
		return <Loading />;
	}
	return (
		<div>
			<Link
				style={{ width: `100vw`, padding: `2rem`, textSize: `` }}
				to='/articles'>
				{' '}
				<p>Back To All Articles</p>{' '}
			</Link>

			<StyledOuterContainer>
				<StyledInnerContainer className='main-article'>
					<h1>{article.title}</h1>
					<p>{article.author}</p>
					<Voter article={article}></Voter>
					<p>{article.body}</p>
				</StyledInnerContainer>
				<StyledInnerContainer className='add-comment'>
					<CommentAdder handleNewComment={handleNewComment} />
				</StyledInnerContainer>

				<StyledInnerContainer className='article-comments'>
					<Comments comments={comments} removeComment={removeComment} />
				</StyledInnerContainer>
			</StyledOuterContainer>
		</div>
	);
}

export default ArticlePage;

const StyledOuterContainer = styled.div`
	display: flex;
	flex-flow: column wrap;
	max-width: 1000px;
	margin: auto;
`;

const StyledInnerContainer = styled.div`
	border: 2px solid;
	margin: 1%;
	text-align: center;
	border-radius: 2px;
	border: none;
	box-shadow: 4px 7px #70334f;

	padding: 2%;
	h1 {
		font-size: 2rem;
	}
	h2 {
		font-size: 2rem;
	}
	p {
		font-size: 1.4rem;
		margin: 2%;
	}
`;

/*
Ideas:
Mext page buttons

        <StyledInnerContainer className="article-page-links">
          <Link to="/articles">
            <button>Go Back</button>
          </Link>
          <Link to={`/articles/${article["article_id"] + 1}`}>
            <button>Next Article</button>
          </Link>

        </StyledInnerContainer>
  */
