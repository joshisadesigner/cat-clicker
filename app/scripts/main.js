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

    getCatList: () => {
      const catButtons = document.getElementById('catButtons');
    },

    catClicks: () => {
      const cat = document.getElementById('box-img');
      cat.addEventListener('click', () => {
        model[selectedCat.index].clicks++;
        view.renderSelectedCat();
      });
    },

    SelectedCat: ( index ) => {
      return selectedCat = {
        index: index,
      };
      
    },

    selectCat: () => {
      const catButtons = document.getElementsByClassName('btn');

      for (let i = 0; i < catButtons.length; i++) {
        const catButton = catButtons[i];

        catButton.addEventListener( 'click', (function(model) {
            return function() {
              octopus.SelectedCat( i )
              view.renderSelectedCat();
            };
          })(model[i])
        );
      }
    },

    init: () => {
      view.init();
    }
  };

  const view = {
    init: function()  {
      this.renderListOfCats();
    },

    renderListOfCats: () => {

      octopus.getCatList();

      let catButtonStr = '';
      for (let i = 0; i < model.length; i++) {
        const element = model[i];
        catButtonStr += `<button id="cat-0${i}" class="btn selection__btn">
          <img src="images/${i}.jpg" class="btn__image" alt=""> ${model[i].name}
        </button>`;
      }
      catButtons.innerHTML = catButtonStr;
      octopus.selectCat();
    },

    renderSelectedCat: () => {
      const catView = document.getElementById('catView');
      let catStr = '';
      catView.innerHTML = `<div id="box" class="box">
        <img src="images/${selectedCat.index}.jpg" alt="Cat #${selectedCat.index}" id="box-img" class="img box__img">
        <span id="box-title" class="box__element_float box__element_title">${model[selectedCat.index].name}</span>
        <span id="box-counter" class="box__element_float box__element_counter">${model[selectedCat.index].clicks}</span>
      </div>`;

      octopus.catClicks();
    },

    render: () => {}
  };

  octopus.init();
})();
