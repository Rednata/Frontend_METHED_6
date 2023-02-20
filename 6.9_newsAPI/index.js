  //  API News:
  // const url = 'https://newsapi.org/v2/top-headlines?country=ru'
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
  const data = await fetchNews(url);  
  
  
  
  const newsPlaceholderImg = data.map(elem => renderCard(elem));
  const list = document.createElement('ul');
  list.classList.add('container', 'cards');
  list.append(...newsPlaceholderImg);

  loadPage(list);
  loadImg(data);





  // Promise.all(data.map(elem => loadNewsImgs(elem)))
  //   .then(data => {
  //     const liImg = document.querySelectorAll('.card');
  //     liImg.forEach((li, ind) => {
  //       li.querySelector('.placeholder-picture').remove();
  //       const img = document.createElement('img');
  //       img.classList.add('card__img');
  //       img.src = data[ind].urlToImage;
  //       li.prepend(img);
  //     })
  //   });


  //   .then(data => data.map(elem => renderCard(elem)))
  //   .then(data => {
  //     const list = document.createElement('ul');
  //     list.classList.add('container', 'cards');
  //     list.append(...data);
  //     return list
  //   })
  //   .then(data => {
  //     removePreload();
  //     loadPage(data)});
}

init();

