import axios from 'axios';

const ncNewsApi = axios.create({
	baseURL: 'https://marthas-nc-newsfeed.herokuapp.com/api',
});

// mcNewsApi.get() .. is neater :)
/*
REMEMBER TO ALTER THEN BLOCK OF DELETE in API WHEN GOING BACK TO IT
*/
export const getArticles = (queryKey, queryValue, order = 'desc') => {
	return ncNewsApi
		.get('/articles', { params: { [queryKey]: queryValue, order: order } })
		.then(({data: {articles}}) => {
			return articles;
		});
};

export const getArticleById = (article_id) => {
	return ncNewsApi.get(`/articles/${article_id}`).then(({data: {article}}) => {
		return article;
	});
};

export const getArticleComments = (article_id) => {
	return ncNewsApi.get(`/articles/${article_id}/comments`).then(({ data: {comments} }) => {
		return comments;
	});
};

export const getTopics = () => {
	return ncNewsApi.get('/topics').then((response) => {
		return response.data.topics;
	});
};

export const getUsers = () => {
	return ncNewsApi.get('/users').then(({data: {users}}) => {
		return users;
	});
};

export const getUserByUsername = (username) => {
	return ncNewsApi
  .get(`/users/${username}`)
  .then(({data: {username}}) => {
		return username;
	});
};

export const postCommentToArticle = (articleId, commentContent) => {
	return ncNewsApi
		.post(`/articles/${articleId}/comments`, commentContent)
		.then(({ data: { comment } }) => {
			return comment;
		});
};

export const deleteArticleComment = (comment_id) => {
	return ncNewsApi.delete(`comments/${comment_id}`).then(() => {
		return 'This comment has been deleted';
	});
};

export const upVote = (article_id, comment_id, vote) => {
	if (comment_id) {
		return ncNewsApi
			.patch(`comments/${comment_id}`, { inc_votes: vote })
			.then((response) => {
				console.log(response, 'Hello from the patched comment  vote');
				return response.data.comment.votes;
			}); // comment votes
	} else {
		return ncNewsApi
			.patch(`/articles/${article_id}`, { inc_votes: 1 })
			.then((response) => {
				console.log(response.data, 'Hello from the patched article vote');
				return response.data.article.votes;
			}); //article votes
	}
};
