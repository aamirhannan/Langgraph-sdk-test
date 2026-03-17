let DB = { news: "" };

function setNews(news) {
  DB.news = news;
}

function getNews() {
  return DB.news || "No stored news";
}

module.exports = { setNews, getNews };