/* 
    1,判断年份的平润
    2,判断每月的天数
*/
var tbody=document.getElementById("tbody");
var date=new Date();
var year=date.getFullYear();
var month=date.getMonth()+1;
var day=date.getDate();
var toptext=document.getElementById("toptext");
toptext.innerHTML=year+' - '+month;
var isRunyear=(year)=>{
    return ((year%4==0&&year%100!=0)||year%400==0)
}
var daynumber=(year,month)=>{
    let arr=[
        31,null,31,
        30,31,30,
        31,31,30,
        31,30,31
    ]
    return arr[month-1]||(isRunyear(year)?29:28);
}
function dj(num){
    if(num==1){
        month++;
        if(month>12)
        {
            month=1;
            year++;
        }
        toptext.innerHTML=year+' - '+month;
    }else{
        month--;
        if(month<1){
            month=12;
            year--;
        }
        toptext.innerHTML=year+' - '+month;
    }
}
for(let i=1;i<=daynumber(year,month);i++){
    if(((i-1)%7==0&&i!=29)||i==28){
        var tr=document.createElement("tr");
        tbody.appendChild(tr);
    }
    let rq=document.createElement("td");
    let text=document.createTextNode(i);
    rq.appendChild(text);
    tr.appendChild(rq);
}