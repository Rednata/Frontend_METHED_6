import { fetchNews } from './script/getNews.js';
import { loadPage } from './script/loadPage.js';
import { preload } from './script/preload.js';
// import { preload, removePreload } from './script/preload.js';
import { renderCard } from './script/render.js';
import { controlSearch } from './script/search.js';




const init = async() => {
  
  const url = 'https://newsapi.org/v2/top-headlines?country=ru'
  // const url = './jsonAPI/headlines.json';
  const length = 8;
  
  const news = await fetchNews(url, length);

  loadPage(news)

  controlSearch();
}

init();


