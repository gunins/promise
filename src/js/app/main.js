define(['app/translation'], function (Translation) {

    console.log('Translation: ', Translation);

    var btnRed = document.getElementById('btn1');
    var btnGreen = document.getElementById('btn2');

    var data = {};

    Translation.then(function (data) {
        console.log('main.js data: ', data);

        btnRed.textContent = data.phrase1;
        btnGreen.textContent = data.phrase2;
    });

    btnRed.textContent = data.phrase1 || 'RED';
    btnGreen.textContent = data.phrase2 || 'GREEN';

    console.log('end phrase: ', data);

});