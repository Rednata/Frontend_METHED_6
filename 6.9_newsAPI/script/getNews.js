import { loadNews } from './loadNews.js';
import { preload, removePreload } from './preload.js';
import { renderCard } from './render.js';



const isLoad = (elem)  => {
  return new Promise((resolve, reject) => {    
    const img = new Image();    
    img.src = elem.urlToImage;
    img.addEventListener('load', () => {      
        resolve(renderCard(elem))
      })
  })    
}

export const fetchNews = async(url, length) => {
  
// =========== Загрузка с API_NEWS  =============
  // const resp = await fetch(url, {
  //   headers: {
  //     'X-Api-Key': '6e757689b57443ceb98baa29a280c31c'
  //   },
  // });
  // const resp1 = await resp.json();
    
  //  =========== Загрузка из headlines.json  ==========
  // preload();

    const resp = await fetch(url);
    const resp1 = await resp.json();
  
    const data = resp1.articles.slice(0, length);  
  
    const newArray = data.map(elem => isLoad(elem));
    return Promise.all(newArray)  
      .then(data => {
        // removePreload()      
        
        return loadNews(data);                
    })  
}


// 6e757689b57443ceb98baa29a280c31c



