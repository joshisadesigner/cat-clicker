(function () {
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

    setCurrentCat: () => {},

    clickOnCat: () => {},

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
      let htmlStr = '';
      for (let i = 0; i < model.length; i++) {
        const element = model[i];
        htmlStr +=
          `<button id="cat-0${i}" class="btn selection__btn">
          <img src="images/${i}.jpg" class="btn__image" alt=""> ${model[i].name}
          </button>`
      }
      catButtons.innerHTML = htmlStr;
    },

    renderCatViewingArea: () => {},

    render: () => {},
  };

  octopus.init();
})();
