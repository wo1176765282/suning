window.onload=function () {

    //banner选项卡
    let allCommodity_list=document.getElementById("allCommodity_list");
    let lis=allCommodity_list.getElementsByTagName('li');

    let allCommodity_list_wrap=document.getElementsByClassName('allCommodity_list_wrap');



    for (let i=0;i<lis.length;i++){
        for (let j=0;j<lis.length;j++){
            lis[j].onmouseenter=function () {
                allCommodity_list_wrap[j].style.display='block';
            }
            allCommodity_list_wrap[j].onmouseenter=function () {
                allCommodity_list_wrap[j].style.display='block';
            }
            allCommodity_list_wrap[j].onmouseleave=function () {
                allCommodity_list_wrap[j].style.display='none';
            }
        }
        lis[i].onmouseleave=function () {
            allCommodity_list_wrap[i].style.display="none";
        }
        /*allCommodity_list_wrap[i].onmouseenter=function () {
            lis[i].style.background="#fff";
            let lis_a=lis[i].getElementsByTagName('a');
            for (let k=0;k<lis_a.length;lis_a++){
                lis_a[k].style.color="#666";
            }

        }*/
    }


    //轮播图
/*    let banner=document.getElementsByClassName('banner')[0];
    let bannerLis=banner.getElementsByTagName('li');
    // console.log(banner, bannerLis);

    let num=0;
    let time=setInterval(lbt,1000);


    /!*let circle=document.getElementsByClassName('circle')[0];
    let btns=circle.getElementsByTagName('li');
    console.log(circle);
    console.log(btns);*!/
    /!*let circle=document.getElementsByClassName('circle')[0];
    console.log(circle);*!/


    function lbt() {
        num++;
        for (let i=0;i<bannerLis.length;i++){
            bannerLis[i].style.zIndex='5';

        }
        if (num==bannerLis.length-1){
            num=0;
        }
        bannerLis[num].style.zIndex='9';
    }
    function lbt1() {
        for (let i=0;i<bannerLis.length;i++){
            bannerLis[i].style.zIndex='5';
        }
        if (num==0){
            num=bannerLis.length-1;
        }
        bannerLis[num].style.zIndex='9';
        num--;
    }
    let banner_left=document.getElementsByClassName('banner_left')[0];
    let banner_right=document.getElementsByClassName('banner_right')[0];
    banner_left.onclick=function () {
        lbt1();
    }
    banner_right.onclick=function () {
        lbt();
    }
    banner.onmouseenter=function () {
        clearInterval(time);
    }
    banner.onmouseleave=function () {
        time=setInterval(lbt,1000);
    }*/

    let banner=document.querySelector('.banner');
    let list=document.querySelectorAll('.banner li');
    let btnS=document.querySelectorAll('.circle a');
    let banner_left=document.querySelector('.banner_left');
    let banner_right=document.querySelector('.banner_right');
    let now =0;
    let next=0;
    let width=parseInt(getComputedStyle(list[now],null).width);
    // let flag=true;
    // console.log(width);
    let t=setInterval(move,2000);

    function move() {
        next++;
        if (next==list.length){
            next=0;
        }
        //就绪
        list[next].style.left=width+'px';
        btnS[now].classList.remove('hot');
        //移动
        animate(list[now],{left:-width});
        animate(list[next],{left:0});
        btnS[next].classList.add('hot');
        now=next;
    }
    function move1() {
        next--;
        if (next==-1){
            next=list.length-1;
        }
        //就绪
        list[next].style.left=-width+'px';
        btnS[now].classList.remove('hot');
        //移动
        animate(list[now],{left:width});
        animate(list[next],{left:0});
        btnS[next].classList.add('hot');
        now=next;
    }



    banner_left.onclick=function () {
        move1();
        clearInterval(t);
        t=setInterval(move,2000);
    }
    banner_right.onclick=function () {
        move();
        clearInterval(t);
        t=setInterval(move,2000);
    }

    //鼠标移入停止运动
    banner.onmouseenter=function () {
        clearInterval(t);
    }
    banner.onmouseleave=function () {
        t=setInterval(move,2000);
    }



    //点点击跳转
    for (let i=0;i<btnS.length;i++){
        btnS[i].onclick=function () {
            if (i==now){
                return;
            }
            if (i<now){
                list[i].style.left=-width+'px';
                animate(list[i],{left:0});
                animate(list[now],{left:width});
                btnS[now].classList.remove('hot');
                btnS[i].classList.add('hot');
                next=now=i;
            }
            if (i>now){
                list[i].style.left=width+'px';
                animate(list[i],{left:0});
                animate(list[now],{left:-width});
                btnS[now].classList.remove('hot');
                btnS[i].classList.add('hot');
                next=now=i;
            }
        }
    }



//左侧楼层跳转      懒加载
    let floorArr=[];
    let boxLeft=document.querySelector('.box-left');
    let hot_commodity=document.querySelectorAll('.hot_commodity');
    let boxLeftBottom=document.querySelector('.box-left-bottom');
    let ngFooter=document.querySelector('.ng-footer');

    // 点击跳转顶部
    boxLeftBottom.onclick=function(){
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
    }

    //楼层跳转
    let boxLeftLis=document.querySelectorAll('.box-left li');
    // let boxLeftLisa=boxLeftLis.getElementsByTagName('a');




    window.onscroll=function () {
        let bh=document.body.scrollTop||document.documentElement.scrollTop;
        if (bh+innerHeight>=hot_commodity[0].offsetTop+50) {
            boxLeft.style.display='block';
        } else {
            boxLeft.style.display='none';
        }

        for (let i=0;i<boxLeftLis.length;i++){
            boxLeftLis[i].onclick=function () {
                animate(document.body,{scrollTop:hot_commodity[i].offsetTop});
                animate(document.documentElement,{scrollTop:hot_commodity[i].offsetTop});

            }
            if (hot_commodity[i].offsetTop <=bh+innerHeight && bh+innerHeight< hot_commodity[i].offsetTop+hot_commodity[i].offsetHeight){
                boxLeftLis[i].style.background='#f90';
                let a=boxLeftLis[i].querySelector('a');
                a.style.color='#fff';
            } else {
                boxLeftLis[i].style.background='';
                let a=boxLeftLis[i].querySelector('a');
                a.style.color='';
            }
        }
        if(ngFooter.offsetTop<=bh || hot_commodity[0].offsetTop-hot_commodity[0].offsetHeight >=bh) {
            boxLeft.style.display='none';
        } else{
            boxLeft.style.display='block';
        }



    }







}