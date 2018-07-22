window.onload=function () {

    //banner选项卡
    let allCommodity_list=document.getElementById("allCommodity_list");
    let lis=allCommodity_list.getElementsByTagName('li');
    // console.log(lis);

    let allCommodity_list_wrap=document.getElementsByClassName('allCommodity_list_wrap');
    // console.log(allCommodity_list_wrap);

    for (let i=0;i<lis.length;i++){

        for (let j=0;j<lis.length;j++){
            lis[j].onmouseenter=function () {
                allCommodity_list_wrap[j].style.display='block';
            }
            allCommodity_list_wrap[j].onmouseenter=function () {
                allCommodity_list_wrap[j].style.display='block';
            }
        }
        lis[i].onmouseleave=function () {
            allCommodity_list_wrap[i].style.display="none";
        }




    }




}