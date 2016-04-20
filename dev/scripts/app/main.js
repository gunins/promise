define(['app/translation'], function (Translation) {

    console.log('Translation: ', Translation);

    var btnRed = document.getElementById('btn1');
    var btnGreen = document.getElementById('btn2');

    var phrase = {
        phrase8: 'RED',
        phrase9: 'GREEN'
    };

    Translation.then(function (data) {
        console.log('main.js data: ', data);
        phrase.phrase8 = data.phrase8;
        phrase.phrase9 = data.phrase9;

        console.log('then phrase: ', phrase);
    });

    btnRed.innerHTML = phrase.phrase8;
    btnGreen.innerHTML = phrase.phrase9;

    console.log('end phrase: ', phrase);

});