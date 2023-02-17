import { loadNews } from './loadNews.js';
import { loadPage } from './loadPage.js';
import { preload, removePreload } from './preload.js';
import { renderCard } from './render.js';

export const fetchNews = async(url, length) => {
  
// =========== Загрузка с API_NEWS  =============
  // const resp = await fetch(url, {
  //   headers: {
  //     'X-Api-Key': '6e757689b57443ceb98baa29a280c31c'
  //   },
  // });

    
  //  =========== Загрузка из headlines.json  ==========
  
    preload();
    const resp = await fetch(url);
    const resp1 = await resp.json();
    
    const data = resp1.articles.slice(0, length);  
  
    const newsArray = data.map(elem => { 
      return new Promise(resolve => {
        const img = document.createElement('img');
        img.src = elem.urlToImage;
        img.addEventListener('load', () => {
          img.src = elem.urlToImage || '../assets/preloadIMG.jpg' ;
        })
        resolve(elem)
      })     
        
    });

    return Promise.all(newsArray)      
      .then(data => data.map(elem => renderCard(elem)))      
      .then(data => {
        const news = loadNews(data);
        removePreload();
        return news;
      })                   
}


// 6e757689b57443ceb98baa29a280c31c



