  // const url = 'https://newsapi.org/v2/top-headlines?country=ru'
  //  API News:
  
  // const url = 'https://newsapi.org/v2/top-headlines?country='
  // const resp = await fetch(url, {
  //   headers: {
  //     'X-Api-Key': '6e757689b57443ceb98baa29a280c31c'
  //   },
  // });

//  `https://newsapi.org/v2/everything?q=${value}`;

//  JSON: 

import { fetchNews } from './script/fetchNews.js';  

import { loadPage } from './script/loadPage.js';
import { renderCard } from './script/render.js';
import{preload, removePreload} from './script/preload.js';
import { loadImg } from './script/loadImg.js';

const url = './jsonAPI/headlines.json';
// const urlSearch = `./jsonAPI/search.json?q=${value}`;

const init = async() => {
  preload();
  const response = fetchNews(url);  

  response
    .then(data => {
    return data.map(elem => renderCard(elem));  
    })
    .then(data => {
      const list = document.createElement('ul');
      list.classList.add('container', 'cards');
      list.append(...data);  
      return list
    })
    .then(data => {    
      removePreload()
      loadPage(data); 
      loadImg(response)
    })
  
  // controlSearch();

}

init();

