let button = document.getElementById('burger');

let navigation = document.getElementById('menu');

let menuClose = document.getElementById('close')

button.addEventListener('click', function(){
    navigation.classList.toggle('display-block');
});

menuClose.addEventListener('click', function(){
    navigation.classList.toggle('display-block');
});

