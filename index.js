let list_logo = document.getElementById("list_logo");
let nav = document.getElementById("nav"); 

list_logo.onclick = function(){
  if(nav.style.height === "80px"){
    nav.style.height = "500px";
    nav.style.transition = "1s";
  }else{
    nav.style.height = "80px";
    nav.style.transition = "1s";
  }
}

let home = document.querySelectorAll("#link_server div");
home[0].onclick = function() {
  window.location.href = "index.html";
}

home[5].onclick = function() {
  window.location.href = "https://www.google.com/search?q=%D8%A7%D9%86%D9%88%D8%A7%D8%B9+%D8%A7%D9%84%D8%B4%D9%88%D9%83%D9%84%D8%A7%D8%B7%D9%87&rlz=1C1GCEA_arEG1050EG1050&oq=%D8%A7%D9%86%D9%88%D8%A7%D8%B9+%D8%A7%D9%84%D8%B4%D9%88%D9%83%D9%84%D8%A7%D8%B7%D9%87&aqs=chrome..69i57j0i10i512l9.10147j0j7&sourceid=chrome&ie=UTF-8";
}

home[6].onclick = function() {
  window.location.href = "https://www.linkedin.com/in/mohamed-sherif-a56018286";
}


var img_1 = document.getElementById("img_1");
var img_2 = document.getElementById("img_2");
var i = 0;
var arr = [img_1, img_2];

function loop() {
  if (i < arr.length) {
    arr[i].style.marginLeft = "100%";
    arr[i].style.transition = '2s';
    setTimeout(loop, 3000);
    i++;
  } else {
    resetImages(); 
    i = 0;
    setTimeout(loop, 3000); 
  }
}

function resetImages() {
  for (var j = 0; j < arr.length; j++) {
    arr[j].style.marginLeft = "0%";
  }
}

loop();

let iconleft = document.getElementById("iconleft");
let iconright = document.getElementById("iconright");

let img_loop1 = document.getElementById("img_loop");
let img_loop2 = document.getElementById("img_loop2");

let arr_img_loop = [img_loop1, img_loop2];

var count = 0;

  iconright.onclick = function(){
  if(count < arr_img_loop.length){
    arr_img_loop[count].style.display = 'none';
    count++;
  }
  else{
    for(let i = 0 ; i < arr_img_loop.length ; i++ ){
      arr_img_loop[i].style.display = 'block';      
    }
    count = 0;
  }
}

let ss = arr_img_loop.length - 1;

iconleft.onclick = function() {
   for(let i = 0 ; i < arr_img_loop.length; i++) {
    arr_img_loop[i].style.display = 'none';
   }
   
   if(ss >= 0) {
    arr_img_loop[ss].style.display = 'block'; 
    ss--;
   }
   else{
    ss = arr_img_loop.length - 1;
   }
  
}

home[1].addEventListener('click',function(){
  nav.style.height = "80px";
  nav.style.transition = "1s";
  window.scrollTo({
    top:990,
    behavior:"smooth"
  })
});

home[2].addEventListener('click',function(){
  nav.style.height = "80px";
  nav.style.transition = "1s";
  window.scrollTo({
    top:1700,
    behavior:"smooth"
  })
});

home[3].addEventListener('click',function(){
  nav.style.height = "80px";
  nav.style.transition = "1s";
  window.scrollTo({
    top:2360,
    behavior:"smooth"
  })
});

home[4].addEventListener('click',function(){
  nav.style.height = "80px";
  nav.style.transition = "1s";
  window.scrollTo({
    top:4100,
    behavior:"smooth"
  })
});