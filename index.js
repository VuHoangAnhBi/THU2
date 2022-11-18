const helpBtn = document.querySelector('.help');
const modal = document.querySelector('.modal');
const buttonOk = document.querySelector('.modal .ok')

const setModalShown = (isShown) => {
    if (isShown) {
        modal.style.display = 'flex';
    } else {
        modal.style.display = 'none';
    }
}

if (helpBtn) {
    helpBtn.onclick = () => {
        setModalShown(true)
    }
}

if (buttonOk) {
    buttonOk.onclick = () => {
        setModalShown(false)
    }
}