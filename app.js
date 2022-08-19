'use strict';

console.log("hoge");

for ( let i = 0; i < 6; i++){
  let ele = document.getElementById(`correctbox-${i}`);
  let ele1 = document.getElementById(`falsebox-${i}`);
  document.getElementById('correct-' + i).onclick = () =>{
    if (ele1.style.display!=='block'){
      ele.style.display = 'block';
      let main = document.getElementById(`correct-${i}`);
      main.style.backgroundColor = "#EFF2F5";
      main.style.color ="0071BC";
      main.style.border="5px solid #0071BC";
    }
  };
  
  document.getElementById('false0-' + i).onclick = ()=>{
    if(ele.style.display!=='block'){
      ele1.style.display = 'block';
      let main = document.getElementById(`false0-${i}`);
      main.style.backgroundColor ="#EF2F5";
      main.style.color ="#0071BC";
      main.style.border="5px solid #0071BC";
    }
  };

  document.getElementById('false1-' + i).onclick = ()=>{
    if (ele.style.display!=='block'){
      ele1.style.display = 'block';
      let main = document.getElementById(`false-${i}`);
      main.style.backgroundColor = "#EFF2F5";
      main.style.color ="0071BC";
      main.style.border="5px solid #0071BC";
    }
  };
};

