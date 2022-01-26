function resultFunc(){

    result.value="Баллы: "+result.value+ " из 22";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result').style.display = "block";
    document.getElementById('reset').style.display = "block";
    
    document.getElementById('fig_1').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_2').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_3').style = "background-image:url(img/1_green.png); background-size: 84%; opacity: 1;"
    document.getElementById('fig_4').style = "background-color: transparent; opacity: 0.4;"
    
}
function resetFunc(){
    
    document.getElementById('result').style.display = "none";
    document.getElementById('kn_sl').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('fig_1').style = "background-image:url(img/7_purple.png); background-size: 105%; opacity: 0.5;"
    document.getElementById('fig_2').style = "background-image:url(img/8_black.png); background-size: 99%; opacity: 0.5;"
    document.getElementById('fig_3').style = "background-image:url(img/1_green.png); background-size: 84%; opacity: 0.5;"
    document.getElementById('fig_4').style = "background-image:url(img/9_orange.png); background-size: 102%; opacity: 0.5;"
}

function changeOpacity1() {
            if ((fig_1.style.opacity!="0.4")&&(fig_1.style.opacity!="1")){
            fig_1.style.opacity="1";
    result.value=roundPlus(parseFloat(result.value,10)-22.0,1);
            resultFunc();}
}
function changeOpacity2() {
                 if ((fig_2.style.opacity!="0.4")&&(fig_2.style.opacity!="1")){
            fig_2.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-22.0,1);
              resultFunc();}
}
function changeOpacity3() {
                 if ((fig_3.style.opacity!="0.4")&&(fig_3.style.opacity!="1")){
            fig_3.style.opacity="1";
result.value=roundPlus(parseFloat(result.value,10)+22.0,1);
               resultFunc();}
}
function changeOpacity4() {
                  if ((fig_4.style.opacity!="0.4")&&(fig_4.style.opacity!="1")){
            fig_4.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-22.0,1);
                 resultFunc();}
}
                
            function roundPlus(x, n) { 

  if(isNaN(x) || isNaN(n)) return false;
  var m = Math.pow(10,n);
  return Math.round(x*m)/m;

}    