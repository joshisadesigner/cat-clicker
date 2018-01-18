
const thumbs = Array.from( document.getElementsByClassName( 'cat' ) );
const selectedImages = [];

const imageSelection = {
    changeIcon: ( object ) => {
        const unselect = 'far fa-circle';
        const selected = 'fas fa-check-circle';
        if( object.className === unselect ) {
            object.className === selected;
        } else {
            object.className === unselect;
        }
    },
    onClick: ( arr ) => {
        arr.forEach( ( element ) => {
            element.addEventListener( 'click', () => { console.log( 'element clicked' ) }, false );
        } );
    }
}

imageSelection.onClick( thumbs );