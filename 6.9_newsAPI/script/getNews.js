export const getNews = async (callback, length) => {

  // =========== Загрузка с API_NEWS  =============
  const tempApi = await fetch('https://newsapi.org/v2/top-headlines?country=ru', {
    headers: {
      'X-Api-Key': '6e757689b57443ceb98baa29a280c31c'
    },
  });
  const data = await tempApi.json();
  
  
  //  =========== Загрузка из headlines.json  ==========
  // const temp = await fetch('./jsonAPI/headlines.json');
  // const data = await temp.json();

  const newsArray = [];
  for (let i = 0; i < length; i++) {    
    newsArray.push(callback(data.articles[i]));    
  }  
  return newsArray  
};

// 6e757689b57443ceb98baa29a280c31c



