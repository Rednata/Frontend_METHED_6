// import { getNews } from "./getNews.js";
import { loadNews } from "./loadNews.js";
import { loadPageSearch } from "./loadPage.js";
import { renderCard } from './render.js';
import { loadPage } from "./loadPage.js";
import { preload } from "./preload.js";
import { removePreload } from "./preload.js";
import { fetchNews } from "./getNews.js";
import { loadSearch } from "./loadSearch.js";

const form = document.querySelector('form');
const search = document.querySelector('.form__search');

export const getSearch = async (value, length) => {

  // =========== Загрузка с API_NEWS  =============
  // const tempApi = await fetch(`https://newsapi.org/v2/everything?q=${value}`, {
  //   headers: {
  //     'X-Api-Key': '6e757689b57443ceb98baa29a280c31c'
  //   },
  // });
  //  const data = await tempApi.json();
   
    // ============  Загрузка из search.json  ==============
    const resp = await fetch(`./jsonAPI/search.json?q=${value}`);
    const resp1 = await temp.json();

    const data = resp1.articles.slice(0, length);  
    const newsArray = [];
    (data).map(elem => newsArray.push(renderCard(elem)));  
    return newsArray;
  }


  export const controlSearch = async() => {
    const form = document.querySelector('.form');
    const searchForm = document.querySelector('.form__search');

    form.addEventListener('submit', async(e) => {
      e.preventDefault();   
      const value = searchForm.value;
      const urlSearch = `https://newsapi.org/v2/everything?q=${value}`;
      // const urlSearch = `./jsonAPI/search.json?q=${value}`;
      const lengthSearch = 8;
      const urlNews = 'https://newsapi.org/v2/top-headlines?country=ru';
      // const urlNews = './jsonAPI/headlines.json';
      const lengthNews = 4;    

      const newsInfo = await fetchNews(urlNews, lengthNews);
      const searchInfo = await fetchNews(urlSearch, lengthSearch);

      Promise.all([searchInfo, newsInfo])
        .then(loadPageSearch(searchInfo, value))
        .then(loadPage(newsInfo))
  })

}


