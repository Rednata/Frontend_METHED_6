export const loadSearch = (data) => {  
  const main = document.querySelector('main');
  main.innerHTML = '';
  const listSearch = document.createElement('ul');
  listSearch.classList.add('container', 'cards');
  listSearch.append(...data);
  main.insertAdjacentHTML('afterbegin',
  `
  <section class="main__search">
    <div class="hr"></div>
    <div class="container">
      <h2 class="main__title">По вашему запросу “___” найдено 8 результатов</h2>
    </div>      
  <div class="hr hr_bottom"></div>
</section>
  `    
  );
  document.querySelector('.main__search').append(listSearch);

}