
/*btn.onmouseout=function()
{
    btn.style.color="";
    btn.backgroundColor="";
}*/
let btn1 = document.getElementById('mayus');
btn1.onclick = function()
{
    document.getElementById('parrafo').innerHTML=document.getElementById('parrafo').innerHTML.toUpperCase();
}
let btn2 = document.getElementById('minus');
btn2.onclick = function()
{
    document.getElementById('parrafo').innerHTML=document.getElementById('parrafo').innerHTML.toLowerCase();
}