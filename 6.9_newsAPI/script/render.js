const renderCard = (data) => {      
  const card = document.createElement('li');
  card.classList.add('card');
  const author = data.author || '';
  const description = data.description || '';
  const publishedAt = data.publishedAt || '';
  const title = data.title|| '';
  
  card.insertAdjacentHTML('afterbegin',
    `               
    <img class="card__img"></img>   
      <div class="card__title">
        <h2 class="card__titleh2">${title}
        </h2>
        <button class="card__more"></button>
      </div>          
      <p class="card__descript">
        ${description}
      </p>
      <div class="card-footer">
        <div class="card-footer__data">
          <span class="card-footer__data-day">
            ${publishedAt}
          </span>
          <span class="card-footer__data-time">
            11:06
          </span>              
        </div>
        <div class="card-footer__author">
          ${author}
        </div>
      </div> 
    `,
  );

  const img = new Image();
  if (data.urlToImage === 'null') {
    img.src = '../assets/preloadIMG.jpg';    
  }
  else {
    img.src = data.urlToImage;
  }
  img.addEventListener('load', () => {
    const currentImg = card.querySelector('img')
    currentImg.src = data.urlToImage;
  });
  img.addEventListener('error', () => {
    const currentImg = card.querySelector('img')    
    currentImg.src = '../assets/preloadIMG.jpg'
  })
  
  return card;
};

export const renderNews = (newsArray) => {  
  const news = newsArray.map(elem => renderCard(elem));

  const list = document.createElement('ul');
  list.classList.add('container', 'cards');
  list.append(...news);  

  return list    
}

