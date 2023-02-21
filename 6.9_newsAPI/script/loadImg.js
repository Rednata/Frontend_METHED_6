// ==== чтобы изображение сначала загружалось, а уже после появлялось на сайте

export const loadImg = async (dataPromise, parentElem) => {  
  const data = await(dataPromise);
  const cards = parentElem.querySelectorAll('.card');
  
  cards.forEach( (elem, ind) => {
    const img = new Image();

    if (data[ind]) {

      if (!data[ind].urlToImage) {
        img.src = '../assets/preloadIMG.jpg';  
      } else {
        img.src = data[ind].urlToImage || '../assets/preloadIMG.jpg';
      }    

      new Promise(resolve => {        
        img.addEventListener('error', () => {                      
          img.src = '../assets/preloadIMG.jpg';
          resolve(img);
        }) 
        img.addEventListener('load', () => {  
          resolve(img);
        })    
      })
      .then(() => elem.querySelector('img').src = img.src)            
    }    
  })      
}

