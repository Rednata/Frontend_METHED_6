const renderCard = (data) => {      
  const {title, description, publishedAt} = data;
  const card = document.createElement('li');
  card.classList.add('card');
  const author = data.author || '';
  
  const urlToImage = data.urlToImage 
  // || '../assets/preloadIMG.jpg'  
  // <img class="card__img" src=${urlToImage}
  // onerror="this.src = '../assets/preloadIMG.jpg'"
  // ></img> 
  
  // <img class="card__img" src=${urlToImage}></img>    

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
  return card;
};


export {renderCard};
