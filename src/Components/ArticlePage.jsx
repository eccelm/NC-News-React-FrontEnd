import React, { useState, useEffect } from 'react';
import {
	getArticleById,
	getArticleComments,
	postCommentToArticle,
	deleteArticleComment,
} from '../api';
//import { Link } from '@reach/router';
import Loader from './Loading';
import Comments from './Comments';
import CommentAdder from './CommentAdder';
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
			let comments = await getArticleComments(props.article_id);
			setArticle(article);
			setComments(comments);
			setLoading(false);
		}
		fetchArticle();
	}, [props.article_id]);

	function handleNewComment(comment) {
		const { article_id } = article;
		console.log('checking id ', article_id);
		postCommentToArticle(article_id, comment).then((comment) => {
			console.log('comment ', comment);

			setComments((prevComments) => [comment, ...prevComments]);
		});
	}
	function removeComment(comment_id) {
		console.log(comment_id);
		console.log('comments length beofre ', comments.length);
		deleteArticleComment(comment_id).then((res) => {
			console.log('comments length after ', comments.length);
			console.log('response ', res);
			const filteredComments = comments.filter((comment) => {
				console.log(
					'inside filter',
					comment,
					comment.comment_id,
					typeof comment.comment_id,
					'hopefully the higher-level comment id>>',
					comment_id,
					typeof comment_id
				);
				return comment.comment_id !== parseInt(comment_id);
			});
			console.log('filteredComments ', filteredComments);
			setComments(filteredComments);
		});
	}

	if (loading) {
		return <Loader />;
	}
	return (
		<div>
			<h1>Welcome to the Article page</h1>
			<div className='article-grid-container'>
				<div className='main-article'>
					<h2>{article.title}</h2>
					<p>By: {article.author}</p>
					<p>{article.body}</p>
				</div>

				<div className='article-comments'>
					<Comments comments={comments} removeComment={removeComment} />
				</div>

				<div className='add-comment'>
					<CommentAdder
						tempUser='tickle122'
						handleNewComment={handleNewComment}
					/>
				</div>
			</div>
		</div>
	);
}

export default ArticlePage;

/*
Ideas:
Mext page buttons

        <div className="article-page-links">
          <Link to="/articles">
            <button>Go Back</button>
          </Link>
          <Link to={`/articles/${article["article_id"] + 1}`}>
            <button>Next Article</button>
          </Link>

        </div>
  */
