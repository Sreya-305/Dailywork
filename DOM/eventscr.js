const button =document.querySelector('#btn');
const heading=document.querySelector('#heading');

button.addEventListener('click',function()
{
    heading.style.color='red';
    heading.style.fontSize='60px';
    console.log('button clicked');
});

const bt=document.querySelector('#bswitch');
const bulb=document.querySelector('#bulb');

bswitch.addEventListener('click',function(){
    console.log(bulb.src);
    if(bulb.src.match('off')){
        bulb.src='bulbon.jpeg';
        bswitch.innerHTML='Turn Off';
    }
    else{
        bulb.src='bulb-off.png';
    }
})