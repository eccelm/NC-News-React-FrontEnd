import React, { useEffect, useState } from 'react';
import { getArticles } from '../api';
import ArticlesFilter from './ArticlesFilter';
import ArticlesList from './ArticlesList';
import Loader from './Loading';

function Articles() {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getArticles().then((articles) => {
			setArticles(articles);
			setLoading(false);
			console.log('get articles loop check');
	
		});
	}, []);
	function handleQuery(queryKey, queryValue, order) {
		getArticles(queryKey, queryValue, order).then((articles) => {
			setArticles(articles);
		});
	}

	if (loading) {
		return <Loader />;
	}
	return (
		<div>
			<ArticlesFilter handleQuery={handleQuery} />
			<h2>Click on a title to expand the article</h2>
			<ArticlesList articles={articles} />
		</div>
	);
}

export default Articles;
