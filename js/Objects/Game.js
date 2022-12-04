
const Papu = document.getElementById('btnPapu');
const Kirdy = document.getElementById('btnKirdy');
const Risky = document.getElementById('btnFrisky');
const Play = document.getElementById('btnPlay');



Papu.addEventListener('click',function(){
   console.log('El papu');
   document.getElementById('nameChampion').innerHTML = ' ';
   document.getElementById('nameChampion').innerHTML = 'El Papu';

});

Kirdy.addEventListener('click',function(){
    console.log('El kyrdy');
    document.getElementById('nameChampion').innerHTML = ' ';
    document.getElementById('nameChampion').innerHTML = 'El kyrdy';

});

Risky.addEventListener('click',function(){
    console.log('El risky');
    document.getElementById('nameChampion').innerHTML = ' ';
    document.getElementById('nameChampion').innerHTML = 'El risky';
});

Play.addEventListener('click',function(){
    console.log('click');
});
