(function() {
  const model = [
    {
      name: 'Ashes',
      clicks: 0,
      url: 'images/0.jpg',
    },
    {
      name: 'Puss',
      clicks: 0,
      url: 'images/1.jpg',
    },
    {
      name: 'Misty',
      clicks: 0,
      url: 'images/2.jpg',
    },
    {
      name: 'Tigger',
      clicks: 0,
      url: 'images/3.jpg',
    },
    {
      name: 'Kitty',
      clicks: 0,
      url: 'images/4.jpg',
    }
  ];

  let modelAdmin = false;

  const octopus = {

    openingAdminView: () => {
      const adminButton = document.getElementById('adminButton');
      adminButton.addEventListener('click', () => {
        view.renderAdminOptions();
      });
    },

    cancelAdminView: () => {
      const cancelButton = document.getElementById('cancelButton');
      const form = document.getElementById('adminOptions');
      cancelButton.addEventListener('click', (e) => {
        view.renderAdminOptions();
        form.reset();
      })
    },

    updateCats: () => {
      const saveButton = document.getElementById('saveButton');
      let name = document.getElementById('name');
      let url = document.getElementById('url');
      let clicks = document.getElementById('clicks');

      saveButton.addEventListener('click', () => {

        if( name.value.length !== 0 && url.value.length !== 0 && clicks.value.length !== 0 ) {
          model.push({ name: name.value, clicks: clicks.value, url: url.value });
          view.renderListOfCats();
          console.log(model);
        }
      });
    },

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
      const catButtons = document.getElementsByClassName('selection__btn');

      for (let i = 0; i < catButtons.length; i++) {
        const catButton = catButtons[i];

        catButton.addEventListener( 'click', (function(model) {
            return function() {
              octopus.SelectedCat( i );
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
          <img src="${model[i].url}" class="btn__image" alt=""> ${model[i].name}
        </button>`;
      }
      catButtons.innerHTML = catButtonStr;
      octopus.selectCat();
      octopus.openingAdminView();
    },

    renderSelectedCat: () => {
      const catView = document.getElementById('catView');
      let catStr = '';
      catView.innerHTML = `<div id="box" class="box">
        <img src="${model[selectedCat.index].url}" alt="Cat #${selectedCat.index}" id="box-img" class="img box__img">
        <span id="box-title" class="box__element_float box__element_title">${model[selectedCat.index].name}</span>
        <span id="box-counter" class="box__element_float box__element_counter">${model[selectedCat.index].clicks}</span>
      </div>`;

      octopus.catClicks();
    },

    renderAdminOptions: () => {
      const form = document.getElementById('adminOptions');
      if ( !modelAdmin ) {
        form.classList.add('shown');
        modelAdmin = true;
      } else {
        form.classList.remove('shown')
        modelAdmin = false;
      }
      octopus.cancelAdminView();
      octopus.updateCats();
    },

    render: () => {}
  };

  octopus.init();
})();
