const li = document.querySelectorAll('li');
const button = document.querySelector('button');

for (let l of li) {
    l.addEventListener('click', () => {
        for (let i of li) {
            i.classList.remove('select');
        }
        l.classList.add('select')
    });
}

button.addEventListener('click', () => {
    const select = document.querySelector('.select');
    const rating = document.querySelector('.rating');
    rating.innerText = (`You selected ${select.innerText} out of 5.`);
    document.querySelector('.prompt').style.display = 'none';
    document.querySelector('.thanks').style.display = 'flex';
})