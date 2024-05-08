var s1=0;
var s2=0;

function begin(){
    document.getElementById("P01").hidden = false;
    document.getElementById("P02").hidden = true;
    document.getElementById("P03").hidden = true;
     
}

function reset(){
    
    s1=0;
    s2=0;
    document.getElementById("P01").hidden = false;
    document.getElementById("P02").hidden = true;
    document.getElementById("P03").hidden = true;
    document.getElementById('result').textContent = "";
    document.getElementById('result2').textContent = "";
    
    
}

function Next(){
    document.getElementById("P01").hidden = true;
    document.getElementById("P02").hidden = false;
    document.getElementById("P03").hidden = true;

}

function Prev(){
    document.getElementById("P01").hidden = false;
    document.getElementById("P02").hidden = true;
    document.getElementById("P03").hidden = true;
}

function Prev02(){
    document.getElementById("P01").hidden = true;
    document.getElementById("P02").hidden = false;
    document.getElementById("P03").hidden = true;
}


function checkAnswer01(answer) {
   const result = document.getElementById('result');
   if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        s1=1;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
        s1=0;
    }
}

function checkAnswer02(answer2){
    const result2 = document.getElementById('result2');
    if (answer2 === 'c'){
        result2.textContent = "ถูกต้อง วิทยาลัยอาชีวศึกษากาฬสินธุ์ ตั้งอยู่ที่ จังหวัดกาฬสินธุ์";
        result2.style.color = 'green';
        s2=1;
    } else {
        result2.textContent = "Incorrect! Try again.";
        result2.style.color = 'red';
        s2=0;
    }
 }


function summary(){
    
    document.getElementById("P01").hidden = true;
    document.getElementById("P02").hidden = true;
    document.getElementById("P03").hidden = false;
    const result3 = document.getElementById('result3');
    result3.textContent = "คุณได้ "+(s1+s2)+" คะแนน จากคะแนนเต็ม 2 คะแนน";
    result3.style.color = 'blue';

}