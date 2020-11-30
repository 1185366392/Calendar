/* 
    1,判断年份的平润
    2,判断每月的天数
*/
var tbody=document.getElementById("tbody");
var date=new Date();
var year=date.getFullYear();
var tyear=date.getFullYear();
var month=date.getMonth()+1;
var tmonth=date.getMonth()+1;
//拿来渲染显示今日日期
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
//界面刚加载出来时的渲染
riqgezi(year,month);
//点击事件控制页面上内容的显示
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
    riqgezi(year,month);
}
//根据月份打印内容
function riqgezi(year,month){
    let arrnum=[];
    for(let i=1;i<=daynumber(year,month);i++){
        arrnum[i]=i;
    }
    console.log(arrnum);
    let str='';
    let a=1;
    for(let i=0;i<5;i++){
        str+=`<tr>`;
        for(let j=0;j<7;j++){
            if(a>daynumber(year,month))
            break;
            str+=`<td class='${"a"+a}'>${arrnum[a]}</td>`;
            a++;
            if(j===6)
                str+='</tr>';
        }
    }
    tbody.innerHTML=str;
    if(year==tyear&&month==tmonth)
        document.querySelector('.a'+day).className='a today';
}