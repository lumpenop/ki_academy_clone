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