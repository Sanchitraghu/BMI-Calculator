function getBmi(){
    let h=document.getElementById("inp1").value;
    let w=document.getElementById("inp2").value;

    let bmi=((w)/(h*h))*10000;

    document.getElementById("BMI").innerHTML=bmi.toFixed(1);

    if(bmi<18.5){
        document.getElementById("discription").innerHTML="You Are Under Weighted";
    }else if(bmi>18.5 && bmi<24.5){
  document.getElementById("discription").innerHTML="You Are Healthy";
}else if(bmi>24.5){
     document.getElementById("discription").innerHTML="You Are Over weighted";
    }
}