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
    selected: null,
    admin: false
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
      model.selected = object;
    
      return model.selected;
    },

    editSelected: function(name, clicks, url) {
      model.selected.name = name;
      model.selected.clicks = clicks;
      model.selected.url = url;
      
      listView.init();
      selectedView.init();
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
     * @desc    Change boolean model.admin and remove or adds class to an element
     * @param   Button, Element
     * @returns none
     */
    hideAndShowAdmin: function(element){
      if (!model.admin) {
        element.classList.add('show');
        model.admin = true;
      } else {
        element.classList.remove('show');
        model.admin = false;
      }
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
      adminView.init();
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

      listDomElm.innerHTML = '';

      for (let i = 0; i < list.length; i++) {
        let item = list[i];
        let itemDomElm = document.createElement('button');
        
        itemDomElm.id = `item${i}Button`;
        itemDomElm.className = 'btn selection__btn';
        itemDomElm.innerHTML = `<span class="btn__image"><img src="${item.url}" alt=""></span> ${item.name}`

        /**
         * @desc  Adds click event to created List Items
         * @param object - current item in iteration
         * @return function - asign selected item, render selected item
         */
        itemDomElm.addEventListener('click', (function(itemCopy){
          return function(){
            octopus.setSelectedItem( itemCopy );
            selectedView.render();
            adminView.setInputValues();
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

  const adminView = {

    /**
     * @desc    creates variable to use in adminView
     */
    adminForm: document.getElementById('adminForm'),
    nameInput: document.getElementById('name'),
    clicksInput: document.getElementById('clicks'),
    urlInput: document.getElementById('url'),

    /**
     * @desc    Set input values to current selected List Item
     * @param   none
     * @return  DOM input values
     */
    setInputValues: function(){
      this.nameInput.value = model.selected.name;
      this.clicksInput.value = model.selected.clicks;
      this.urlInput.value = model.selected.url;
    },

    /**
     * @desc    Add function to admin button to show admin form
     * @param   none
     * @returns none
     */
    render: function() {
      const adminButton = document.getElementById('adminButton');
      const cancelButton = document.getElementById('cancelButton');
      const saveButton = document.getElementById('saveButton');
      const adminForm = this.adminForm;
      
      adminButton.addEventListener('click',function(){
        adminView.setInputValues();
        octopus.hideAndShowAdmin(adminForm);
      });

      cancelButton.addEventListener('click', function(){
        octopus.hideAndShowAdmin(adminForm);
      });

      saveButton.addEventListener('click', function(){
        let name = adminView.nameInput.value;
        let clicks =  Number(adminView.clicksInput.value);
        let url = adminView.urlInput.value;
        
        octopus.editSelected(name, clicks, url);
        octopus.hideAndShowAdmin(adminForm);
      });
    },

    init: function() {
      this.render();
    }
  }

  octopus.init();
})();
