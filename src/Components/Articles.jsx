import React, { useEffect, useState } from 'react';
import { getArticles } from '../api';
import ArticlesFilter from './ArticlesFilter';
import ArticlesList from './ArticlesList';
import Loader from './Loading';

function Articles() {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filters, setFilters] = useState({
		topic: '',
		sort_by: 'author',
		order: 'desc',
	});

	useEffect(() => {
		getArticles(filters.topic, filters.sort_by, filters.order).then((articles) => {
			setArticles(articles);
			setLoading(false);
			console.log('get articles loop check');
	
		});
	}, [filters]);
	function handleFilter(event) {
		const { name, value } = event.target;
		console.log(name, value);
		setFilters((prevFilters) => {
			return { ...prevFilters, [name]: value };
		});
    console.log(filters)
	}


	if (loading) {
		return <Loader />;
	}
	return (
		<div>
			<ArticlesFilter handleFilter={handleFilter} />
			<h2>Click on a title to expand the article</h2>
			<ArticlesList articles={articles} />
		</div>
	);
}

export default Articles;
