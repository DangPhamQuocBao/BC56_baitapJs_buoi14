//baitap1
function sapXep(){
var number1=document.getElementById('num1').value*1
var number2=document.getElementById('num2').value*1
var number3=document.getElementById('num3').value*1
if (number1 <= number2 && number1 <= number3) {
  if (number2 <= number3) {
    var sapXepSo = number1 + ", " + number2 + ", " + number3;
  } else {
    var sapXepSo = number1 + ", " + number3 + ", " + number2;
  }
} else if (number2 <= number1 && number2 <= number3) {
  if (number1 <= number3) {
    var sapXepSo = number2 + ", " + number1 + ", " + number3;
  } else {
    var sapXepSo = number2 + ", " + number3 + ", " + number1;
  }
} else {
  if (number1 <= number2) {
    var sapXepSo = number3 + ", " + number1 + ", " + number2;
  } else {
    var sapXepSo = number3 + ", " + number2 + ", " + number1;
  }
}
document.querySelector('#ketQuaSapXep').innerHTML=` 
<h2>${sapXepSo}</h2>
`
}

//baitap2
function chaoHoi(){
var nguoiSuDung = document.getElementById('sel1').value
console.log(nguoiSuDung)
var chaoHoiNguoiDung=""
if (nguoiSuDung==="Bố"){
chaoHoiNguoiDung="Xin chào Bố"
}else if(nguoiSuDung==="Mẹ"){
  chaoHoiNguoiDung="Xin chào Mẹ"
}else if(nguoiSuDung==="Anh trai"){
  chaoHoiNguoiDung="Xin chào Anh trai"
}else if (nguoiSuDung==="Em gái"){
  chaoHoiNguoiDung="Xin chào Em gái"
}
document.querySelector('#chaoHoiNguoiDung').innerHTML= `<h2>${chaoHoiNguoiDung}</h2>`

}
//baitap3
function demSo(){
    var num1 = document.getElementById('so1').value*1
    var num2 = document.getElementById('so2').value*1
    var num3 = document.getElementById('so3').value*1
    var soChan = 0;
    var soLe = 0;
    
    // Kiểm tra số chẵn và số lẻ
    if (num1 % 2 === 0) {
      
      soChan++;
    } else {
      
      soLe++;
    }
    
    if (num2 % 2 === 0) {
      
      soChan++;
    } else {
  
      soLe++;
    }
    
    if (num3 % 2 === 0) {
   
      soChan++;
    } else {
  
      soLe++;
    }
    
    document.querySelector('#ketQuaDemSo').innerHTML=`<h2>
    tổng số chẵn là : ${soChan}
    </h2>
    <h2>
    tổng số lẻ là : ${soLe}
    </h2>
    `
}
//baitap4
function tamGiac(){
  var canh1 = document.getElementById('canh1').value*1
  var canh2 = document.getElementById('canh2').value*1
  var canh3 = document.getElementById('canh3').value*1
  var loaiTamGiac = ""
  if( canh1==2 && canh2==2 && canh3==1){
loaiTamGiac=" Đây là tam giác cân"
  }else if(canh1==3 && canh2==3 && canh3==3){
    loaiTamGiac="Đây là tâm giác đều"
  }else if(canh1==3 && canh2==4 && canh3==5){
    loaiTamGiac="Đây là tam giác vuông (Định lý Pytago)"
  }else(
    loaiTamGiac="Đây là tam giác thường"
  )
  document.querySelector('#ketQuaTamGiac').innerHTML=`<h2>${loaiTamGiac}</h2>`
}