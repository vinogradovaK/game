function resultFunc(){

    result.value="Баллы: "+result.value+ " из 36";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result').style.display = "block";
    document.getElementById('reset').style.display = "block";
    document.getElementById('calc').style.display = "none";
    document.getElementById('fig_1').style = "background-image:url(img/ball.jpeg); opacity: 1;"
    document.getElementById('fig_2').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_3').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_4').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_5').style = "background-image:url(img/mirror.jpeg); opacity: 1;"
    document.getElementById('fig_6').style = "background-image:url(img/plate.jpeg); opacity: 1;"
    document.getElementById('fig_7').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_8').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_9').style = "background-image:url(img/wheel.jpeg); opacity: 1;"
    
}
function resetFunc(){
    document.getElementById('calc').style.display = "block";
    document.getElementById('result').style.display = "none";
    document.getElementById('kn_sl').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('fig_1').style = "background-image:url(img/ball.jpeg); opacity: 0.5;"
    document.getElementById('fig_2').style = "background-image:url(img/chess.jpeg); opacity: 0.5;"
    document.getElementById('fig_3').style = "background-image:url(img/cube.jpeg); opacity: 0.5;"
    document.getElementById('fig_4').style = "background-image:url(img/gift.jpeg); opacity: 0.5;"
    document.getElementById('fig_5').style = "background-image:url(img/mirror.jpeg); opacity: 0.5;"
    document.getElementById('fig_6').style = "background-image:url(img/plate.jpeg); opacity: 0.5;"
    document.getElementById('fig_7').style = "background-image:url(img/pyramid.jpeg); opacity: 0.5;"
    document.getElementById('fig_8').style = "background-image:url(img/ruler.jpeg); opacity: 0.5;"
    document.getElementById('fig_9').style = "background-image:url(img/wheel.jpeg); opacity: 0.5;"
}



function changeOpacity1() {
            if ((fig_1.style.opacity!="0.4")&&(fig_1.style.opacity!="1")){
            fig_1.style.opacity="1";
     result.value=roundPlus(parseFloat(result.value,10)+9.0,1);}
}
function changeOpacity2() {
                 if ((fig_2.style.opacity!="0.4")&&(fig_2.style.opacity!="1")){
            fig_2.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-7.2,1);}
}
function changeOpacity3() {
                 if ((fig_3.style.opacity!="0.4")&&(fig_3.style.opacity!="1")){
            fig_3.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-7.2,1);}
}
function changeOpacity4() {
                  if ((fig_4.style.opacity!="0.4")&&(fig_4.style.opacity!="1")){
            fig_4.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-7.2,1);}
}
function changeOpacity5() {
                 if ((fig_5.style.opacity!="0.4")&&(fig_5.style.opacity!="1")){
            fig_5.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+9.0,1);}
}
function changeOpacity6() {
                if ((fig_6.style.opacity!="0.4")&&(fig_6.style.opacity!="1")){
            fig_6.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+9.0,1);}
}
function changeOpacity7() {
                  if ((fig_7.style.opacity!="0.4")&&(fig_7.style.opacity!="1")){
            fig_7.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-7.2,1);}
}
function changeOpacity8() {
                 if ((fig_8.style.opacity!="0.4")&&(fig_8.style.opacity!="1")){
            fig_8.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-7.2,1);}
}
function changeOpacity9() {
                 if ((fig_9.style.opacity!="0.4")&&(fig_9.style.opacity!="1")){
            fig_9.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+9.0,1);}
}
                
            function roundPlus(x, n) { 

  if(isNaN(x) || isNaN(n)) return false;
  var m = Math.pow(10,n);
  return Math.round(x*m)/m;

}    