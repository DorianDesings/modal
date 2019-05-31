const button = document.getElementById('button')
const modal = document.getElementById('modal')

if (button) {
    button.addEventListener('click', () => modal.classList.add('modal--show'))
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) modal.classList.remove('modal--show')
    })
}