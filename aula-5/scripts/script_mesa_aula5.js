let toggleswitch = document.getElementById('toggleSwitch');
let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let itemsList = document.querySelectorAll('.item');

function alteraTema() {

    if (toggleswitch.checked) { 

        body.classList.add('body-dark');
        h1.classList.add('h1-dark');

        itemsList.forEach(item => {
            item.classList.add('items-dark');
            item.classList.add('items-text-dark');
        });

    } else { 


        body.classList.remove('body-dark');
        h1.classList.remove('h1-dark');

        itemsList.forEach(item => {
            item.classList.remove('items-dark');
             item.classList.remove('items-text-dark');
        });
    }
}