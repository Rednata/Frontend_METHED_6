import { getNews } from './script/getNews.js';
import { renderCard } from './script/render.js';
import { controlSearch } from './script/search.js';
import { loadNews } from './script/loadNews.js';
import { loadPage } from './script/loadPage.js';
import { preload } from './script/preload.js';
import { removePreload } from './script/preload.js';



const init = () => {
  preload();
  const length = 8;
  new Promise(resolve => {    
    resolve(getNews(renderCard, length));
  })
  .then(data => {
    removePreload();
    loadPage(loadNews(data));
  })      
  controlSearch();
}

init();


