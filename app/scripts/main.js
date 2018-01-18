
const thumbs = document.getElementsByClassName( 'cat' );
const selectedImages = [];

const imageSelection = {
    changeIcon: ( object ) => {
        const unselect = 'form__select-icon far fa-circle';
        const selected = 'form__select-icon fas fa-check-circle';

        console.log( object );

        if( object.classList.contains( 'far' ) ) {
            object.className = selected;
        } else {
            object.className = unselect;
        }
    },
    onClick: ( arr ) => {
        for( let i = 0; i < arr.length; i++ ) {

            let element = arr[ i ];
            
            arr[ i ].addEventListener( 'click', ( ( elm ) => {
                let elmIcon = elm.getElementsByClassName( 'far' );
                return () => {
                    console.log( elm, elmIcon[0] );
                };
            })( element ));
        }
    }
}

const htmlElements = {
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
    }
}

imageSelection.onClick( thumbs );