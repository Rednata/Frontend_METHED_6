import { fetchRequest } from './fetchRequest.js';
import {renderNews} from './render.js';
import {preload, removePreload} from './preload.js';
import {loadPage, loadPageSearch} from './loadPage.js';
import {loadImg} from './loadImg.js';

export const controlSearch = () => {
  
  const form = document.querySelector('.form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valueSearch = document.querySelector('.form__search').value;
    const valueSelect = document.querySelector('.select').value || 'ru';
 
    // const urlSearch = `./jsonAPI/search.json?q=${valueSearch}`;
    const urlSearch = `https://newsapi.org/v2/everything?q=${valueSearch}`;
    const countSearch = 8;    
    
    const urlSelect = `https://newsapi.org/v2/top-headlines?country=${valueSelect}`;
    // const urlSelect = './jsonAPI/headlines.json';
    const countSelect = 4;

    preload();
    const response1 = fetchRequest(urlSearch, countSearch);  
    const response2 = fetchRequest(urlSelect, countSelect);  

    const promiseAll = Promise.all([
      response1.then(data => renderNews(data)),
      response2.then(data => renderNews(data))
    ]);

      promiseAll.then(data => {
        removePreload();
        loadPageSearch(data[0], valueSearch);
        loadPage(data[1]);
      })
      .then(() => {
        const mainSearch = document.querySelector('.main__search');
        loadImg(response1, mainSearch)
      })
      .then(() => {
        const mainNews = document.querySelector('.main__news');
        loadImg(response2, mainNews)
      })
  })
}





