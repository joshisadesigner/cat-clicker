const selectedImages = [];
let selectedImagesNames = [];

const htmlElms = {
    image : ( identifier, container ) => {
        let image = `<div id="image_0${ identifier }" class="box__unit">
                        <h3 id="name_0${ identifier}" class="box__title cat-name"></h3>
                        <img id="image-0${ identifier}" class="box__img" src="images/${ identifier }.jpg" />
                        <span id="counter_0${ identifier }" class="box-counter">0</span>
                    </div>`
        container.innerHTML += image;
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
            
            if( selectedImagesNames.length === htmlElms.inputs.length ) {
                htmlElms.backdrop.className += ` ${ classes.fadeOut }`;
                placeImages();
            }
        }
    }, false );
}

const placeImages = () => {
    for( let i = 0; i < selectedImages.length; i++ ) {
        console.log( selectedImages );
        htmlElms.image( selectedImages[ i ], imgContainer );

        let imageName = document.getElementById( `name_0${ selectedImages[ i ] }` );
        imageName.textContent = selectedImagesNames[ i ];

        let imageTarget = document.getElementById( `image-0${ selectedImages[ i ] }` );

        imageTarget.addEventListener( 'click', ( () => {
            return () => {
                let clicks = 0;
                
            }
        }) ( imageTarget ) );


    }
    
    // console.log( document.getElementsByClassName( 'box-counter' ) );
}

clickThumbnails( htmlElms.thumbs );
addHtmlElements( selectBtn, selectedImages, inputsContainer );
imgNaming();