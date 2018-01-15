const image_1 = document.getElementById( 'targetImage_1' );
const image_2 = document.getElementById( 'targetImage_2' );
const clickCounter_1 = document.getElementById( 'clickCounter_1' );
const clickCounter_2 = document.getElementById( 'clickCounter_2' );
let clicksImage_1 = 0;
let clicksImage_2 = 0;

const imageTrigger = {
    catchMouseEvent : ( image, counter, int ) => {
        const triggerClass = 'clicked';
        if ( image.addEventListener ){
            image.addEventListener( 'mousedown', () => image.className += ` ${triggerClass}`, false );
            image.addEventListener( 'mouseup', () => {
                image.classList.remove( triggerClass );
                counter.textContent = int += 1;
            }, false);
        }
    },
    catchFormNames : () => {
        const namingButton = document.getElementById( 'namingButton' );
        const textField = document.getElementsByClassName( 'form__input' );
        const backdrop = document.getElementById( 'backdrop' );
        const catName = document.getElementsByClassName( 'catName' );

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

// imageTrigger.catchMouseEvent( image_1, clickCounter_1, clicksImage_1 );
// imageTrigger.catchMouseEvent( image_2, clickCounter_2, clicksImage_2 );

const insertArrayElements = ( container, array ) => {
    container.innerHTML = '';
    array.forEach(element => container.innerHTML += element);
}

let cats = [];
let catsArray = [];
let catsInputsArray = [];
const container = document.getElementById( 'targetContainer' );
const formContainer = document.getElementById( 'formContainer' );
const catInputs = document.getElementById( 'catInputs' );
const selectionBtnContainer = document.getElementById( 'catSelectionButtonContainer' );
const selectionBtn = document.getElementById( 'catSelectionButton' );

cats = document.getElementById( 'cats' ).getElementsByClassName( 'cat' );

for ( let i = 0; i < cats.length; i++ ) {
    let catBox = document.innerHTML = 
        `<div id="targetImage_${i+1}" class="box__unit">
            <h3 id="name_${i+1}" class="box__title"></h3>
            <img class="box__img" src="images/${i+1}.jpg" />
            <span id="clickCounter_${i+1}" class="box-counter">0</span>
        </div>`;
    
    let catInput = document.innerHTML = 
        `<div class="form__group">
            <img class="form__group-img" src="images/${i+1}.jpg" />
            <input id="input_${i+1}" class="form__input" type="text">
        </div>`;

    let currentCat = cats[ i ];

    cats[i].addEventListener( 'click', (( imgIcon ) => {
    
        imgIcon = imgIcon.querySelector( 'span i' );

        return () => {
            if ( imgIcon.classList.contains( 'far' ) === true ) {
                imgIcon.className = 'fas fa-check-circle';
                catsArray.push( catBox );
                catsInputsArray.push( catInput );
                selectionBtnContainer.classList.remove( 'hidden-action' );
            } else {
                imgIcon.className = 'far fa-circle';
                catsArray.splice( catsArray.indexOf( catBox ), 1 );
                catsInputsArray.splice( catsArray.indexOf( catInput ), 1 );
                ( catsArray.length < 1 ? selectionBtnContainer.className += ' hidden-action' : false );
            }
            insertArrayElements( container, catsArray );
            insertArrayElements( catInputs, catsInputsArray );
        }
    })( currentCat ));
}

selectionBtn.addEventListener( 'click', () => {
    let forms = document.getElementsByClassName( 'form' );
    for ( let form of forms ) {
        form.className += ' slide';
    }
} );

imageTrigger.catchFormNames();