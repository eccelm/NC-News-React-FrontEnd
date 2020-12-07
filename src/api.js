import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://marthas-nc-newsfeed.herokuapp.com/api",
});

// mcNewsApi.get() .. is neater :)

export const getArticles = () => {
  return ncNewsApi.get("/articles").then((response) => {
    return response.data.articles;
  });
};

export const getArticleById = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then((response) => {
    console.log(response.data);
    return response.data.article;
  });
};
