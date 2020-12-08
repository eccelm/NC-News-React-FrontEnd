import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://marthas-nc-newsfeed.herokuapp.com/api",
});

// mcNewsApi.get() .. is neater :)

export const getArticles = (queryKey, queryValue) => {
  console.log(queryKey, queryValue);
  return ncNewsApi
    .get("/articles", { params: { [queryKey]: queryValue } })
    .then((response) => {
      console.log(response, "<<<<<returning from getArticles request");
      return response.data.articles;
    });
};

export const getArticleById = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then((response) => {
    // console.log(response.data, "detailed article data");
    return response.data.article;
  });
};

export const getArticleComments = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    // console.log(data, "this is the comments data");
    return data.comments;
  });
};

export const getTopics = () => {
  return ncNewsApi.get("/topics").then((response) => {
    return response.data.topics;
  });
};

export const getUsers = () => {
  return ncNewsApi.get("/users").then((response) => {
    return response.data.users;
  });
};

export const getUserByUsername = (username) => {
  return ncNewsApi.get(`/users/${username}`).then((response) => {
    return response.data.username;
  });
};
