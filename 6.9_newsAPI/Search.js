import { getNews } from './getNews.js';

export const search = () => {
  const form = document.querySelector('form');
  const search = document.querySelector('.form__search');

  const getSearch = async (value) => {

  // const tempApi = await fetch(`https://newsapi.org/v2/everything?q=${value}`, {
  //   headers: {
  //     'X-Api-Key': '6e757689b57443ceb98baa29a280c31c'
  //   },
  // });
   // const data = await tempApi.json();
  
    const temp = await fetch(`./jsonAPI/search.json?q=${value}`);
    const data = await temp.json();
    console.log(data);

  }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(search.value);  
      getSearch(search.value);  
      const select = document.querySelector('.select');
      console.log(select.value);

      getNews

    })

  


}

search();