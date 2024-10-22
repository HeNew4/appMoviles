const list = document.getElementById('lis')
const form = document.getElementById('en')

form.addEventListener('click', () => {
    const a = document.getElementById('a').value;

    list.innerHTML += `<li>${a}</li>`

    console.log('H');
    

});
