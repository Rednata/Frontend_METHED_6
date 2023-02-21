import { fetchRequest } from './fetchRequest.js';
import {renderNews} from './render.js';
import {preload, removePreload} from './preload.js';
import {loadPage} from './loadPage.js';
import {loadImg} from './loadImg.js';

export const headlines = (url, count) => {
  preload();
  const response = fetchRequest(url, count);  

  response
    .then(data => renderNews(data))
    .then(data => {    
      removePreload()
      loadPage(data); 
      const mainNews = document.querySelector('.main__news');      
      loadImg(response, mainNews)
    })
}