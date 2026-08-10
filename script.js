/*
==================================
August 13th · To Jiao

Cinema Scroll Engine

==================================
*/


// ==========================
// 滚动动画
// ==========================


const pages = document.querySelectorAll(".page");

const letter =
document.querySelector(".letter");


const letterObserver =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


letter.classList.add(
"active"
);


}


})


},

{

threshold:.5

}

);



if(letter){

letterObserver.observe(letter);

}



const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"active"
);



}


});


},

{

threshold:0.45

}



);




pages.forEach(page=>{


observer.observe(page);


});






// ==========================
// 音乐控制
// ==========================



const music =
document.getElementById("bgm");



let playing=false;



function playMusic(){



const btn =
document.querySelector(".music-btn");



if(!playing){


music.play();


playing=true;


btn.innerHTML="Ⅱ";

btn.style.transform=
"rotate(360deg)";


}

else{


music.pause();


playing=false;


btn.innerHTML="♪";


}


}







// ==========================
// 页面滚动进度条
// ==========================



const progress =
document.createElement("div");



progress.className=
"progress";



document.body.appendChild(progress);





window.addEventListener(
"scroll",

()=>{


let scrollTop =
window.scrollY;



let height =
document.body.scrollHeight
-
window.innerHeight;



let percent =
(scrollTop / height)*100;



progress.style.width=
percent+"%";


}

);






// ==========================
// 鼠标移动轻微视差
// ==========================



document.addEventListener(
"mousemove",

(e)=>{


const x =
(e.clientX /
window.innerWidth
-
0.5)
*10;



const y =
(e.clientY /
window.innerHeight
-
0.5)
*10;



document.querySelectorAll(
".page img"
)
.forEach(img=>{


img.style.transform =
`
scale(1.03)
translate(
${x}px,
${y}px
)
`;


});


}

);





// ==========================
// 标题进入动画
// ==========================



window.addEventListener(
"load",

()=>{


document.querySelector(".hero")
.classList.add("show");


});

// ==========================
// Loading结束
// ==========================


window.addEventListener(
"load",

()=>{


setTimeout(()=>{


document
.querySelector(".loader")
.classList
.add("hide");


},2200);


});