

   const changeColor =()=>{

  let hexColors =[1,2,3,4,5,6,7,8,9,'a','b','c','d'];
   let hex = '#';
    for(i= 0; i< 6; i++){
    let index = Math.floor(Math.random()* hexColors.length);
    let color = hexColors[index];
    hex+= color
    let corp =document.querySelector('body');
    corp.style.background= hex
    let hexi =document.getElementById('hex');
    hexi.innerHTML=hex
    }


}


 