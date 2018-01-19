
const selectedImages = [];

const htmlElms = {
    input : ( identifier ) => {
        let input = `<div class="form__group">
                        <img class="form__group-img" src="images/${identifier}.jpg" />
                        <input id="input_0${identifier}" class="form__input" type="text">
                    </div>`
        continer.innerHTML += input;
    },
    image : ( identifier ) => {
        let image = `<div id="targetImage_0${ i }" class="box__unit">
                        <h3 id="name_0${identifier}" class="box__title cat-name"></h3>
                        <img id="image-00" class="box__img" src="images/${identifier}.jpg" />
                        <span id="counter_0${identifier}" class="box-counter">0</span>
                    </div>`
        container.innerHTML += image;
    },
    insertHtmlElement : ( container, element ) => {
        container.innerHTML += element;
    },
    emptyHtmlContainer : ( container ) => {
        container.innerHTML = '';
    },
    thumbs : document.getElementsByClassName( 'cat' ),
    selectBtnContainer : document.getElementById( 'selectBtnContainer' ),
}

const classes = {
    unselect : 'form__select-icon far fa-circle',
    selected : 'form__select-icon fas fa-check-circle',
    btnHide : 'btn-hide'
}

const onClick = ( arr ) => {
    for( let i = 0; i < arr.length; i++ ) {

        let image = arr[ i ];
        
        arr[ i ].addEventListener( 'click', ( ( img ) => {
            let imgPos;
            let imgIcon = img.getElementsByTagName( 'i' );

            return () => {

                if( imgIcon[ 0 ].classList.contains( 'far' ) ) {
                    imgIcon[ 0 ].className = classes.selected;
                    selectedImages.push( i );
                    imgPos = selectedImages.indexOf( i );
                    htmlElms.selectBtnContainer.classList.remove( classes.btnHide );

                    console.log( `Image: ${ i } | Psition: ${ imgPos } | Array: ${ selectedImages } | Length: ${ selectedImages.length }`)
                } else {
                    imgIcon[ 0 ].className = classes.unselect;
                    selectedImages.splice( imgPos, 1 )
                    if( selectedImages.length === 0 ) { htmlElms.selectBtnContainer.className += ` ${classes.btnHide}` }

                    console.log( `Remove: ${ i } | Position: ${ imgPos } | Array: ${ selectedImages } | Length: ${ selectedImages.length }`)
                }

            };
        })( image ));
    }
}

onClick( htmlElms.thumbs );