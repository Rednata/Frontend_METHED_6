  //  API News:
// const url = 'https://newsapi.org/v2/top-headlines?country=ru'
//  `https://newsapi.org/v2/everything?q=${value}`;

//  JSON: 
// const url = './jsonAPI/headlines.json';
// const urlSearch = `./jsonAPI/search.json?q=${value}`;

import { headlines } from './script/headlines.js';
import { controlSearch } from './script/search.js';
import { select } from './script/select.js';

const url = 'https://newsapi.org/v2/top-headlines?country=ru'

const init = () => {
  const count = 8;
  headlines(url, count);  
  controlSearch();
  select();
}

init();

