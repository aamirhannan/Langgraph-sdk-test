const axios = require("axios");
require("dotenv").config();

module.exports = async function webSearch(query) {
  try {
    const res = await axios.get("https://gnews.io/api/v4/search", {
      params: {
        q: query,
        lang: "en",
        max: 3,
        apikey: process.env.GNEWS_API_KEY
      }
    });

    return res.data.articles.map(a =>
      `${a.title}\n${a.description}\nSource: ${a.source.name}`
    ).join("\n\n");

  } catch {
    return "Error fetching news";
  }
};