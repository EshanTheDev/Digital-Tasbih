const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrementBtn = document.getElementById('subhanAllahDecrimentBtn');


const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn  = document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrementBtn = document.getElementById('alhamdulillahDecrimentBtn');


const allahuAkbarDisplay = document.getElementById('allahAkberDisplay');
const allahuAkbarIncrimentBtn  = document.getElementById('allahAkberIncrimentBtn');
const allahuAkbarDecrementBtn = document.getElementById('allahAkberDecrimentBtn');

const resetBtn = document.getElementById('resetBtn');


let subhanAllahValue = 0;
let alhamdulillahValue = 0;
let allahuAkbarValue = 0 ;


subhanAllahIncrimentBtn.addEventListener('click',function(){

    if(subhanAllahValue === 33 ){
        return alert("subhanAllah Completed 33 times")
    }

    subhanAllahValue += 1 ;
    subhanAllahDisplay.innerText = subhanAllahValue
})

subhanAllahDecrementBtn.addEventListener('click',function(){

    if(subhanAllahValue === 0){
        return alert('you have nothing')
    }
    subhanAllahValue -= 1 ;
    subhanAllahDisplay.innerText = subhanAllahValue
})



alhamdulillahIncrimentBtn.addEventListener('click',function(){
    if(alhamdulillahValue === 33){
        return alert ('Alhamdulillah Completed 33 times')
    }

    alhamdulillahValue += 1
    alhamdulillahDisplay.innerText= alhamdulillahValue
})

alhamdulillahDecrementBtn.addEventListener('click',function(){
    if(alhamdulillahValue === 0){
        return alert ('you have nothing')
    }
    alhamdulillahValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahValue
})


allahuAkbarIncrimentBtn.addEventListener('click',function(){
    if(allahuAkbarValue === 33 ){
        return alert ('AllahuAkbar Completed 33 times')
    }
    allahuAkbarValue += 1;
    allahuAkbarDisplay.innerText=allahuAkbarValue
})

allahuAkbarDecrementBtn.addEventListener('click',function(){
    if(allahuAkbarValue === 0){
        return alert ('you have nothing')
    }
    allahuAkbarValue -= 1;
    allahuAkbarDisplay.innerText = allahuAkbarValue
})



resetBtn.addEventListener('click',function(){

     subhanAllahValue = 0;
     alhamdulillahValue = 0;
     allahuAkbarValue = 0 ;
     subhanAllahDisplay.innerText = 0;
     alhamdulillahDisplay.innerText= 0;
     allahuAkbarDisplay.innerText=0;

})