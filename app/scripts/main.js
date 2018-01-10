
const imageOne = document.getElementById( 'targetImageOne' );
const imageTwo = document.getElementById( 'targetImageTwo' );
const clickCounterOne = document.getElementById( 'clickCounterOne' );
const clickCounterTwo = document.getElementById( 'clickCounterTwo' );
let clicksImageOne = 0;
let clicksImageTwo = 0;


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
        const button = document.getElementById( 'formButton' );
        const inputOne = document.getElementById( 'inputOne' );
        const inputTwo = document.getElementById( 'inputTwo' );
        const backdrop = document.getElementById( 'backdrop' );
        const firstName = document.getElementById( 'nameOne' );
        const secondName = document.getElementById( 'nameTwo' );
        button.addEventListener( 'click', () => {
            if ( inputOne.value.length > 0 && inputTwo.value.length ) {
                firstName.textContent = inputOne.value;
                secondName.textContent = inputTwo.value;
                backdrop.className += ' fadeOut';
            }
        }, false );
    }
}

imageTrigger.catchMouseEvent( imageOne, clickCounterOne, clicksImageOne );
imageTrigger.catchMouseEvent( imageTwo, clickCounterTwo, clicksImageTwo );
imageTrigger.catchFormNames();