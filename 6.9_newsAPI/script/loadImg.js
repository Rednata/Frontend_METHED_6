export const loadImg = (data) => {
  const cards = document.querySelectorAll('.card');

  data.forEach( (elem, ind) => {
    
      const img = document.createElement('img');
      img.classList.add('card__img');
      img.src = data[ind].urlToImage || '../assets/preloadIMG.jpg';
    
      img.addEventListener('load', () => {      
        if (cards[ind].querySelector('.placeholder-picture')) {
         cards[ind].querySelector('.placeholder-picture').remove()
        }
        cards[ind].prepend(img);
      })
      img.addEventListener('error', () => {            
        if (cards[ind].querySelector('.placeholder-picture')) {
          cards[ind].querySelector('.placeholder-picture').remove()
         }
        img.src = '../assets/preloadIMG.jpg';
        cards[ind].prepend(img);
      }) 
    
  })
}

