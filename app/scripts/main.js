

const triggerClass = 'clicked';

const imageTrigger = {
    addClass : ( elementTarget ) => elementTarget.className += ` ${triggerClass}`,
    removeClass : ( elementTarget ) => elementTarget.classList.remove( triggerClass ),
    whenClick : () => image.addEventListener,
    catchMouseEvent : () => {
        const image = document.getElementById( 'targetImage' );
        if ( image.addEventListener ){
            image.addEventListener( 'mousedown', () => image.className += ` ${triggerClass}`, false );
            image.addEventListener( 'mouseup', () => image.classList.remove( triggerClass ), false );
        }
    }
}

imageTrigger.catchMouseEvent();