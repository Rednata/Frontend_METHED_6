export const loadNews = (data) => {       
  const list = document.createElement('ul');
  list.classList.add('container', 'cards');
  list.append(...data);    
  return list;
}


