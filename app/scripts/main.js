(function() {
  const model = [
    {
      name: 'Ashes',
      clicks: 0
    },
    {
      name: 'Puss',
      clicks: 0
    },
    {
      name: 'Misty',
      clicks: 0
    },
    {
      name: 'Tigger',
      clicks: 0
    },
    {
      name: 'Kitty',
      clicks: 0
    }
  ];

  const octopus = {
    createList: () => {},

    populateList: () => {},

    setCurrentCat: () => {
    },

    clickOnCatList: () => {
      let catList = document.querySelectorAll('btn');

      for (let i = 0; i < catList.length; i++) {
        const cat = catList[i];

        cat.addEventLitener('click', ((catCopy) => {
          let catObject = {
            name: model[i].name,
            clicks: model[i].clicks,
            index: i,
          }
          return () => {
            catObject
          }
        })(cat));
        
      }
    },

    init: () => {
      view.init();
    }
  };

  const view = {
    init: () => {
      view.renderListOfCats();
    },

    renderListOfCats: () => {
      const catButtons = document.getElementById('catButtons');
      let catButtonStr = '';
      for (let i = 0; i < model.length; i++) {
        const element = model[i];
        catButtonStr += 
        `<button id="cat-0${i}" class="btn selection__btn">
          <img src="images/${i}.jpg" class="btn__image" alt=""> ${model[i].name}
        </button>`;
      }
      catButtons.innerHTML = catButtonStr;
    },

    renderCatViewingArea: () => {
      const catView = document.getElementById('catView');
      let catActive = octopus.setCurrentCat();
      let catStr = '';
      catView.innerHTML = 
      `<div id="box" class="box">
        <img src="images/${catActive.index}.jpg" alt="Cat #${catActive.index}" id="box-img" class="img box__img">
        <span id="box-title" class="box__element_float box__element_title">${catActive.name}</span>
        <span id="box-counter" class="box__element_float box__element_counter">${catActive.clicks}</span>
      </div>`;
    },

    render: () => {}
  };

  octopus.init();
})();
