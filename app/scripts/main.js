
let catThumbnail = document.getElementById( 'cats' ).getElementsByClassName( 'cat' );
let selectedCats = [];
let catsInputsArray = [];
const selectedCatsContainer = document.getElementById( 'targetContainer' );
const formContainer = document.getElementById( 'formContainer' );
const catInputs = document.getElementById( 'catInputs' );
const selectionBtnContainer = document.getElementById( 'catSelectionButtonContainer' );
const selectionBtn = document.getElementById( 'catSelectionButton' );

const events = {
    catchMouseEvent : ( imageTarget, targetCounter ) => {

        const image = document.getElementById( `${imageTarget}` );
        const imageCounter = document.getElementById( targetCounter );
        const triggerClass = 'clicked';

        let int = 0;

        console.log( imageTarget, targetCounter );

        if ( image.addEventListener ){
            image.addEventListener( 'mousedown', ( event ) => {
                image.className += ` ${triggerClass}`;
            }, false );
            image.addEventListener( 'mouseup', ( event ) => {
                image.classList.remove( triggerClass );
                int += 1;
                imageCounter.textContent = int;
            }, false);
        }
    },
    catchFormNames : () => {
        
        const namingButton = document.getElementById( 'namingButton' );
        const textField = document.getElementsByClassName( 'form__input' );
        const backdrop = document.getElementById( 'backdrop' );
        const catName = document.getElementsByClassName( 'cat-name' );

        namingButton.addEventListener( 'click', () => {

            for ( let i = 0; i < textField.length; i++ ) {
                if ( textField[ i ].value.length > 0 ) {
                    catName[ i ].textContent = textField[ i ].value;
                    backdrop.className += ' fadeOut';
                }
            }
        }, false );
    }
}

const insertInputsElements = ( container, array ) => {
    container.innerHTML = '';
    array.forEach( ( element ) => { 
        container.innerHTML += element 
    });
}

const insertImagesElements = ( container, array ) => {
    container.innerHTML = '';
    for ( let i = 0; i < array.length; i++ ) {
        container.innerHTML += array[ i ];
    }
}

for ( let i = 0; i < catThumbnail.length; i++ ) {

    let selectedCatRender = document.innerHTML = 
        `<div id="targetImage_0${ i }" class="box__unit">
            <h3 id="name_0${ i }" class="box__title cat-name"></h3>
            <img id="image-0${ i }" class="box__img" src="images/${ i }.jpg" />
            <span id="counter_0${ i }" class="box-counter">0</span>
        </div>`;
    
    let catInput = document.innerHTML = 
        `<div class="form__group">
            <img class="form__group-img" src="images/${ i }.jpg" />
            <input id="input_0${ i }" class="form__input" type="text">
        </div>`;

    let currentCat = catThumbnail[ i ];

    catThumbnail[i].addEventListener( 'click', (( imgIcon, i ) => {
    
        imgIcon = imgIcon.querySelector( 'span i' );
        

        return () => {

            if ( imgIcon.classList.contains( 'far' ) === true ) {
                imgIcon.className = 'fas fa-check-circle';
                selectedCats.push( selectedCatRender );
                catsInputsArray.push( catInput );
                selectionBtnContainer.classList.remove( 'hidden-action' );
                events.catchFormNames();
            } else {
                imgIcon.className = 'far fa-circle';
                selectedCats.splice( selectedCats.indexOf( selectedCatRender ), 1 );
                catsInputsArray.splice( selectedCats.indexOf( catInput ), 1 );
                ( selectedCats.length < 1 ? selectionBtnContainer.className += ' hidden-action' : false );
            }
            insertInputsElements( catInputs, catsInputsArray );
            insertImagesElements( selectedCatsContainer, selectedCats );
        }
    })( currentCat, i ));
}

selectionBtn.addEventListener( 'click', () => {
    let forms = document.getElementsByClassName( 'form' );
    for ( let form of forms ) {
        form.className += ' slide';
    }
} );