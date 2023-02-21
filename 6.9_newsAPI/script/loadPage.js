//  =============== HEADLINES =========================
export const loadPage = (list) => {  
  const main = document.querySelector('main');
  document.querySelector('main').insertAdjacentHTML('beforeend',
    `    
    <section class="main__news">
    <div class="hr"></div>
    <div class="container">
    <h2 class="main__title">
    Свежие новости
  </h2>
    </div>      
    <div class="hr hr_bottom"></div>
    </section>      
    `    
    );
  document.querySelector('.main__news').append(list);
}

//  ===============  SEARCH =========================
export const loadPageSearch = (listSearch, search) => {  
  const main = document.querySelector('main');
      main.innerHTML = '';
      main.insertAdjacentHTML('afterbegin',
      `
      <section class="main__search">
        <div class="hr"></div>
        <div class="container">
          <h2 class="main__title">По вашему запросу “${search}” найдено 8 результатов</h2>
        </div>      
      <div class="hr hr_bottom"></div>
    </section>
      `    
      );
      document.querySelector('.main__search').append(listSearch);
}