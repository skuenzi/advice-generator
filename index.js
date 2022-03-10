// change element divider img for desktop/mobile
function setDivider () {
    let divider = document.getElementsByClassName('divider')[0]

    if (window.innerHeight > window.innerWidth) {
        document.getElementsByClassName('divider')[0].src = './images/pattern-divider-mobile.svg'
    } else {
        document.getElementsByClassName('divider')[0].src = './images/pattern-divider-desktop.svg'
    }


}

window.addEventListener('resize', setDivider)
window.addEventListener('load', setDivider)


// get item from advice API


const adviceContent = document.getElementsByClassName('advice-content')[0]
const adviceId = document.getElementById('adviceslip-id')
const button = document.getElementsByClassName('icon-container')[0]

function getAdvice () {
    const url = 'https://api.adviceslip.com/advice'

    fetch(url)
        .then(data => data.json())
        .then(res => {
            console.log(res)
            adviceContent.innerHTML = `"${res.slip.advice}"`
            adviceId.innerHTML = '#' + res.slip.id
        })

}

button.addEventListener('click', getAdvice)


function handleFirstTab(e) {
    if (e.keyCode === 9) { // the "I am a keyboard user" key
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}

window.addEventListener('keydown', handleFirstTab);