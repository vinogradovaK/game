

function resultFunc(){

    result.value="Баллы: "+result.value+ " из 12";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result').style.display = "block";
    document.getElementById('reset').style.display = "block";
    document.getElementById('calc').style.display = "none";
    document.getElementById('fig_1').style = "background-color: #606060; opacity: 1;"
    document.getElementById('fig_2').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_3').style = "background-color: #feb386; opacity: 1;"
    document.getElementById('fig_4').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_5').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_6').style = "background-color: #606060; opacity: 1;"
    
}
function resetFunc(){
    document.getElementById('calc').style.display = "block";
    document.getElementById('result').style.display = "none";
    document.getElementById('kn_sl').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('fig_1').style = "background-color: #606060; opacity: 0.5;"
    document.getElementById('fig_2').style = "background-color: #feb386; opacity: 0.5;"
    document.getElementById('fig_3').style = "background-color: #feb386; opacity: 0.5;"
    document.getElementById('fig_4').style = "background-color: #2a4fb5; opacity: 0.5;"
    document.getElementById('fig_5').style = "background-color: #2a4fb5; opacity: 0.5;"
    document.getElementById('fig_6').style = "background-color: #606060; opacity: 0.5;"
    
}




function changeOpacity1() {
             if ((fig_1.style.opacity!="0.4")&&(fig_1.style.opacity!="1")){
            fig_1.style.opacity="1";
    result.value=roundPlus(parseFloat(result.value,10)+4.0,1);}
}
function changeOpacity2() {
            if ((fig_2.style.opacity!="0.4")&&(fig_2.style.opacity!="1")){
            fig_2.style.opacity="1";
result.value=roundPlus(parseFloat(result.value,10)-4.0,1);}
}
function changeOpacity3() {
             if ((fig_3.style.opacity!="0.4")&&(fig_3.style.opacity!="1")){
            fig_3.style.opacity="1";
result.value=roundPlus(parseFloat(result.value,10)+4.0,1);}
}
function changeOpacity4() {
             if ((fig_4.style.opacity!="0.4")&&(fig_4.style.opacity!="1")){
            fig_4.style.opacity="1";
result.value=roundPlus(parseFloat(result.value,10)-4.0,1);}
}
function changeOpacity5() {
            if ((fig_5.style.opacity!="0.4")&&(fig_5.style.opacity!="1")){
            fig_5.style.opacity="1";
result.value=roundPlus(parseFloat(result.value,10)-4.0,1);}
}
function changeOpacity6() {
            if ((fig_6.style.opacity!="0.4")&&(fig_6.style.opacity!="1")){
            fig_6.style.opacity="1";
result.value=roundPlus(parseFloat(result.value,10)+4.0,1);}
}

function roundPlus(x, n) { 

  if(isNaN(x) || isNaN(n)) return false;
  var m = Math.pow(10,n);
  return Math.round(x*m)/m;

}

                
                