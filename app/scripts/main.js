(function() {
  const model = {
    list: [
      {
        name: 'Ashes',
        clicks: 0,
        url: 'images/0.jpg'
      },
      {
        name: 'Puss',
        clicks: 0,
        url: 'images/1.jpg'
      },
      {
        name: 'Misty',
        clicks: 0,
        url: 'images/2.jpg'
      },
      {
        name: 'Tigger',
        clicks: 0,
        url: 'images/3.jpg'
      },
      {
        name: 'Kitty',
        clicks: 0,
        url: 'images/4.jpg'
      }
    ],
    selected: null
  };

  /**
   * @desc    Hold asignation functions for Items and List Items
   */
  const octopus = {
    
    /**
     * @desc    Calls List array
     * @param   none
     * @returns Array - List Item
     */
    getList: function() {
      return model.list;
    },
    
    /**
     * @desc    Calls selected model object
     * @param   none
     * @returns Object - selected List Item
     */
    getSelectedListItem: function() {
      return model.selected;
    },

    /**
     * @desc    Asigns selected value to model selected object
     * @param   Object - Clicked DOM button List Item elmenent
     * @return  none
     */
    setSelectedItem: function( object = model.list[0] ) {
      let index = model.list.indexOf( object );
      
      model.selected = object;
      model.selected.index = index;
      
      return model.selected;
    },

    /**
     * @desc    Increment object click value
     * @param   none
     * @returns Incremented value
     */
    incrementSelected: function() {
      model.selected.clicks += 1;
      selectedView.render();
    },

    /**
     * @desc  Call rendering functions and asign selected function
     * @param none
     * @requires none
     */
    init: function() {
      this.setSelectedItem();
      listView.init();
      selectedView.init();
    }
  };

  /**
   * @desc    Hold functions for render and user interaction with selected Item
   */
  const selectedView = {

    /**
     * @desc    Create selected List Item in DOM
     * @param   none
     * @returns selected List Item DOM element
     */
    render: function() {
      const selectedContainerDomElm = document.getElementById('selectedContainer');
      
      let selected = octopus.getSelectedListItem();
      let selectedImageDomElm = `
        <img src="${selected.url}" alt="${selected.name}" id="itemImage${selected.index}" class="selected__img">
        <span id="selectedTitle" class="selected__element_float selected__element_title">${selected.name}</span>
        <span id="selectedCounter" class="selected__element_float selected__element_counter">${selected.clicks}</span>
      `;

      selectedContainerDomElm.innerHTML = selectedImageDomElm;

      let selectedItemImage = document.getElementById(`itemImage${selected.index}`);
      
      selectedItemImage.addEventListener('click', function(){
        octopus.incrementSelected();
      });
    },

    init: function() {
      this. render();
    }
  }


  /**
   * @desc    Hold functions for render and user interaction with List Items
   */
  const listView = {

    /** 
     * @desc    Create List Items in DOM
     * @param   none
     * @return  DOM List Item elements
    */
    render: function() {
      const listDomElm = document.getElementById('selectionButtons');
      let list = octopus.getList();

      for (let i = 0; i < list.length; i++) {
        let item = list[i];
        let itemDomElm = document.createElement('button');
        
        itemDomElm.id = `item${i}Button`;
        itemDomElm.className = 'btn selection__btn';
        itemDomElm.innerHTML = `<span class="btn__image"><img src="images/${i}.jpg" alt=""></span> ${item.name}`

        /**
         * @desc  Adds click event to created List Items
         * @param object - current item in iteration
         * @return function - asign selected item, render selected item
         */
        itemDomElm.addEventListener('click', (function(itemCopy){
          return function(){
            const itemButtons = document.getElementsByClassName('selection__btn');
            octopus.setSelectedItem( itemCopy );
            selectedView.render();
          }
        })(item));

        listDomElm.appendChild( itemDomElm );
      }
    },

    /**
     * @desc    Call List Item rendering function
     * @param   none
     * @return  none
     */
    init: function() {
      this.render();
    }
  };

  octopus.init();
})();
