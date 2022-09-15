'use strict';




const ALL_QUIZ = [
  {
    id: 1,
    question: '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
    answers: ['約28万人', '約79万人', '約183万人'],
    correctNumber: 1,
    note: '経済産業省 2019年3月 － IT 人材需給に関する調査'
  },
  {
    id: 2,
    question: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
    answers: ['INTECH', 'BIZZTECH', 'X-TECH'],
    correctNumber: 2,
  },
  {
    id: 3,
    question: 'IoTとは何の略でしょう？',
    answers: ['Internet of Things', 'Integrate into Technology', 'Information on Tool'],
    correctNumber: 0,
  },
  {
    id: 4,
    question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    answers: ['Society 5.0', 'CyPhy', 'SDGs'],
    correctNumber: 0,
    note: 'Society5.0 - 科学技術政策 - 内閣府',
  },
  {
    id: 5,
    question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    answers: ['Web 3.0', 'NFT', 'メタバース'],
    correctNumber: 0,
  },
  {
    id: 6,
    question: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
    answers: ['約2倍', '約5倍', '約11倍'],
    correctNumber: 1,
    note: 'Accenture Technology Vision 2021',
  }
];

const img = [
  ['./img/quiz/img-quiz01.png'],
  ['./img/quiz/img-quiz02.png'],
  ['./img/quiz/img-quiz03.png'],
  ['./img/quiz/img-quiz04.png'],
  ['./img/quiz/img-quiz05.png'],
  ['./img/quiz/img-quiz06.png'],
]




// console.log(ALL_QUIZ[0].id);
// console.log(ALL_QUIZ[2].question);
// console.log(ALL_QUIZ[5].answers[0]);

let main = '';
let loop = document.getElementById('loop');

for (let i = 0; i < ALL_QUIZ.length; i++) {
  main+=`<section class="main-inner">`
      +`<div class="main-logo-question">`
      +  `<h2>Q${i+1}</h2>`
      +`</div>`
      +`<h3>${ALL_QUIZ[i].question}</h3>`
      +`<div class="main-img"><img src="${img[i]}" alt="number"></div>`
      +`<div class="main-logo-answer">`
      +  `<h4>A</h4>`
      +`</div>`
    
      +`<ul>`
      +  `<li id="false0-${i}">`
      +      `<p>${ALL_QUIZ[i].answers[0]}</p>`
      +      `<div class="main-arrow">`
      +        `<img src="./img/icon/icon-arrow.svg" alt="arrow">`
      +      `</div>`
      +    `</li>`
      +  `<li id="correct-${i}">`
      +      `<p>${ALL_QUIZ[i].answers[1]}</p>`
      +      `<div class="main-arrow">`
      +        `<img src="./img/icon/icon-arrow.svg" alt="arrow">`
      +      `</div>`
      +  `</li>`
      +  `<li id="false1-${i}">`
      +      `<p>${ALL_QUIZ[i].answers[2]}</p>`
      +      `<div class="main-arrow">`
      +        `<img src="./img/icon/icon-arrow.svg" alt="arrow">`
      +      `</div>`
      +   `</li>`
      +`</ul>`
      +`<div class="correctbox" id="correctbox-${i}">`
      +  `<h5>正解！</h5>`
      +  `<p><span>A</span> ${ALL_QUIZ[i].answers[ALL_QUIZ[i].correctNumber]}</p>`
      +`</div>`
      +`<div class="falsebox" id="falsebox-${i}">`
      +  `<h5>不正解…</h5>`
      +  `<p><span>A</span> ${ALL_QUIZ[i].answers[ALL_QUIZ[i].correctNumber]}</p>`
      +`</div>`;
      if(ALL_QUIZ[i].note!==undefined){
      main+=`<aside class="main-quote">`
      +  `<img src="./img/icon/icon-note.svg" alt="">`
      +  `<p>${ALL_QUIZ[i].note}</p>`
      +`</aside>`}
      +`</section>`;
    loop.innerHTML = main;
}

// const shuffle = arrays => {
//   const array = arrays.slice();
//   for (let i = array.length - 1; i >= 0; i--) {
//     const randomIndex = Math.floor(Math.random() * (i + 1));
//     [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
//   }
//   return array;
// }


for ( let i = 0; i < ALL_QUIZ.length; i++){
  let ele = document.getElementById(`correctbox-${i}`);
  let ele1 = document.getElementById(`falsebox-${i}`);
  document.getElementById('correct-' + i).onclick =() =>{
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
      let main = document.getElementById(`false1-${i}`);
      main.style.backgroundColor = "#EFF2F5";
      main.style.color ="0071BC";
      main.style.border="5px solid #0071BC";
    }
  };
};

