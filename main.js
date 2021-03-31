visual = document.querySelectorAll('#visual > ul > li > img');
index = 0;
visualNav = document.querySelectorAll('.visual_nav > ul > li');


for (i=0; i<visualNav.length; i++){
    if(i==0){
        visualNav[i].setAttribute("onclick","bannerBtn"+"("+i+")");
        visualNav[i].setAttribute("id","selected");
    }else{
        visualNav[i].setAttribute("onclick","bannerBtn"+"("+i+")");
    }
}

banner = (n) => {
    if (n != undefined){
        index = n;
    }
    document.querySelector(".on").removeAttribute("class")
    document.querySelector("#selected").removeAttribute("id")
    if (index == visual.length){
        index = 0;
    }
    visual[index].setAttribute("class", "on")
    visualNav[index].setAttribute("id", "selected")
    index++;
}
rolling = setInterval(banner, 4500);



bannerBtn = (n) => {
    clearInterval(rolling);
    banner(n)
    rolling = setInterval(banner, 4500);
}


function over(){
    snb = document.querySelector(".snb_area")
    snb.className = "snb_area navi";
  
}

function out(){
    snb = document.querySelector(".snb_area")
    snb.className = "snb_area navi2";
}


function slider(){

    li = document.querySelectorAll('.interview li');
  
    document.querySelector('.interview ul').className = 'move';

    setTimeout(function(){
        document.querySelector('.interview ul').appendChild(li[0]);
        document.querySelector('.interview ul').className = 'move2';
        }, 1000);
     
}

rollin = setInterval(slider, 2000);

function left(){
    clearInterval(rollin);
    slider()
    rollin = setInterval(slider, 2000);
}

function right(){
    clearInterval(rollin);
    li = document.querySelectorAll('.interview li');
    newLi=document.createElement('li');
    newLi.innerHTML = li[3].innerHTML;

    document.querySelector('.interview ul').prepend(newLi);
    document.querySelector('.interview ul').removeAttribute('class');
    document.querySelector('.interview ul').className = 'move_right';


    setTimeout(function(){
        document.querySelector('.interview ul').className = 'move_right2';
        document.querySelector('.interview ul').removeChild(li[3]);
        }, 100);
    rollin = setInterval(slider, 2000);
}

li = document.querySelectorAll('.interview li');

for (i=0; i< li.length; i++){
    li[i].setAttribute("onmouseover","stop()");
    li[i].setAttribute("onmouseout","restart()");

}
stop = () => {
    clearInterval(rollin);

}

restart = () => {
    clearInterval(rollin);
    rollin = setInterval(slider, 2000);

}

rollRoll = () => {

    document.querySelector('.top_banner_roll > ul').className = "rollroll";
    li2 = document.querySelectorAll('.rollroll > li');
    
    setTimeout(function(){
        document.querySelector('.top_banner_roll > ul').appendChild(li2[0])
        document.querySelector('.top_banner_roll > ul').removeAttribute('class')
    }, 1000);
}

setInterval(rollRoll, 2000);