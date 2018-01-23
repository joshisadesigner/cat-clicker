const selectedImages = [];
let selectedImagesNames = [];

const htmlElms = {
    image : ( identifier ) => {
        let box = document.createElement( 'div' );
        box.className = 'box__unit';

        let boxTitle = document.createElement( 'h3' );
        boxTitle.id = `name-0${ identifier}`;
        boxTitle.className = 'box__title';

        let boxImage = document.createElement( 'img' );
        boxImage.id = `image-0${ identifier }`;
        boxImage.className = 'box__img';
        boxImage.src = `images/${ identifier }.jpg`;

        let boxCounter = document.createElement( 'span' );
        boxCounter.id = `counter-0${ identifier }`;
        boxCounter.className = 'box-counter';

        box.appendChild( boxTitle );
        box.appendChild( boxImage );
        box.appendChild( boxCounter );

        htmlElms.imgContainer.appendChild( box );
    },
    input : ( identifier, container ) => {
        let input = `<div class="form__group">
                        <img class="form__group-img" src="images/${identifier}.jpg" />
                        <input id="input_0${identifier}" class="form__input" type="text">
                    </div>`
        container.innerHTML += input;
    },
    insertHtmlElement : ( container, element ) => {
        container.innerHTML += element;
    },
    emptyHtmlContainer : ( container ) => {
        container.innerHTML = '';
    },
    thumbs : document.getElementsByClassName( 'thumb' ),
    selectBtnContainer : document.getElementById( 'selectBtnContainer' ),
    selectBtn : document.getElementById( 'selectBtn' ),
    inputsContainer : document.getElementById( 'inputsContainer' ),
    inputsBtnContainer : document.getElementById( 'inputsBtnContainer' ),
    inputsBtn : document.getElementById( 'inputsBtn' ),
    inputs : document.getElementsByClassName( 'form__input' ),
    thumbsAndInputsContainer : document.getElementById( 'formContainer' ),
    backdrop : document.getElementById( 'backdrop' ),
    imgContainer : document.getElementById( 'imgContainer' ),
}

const classes = {
    unselect : 'form__select-icon far fa-circle',
    selected : 'form__select-icon fas fa-check-circle',
    btnHide : 'btn-hide',
    slide : 'slide',
    fadeOut : 'fade-out',
}

const clickThumbnails = ( arr ) => {
    for( let i = 0; i < arr.length; i++ ) {
        let image = arr[ i ];
        arr[ i ].addEventListener( 'click', ( ( img ) => {
            return () => {
                let imgIcon = img.getElementsByTagName( 'i' );
                if( imgIcon[ 0 ].classList.contains( 'far' ) ) {
                    imgIcon[ 0 ].className = classes.selected;
                    selectedImages.push( i );
                    htmlElms.selectBtnContainer.classList.remove( classes.btnHide );
                } else {
                    imgIcon[ 0 ].className = classes.unselect;
                    selectedImages.splice( selectedImages.indexOf( i ), 1 )
                    if( selectedImages.length === 0 ) { htmlElms.selectBtnContainer.className += ` ${classes.btnHide}` }
                }
            };
        })( image ));
    }
}

const addHtmlElements = ( btn, arr, containerTarget ) => {
    btn.addEventListener( 'click', () => {
        htmlElms.thumbsAndInputsContainer.className += ` ${ classes.slide }`;
        for ( let i = 0; i < arr.length; i++ ){
            htmlElms.input( arr[ i ], containerTarget )
        }
    });
}

const imgNaming = () => {

    htmlElms.inputsBtn.addEventListener( 'click', () => {
        selectedImagesNames = [];
        for( let i = 0; i < htmlElms.inputs.length; i++ ) {

            if( htmlElms.inputs[ i ].value !== '' ) {
                selectedImagesNames.push( htmlElms.inputs[ i ].value );
            }
        }
            
        if( selectedImagesNames.length === htmlElms.inputs.length ) {
            htmlElms.backdrop.className += ` ${ classes.fadeOut }`;
            placeImages();
        }
    }, false );
}

const placeImages = () => {
    for( let i = 0; i < selectedImages.length; i++ ) {
        //Creates elements in DOM
        htmlElms.image( selectedImages[ i ] );
        
        // Takes ID of image to use as target
        let image = document.getElementById( `image-0${ selectedImages[ i ] }` );
        // Takes ID of image target counter to add clicks count
        let counter = document.getElementById( `counter-0${ selectedImages[ i ] }` )

        // Takes ID of image name to add name
        let imageName = document.getElementById( `name-0${ selectedImages[ i ] }` );
        // Adds image name to the image
        imageName.textContent = selectedImagesNames[ i ];
        
        addListener( image, counter );
    }
}

const addListener = ( image, counter ) => {
    image.addEventListener( 'click', ( (  ) => {
        let clicksCount = 0;
        return () => {
            counter.textContent = clicksCount += 1;
            console.log( `counter: ${ counter.id } | clicks count: ${ clicksCount }` );
        }
    }) ( counter ) );
}

clickThumbnails( htmlElms.thumbs );
addHtmlElements( selectBtn, selectedImages, inputsContainer );
imgNaming();
