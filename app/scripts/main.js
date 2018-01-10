const triggerClass = 'clicked';

const imageTrigger = {
    addClass : ( elementTarget ) => elementTarget.className += ` ${triggerClass}`,
    removeClass : ( elementTarget ) => elementTarget.classList.remove( triggerClass ),
    clickAction : ( element ) => {
        let clicks = 0;
        clicks += 1;
        console.log( 'clickCounter' );
        element.classList.remove( triggerClass )
    },
    catchMouseEvent : () => {
        const image = document.getElementById( 'targetImage' );
        const clickCounter = document.getElementById( 'clickCounter' );
        if ( image.addEventListener ){
            image.addEventListener( 'mousedown', () => image.className += ` ${triggerClass}`, false );
            image.addEventListener( 'mouseup', imageTrigger.clickAction( image ), false);
        }
    }
}

imageTrigger.catchMouseEvent();