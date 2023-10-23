const axios = require("axios");
const url =
  "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";

async function getMovieList() {
  try {
    const result = await axios.get(url);
    const { data } = result;
    if (!data.articleList || data.articleList.size == 0) {
      throw new Error("데이터 없음");
    }

    const results = data.articleList.map((article, idx) => {
      return { title: article.title, rank: idx + 1 };
    });

    for (let movieInfo of results) {
      console.log(`[${movieInfo.rank}위] ${movieInfo.title}`);
    }
  } catch (err) {
    console.log("에러 발생");
    console.error(err);
  }
}

getMovieList();
