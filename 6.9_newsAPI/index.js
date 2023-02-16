import { getNews } from './script/getNews.js';
import { renderCard } from './script/render.js';
import { controlSearch } from './script/search.js';
import { loadNews } from './script/loadNews.js';
import { loadPage } from './script/loadPage.js';
import { preload } from './script/preload.js';
import { removePreload } from './script/preload.js';

const isLoad = elem => {
  return new Promise(resolve => {
    const img = elem.querySelector('img');
    img.addEventListener('load', () => {
      resolve(elem)
    })
  })  
}

const init = () => {
  preload();
  const length = 8;
  const t = new Promise(resolve => {    
    resolve(getNews(renderCard, length));
  })
  .then(data => {
    return data.map(elem => isLoad(elem))    
  })
  .then(data => {
    return Promise.all(data).then(elem => loadNews(elem))
  })
  .then(data => {
    removePreload()
    loadPage(data)
  })
    

    controlSearch();
}

init();


