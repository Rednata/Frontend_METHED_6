export const preload = () => {
  const div = document.createElement('div');
  div.classList.add('preload');
  const img = document.createElement('img');
  img.classList.add('preload__img');
  img.src = "./assets/preload.svg";
  div.append(img);
  document.querySelector('main').after(div);
}
  
export const removePreload = () => {
  document.querySelector('.preload').remove();
}
