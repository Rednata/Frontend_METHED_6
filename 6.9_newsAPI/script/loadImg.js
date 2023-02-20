export const loadImg = async (dataPromise) => {
  const data = await(dataPromise);
  const cards = document.querySelectorAll('.card');  

  cards.forEach( (elem, ind) => {
    const img = new Image();
    img.src = data[ind].urlToImage || '../assets/preloadIMG.jpg';

    new Promise(resolve => {        
      img.addEventListener('load', () => {    
        console.log(img);            
        resolve(img);
      })
      img.addEventListener('error', () => {                      
        img.src = '../assets/preloadIMG.jpg';
        resolve(img);
      }) 
    })
    .then(() => elem.querySelector('img').src = img.src)          
  })      
}

