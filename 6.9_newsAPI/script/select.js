import { fetchRequest } from './fetchRequest.js';
import { renderNews} from './render.js';
import {preload, removePreload} from './preload.js';
import {loadImg} from './___loadImg.js';
import { loadPage } from './loadPage.js';


export const select = () => {
  const selectForm = document.querySelector('.select');
  selectForm.addEventListener('change', () => {    
    const selectValue = selectForm.value;    

    const url = `https://newsapi.org/v2/top-headlines?country=${selectValue}`
    // const url = `./jsonAPI/search.json?q=${selectValue}`;
    const countSearch = 8;

    preload();
    const response = fetchRequest(url, countSearch);  
    response
      .then(data => renderNews(data))
      .then(data => {      
        document.querySelector('main').innerHTML = '';             
        removePreload();
        loadPage(data);       
      })
  })
}

