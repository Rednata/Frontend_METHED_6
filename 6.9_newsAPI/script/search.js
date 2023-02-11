import { getNews } from "./getNews.js";
import { loadNews } from "./loadNews.js";
import { loadPageSearch } from "./loadPage.js";
import { renderCard } from './render.js';
import { loadPage } from "./loadPage.js";
import { preload } from "./preload.js";
import { removePreload } from "./preload.js";

const form = document.querySelector('form');
const search = document.querySelector('.form__search');

export const getSearch = async (value, callback, length) => {

  // =========== Загрузка с API_NEWS  =============
  const tempApi = await fetch(`https://newsapi.org/v2/everything?q=${value}`, {
    headers: {
      'X-Api-Key': '6e757689b57443ceb98baa29a280c31c'
    },
  });
   const data = await tempApi.json();
   
    // ============  Загрузка д из search.json  ==============
    // const temp = await fetch(`./jsonAPI/search.json?q=${value}`);
    // const data = await temp.json();

    const searchArray = [];
    for (let i = 0; i < length; i++) {          
      searchArray.push(callback(data.articles[i]));
    }
    return searchArray;
  }

const allNews = () => {
  preload();
  return Promise.all([
    getSearch(search.value, renderCard, 8),
    getNews(renderCard, 4)
  ])
}         

export const controlSearch = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();   
    const newsLoad = allNews();    
    removePreload();
   
    newsLoad.then(data => {
      const newsSearch = loadNews(data[0]);
      loadPageSearch(newsSearch, search.value);
      loadPage(loadNews(data[1]))
    })
  })
}







