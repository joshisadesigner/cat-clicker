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

  const octopus = {
    // Get list to pass to use in render function
    getList: function() {
      return model.list;
    },
    // Get selected list item to use in render function
    getSelectedListItem: function() {
      return model.selected;
    },

    // Set selected list item, add firs list item as default
    setSelectedItem: function( object = model.list[0] ) {
      let index = model.list.indexOf( object );
      
      // Send selected list item to model
      model.selected = object;
      model.selected.index = index;
    },

    // Increment selected cat count in model.list
    incrementSelected: function() {
      model.selected.clicks += 1;
      selectedView.render();
    },

    init: function() {
      // Set default selected list item
      this.setSelectedItem();
      // Run List View initialization
      listView.init();
      // Run selected View i nitialization
      selectedView.init();
    }
  };

  const selectedView = {
    // Build selected item in DOM
    render: function() {
      // Get DOM element to display selected list item
      const selectedContainerDomElm = document.getElementById('selectedContainer');
      // Store selected list item in variable
      let selected = octopus.getSelectedListItem();
      
      // Create image element
      let selectedImageDomElm = `
        <img src="${selected.url}" alt="${selected.name}" id="itemImage${selected.index}" class="selected__img">
        <span id="selectedTitle" class="selected__element_float selected__element_title">${selected.name}</span>
        <span id="selectedCounter" class="selected__element_float selected__element_counter">${selected.clicks}</span>
      `;
      // Add image into the DOM
      selectedContainerDomElm.innerHTML = selectedImageDomElm;

      let selectedItemImage = document.getElementById(`itemImage${selected.index}`);
      
      selectedItemImage.addEventListener('click', function(){
        octopus.incrementSelected();
      });
    },

    // Initialize selected view
    init: function() {
      // Call selected view render function
      this. render();
    }
  }

  const listView = {
    // build selection list in DOM
    render: function() {
      // Get dom element to display list
      const listDomElm = document.getElementById('selectionButtons');
      // Get list to build selection list
      let list = octopus.getList();

      // Loop through list items to build and add click event
      for (let i = 0; i < list.length; i++) {
        // Create variable to store current item
        let item = list[i];

        // Create DOM list item
        let itemDomElm = document.createElement('button');

        // Add id to list item
        itemDomElm.id = `item${i}Button`;
        // Add class to list item
        itemDomElm.className = 'btn selection__btn';
        // Insert  html containing image and name inside list item
        itemDomElm.innerHTML = `<span class="btn__image"><img src="images/${i}.jpg" alt=""></span> ${item.name}`

        // Add click event to list item and store item inside function
        itemDomElm.addEventListener('click', (function(itemCopy){
          // colect all list item buttons
          // Return function for each list item
          return function(){
            const itemButtons = document.getElementsByClassName('selection__btn');
            // Send list item clicked to set selected function
            octopus.setSelectedItem( itemCopy );
            // Call render function for clicked list item
            selectedView.render();
          }
        // Pass list item to use in returned function
        })(item));

        // Insert button list item into the DOM
        listDomElm.appendChild( itemDomElm );
      }
    },

    // Initialize List View
    init: function() {
      // Call list render function
      this.render();
    }
  };

  // Initialize application
  octopus.init();
})();
