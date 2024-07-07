let btn = document.querySelector(".arrow"),
links = document.querySelector("nav ul");

btn.addEventListener("click", () => {
links.classList.toggle("display");
})

total.value = 0;
html = () => {
document.getElementById("no1").innerHTML = "HTML : RS : 5000";
var x = parseInt(document.getElementById("html").value);
if (total.value === 0) {
    document.getElementById("total").value = x;
} else {
    document.getElementById("total").value = x + total.value;
}
}
css = () => {
document.getElementById('css').innerHTML = "CSS successfully added !!";
document.getElementById("no2").innerHTML = "CSS &nbsp&nbsp: RS : 5000";
var c = parseInt(document.getElementById("css1").value);
if (total.value === 0) {
    document.getElementById("total").value = c;
} else {
    document.getElementById("total").value = c + total.value;
}
}
js = () => {
document.getElementById('js').innerHTML = "Javascript successfully added !!";
document.getElementById("no3").innerHTML = "&nbsp&nbsp  JS &nbsp&nbsp:  RS : 10000";
var y = parseInt(document.getElementById("js1").value);
if (total.value === 0) {
    document.getElementById("total").value = y;
} else {
    document.getElementById("total").value = y + total.value;
}
}
python = () => {
document.getElementById('python1').innerHTML = "Python successfully added !!";
document.getElementById("no4").innerHTML = "PYTHON &nbsp&nbsp: 10000";
var a1 = parseInt(document.getElementById("python").value);
if (total.value === 0) {
    document.getElementById("total").value = a1;
} else {
    document.getElementById("total").value = a1 + total.value;
}
}
sql = () => {
document.getElementById('sql1').innerHTML = "SQL successfully added !!";
document.getElementById("no5").innerHTML = "SQL &nbsp&nbsp: RS : 10000";
var sql1 = parseInt(document.getElementById("sql").value);
if (total.value === 0) {
    document.getElementById("total").value = sql1;
} else {
    document.getElementById("total").value = sql1 + total.value;
}
}
fulltotal = () => {
var f = document.getElementById("total").value;
document.getElementById("ftotal").innerHTML = f;
}
cl = () => {
alert("After Clear the coures Please Refresh The page then continue.")
document.getElementById("ftotal").innerHTML = 0;

document.getElementById("no1").innerHTML = "";
document.getElementById("no2").innerHTML = "";
document.getElementById("no3").innerHTML = "";
document.getElementById("no4").innerHTML = "";
document.getElementById("no5").innerHTML = "";

}