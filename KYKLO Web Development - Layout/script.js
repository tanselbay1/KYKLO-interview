//Add event listener to button at the end.

window.onload = function(){
    document.getElementById("weLoveExcel").addEventListener( 'click', changeClass);
}

function changeClass(){
    document.querySelector("div.header").classList.add('redBackground');
    document.querySelector("div.header").innerHTML = "<h1>We Love Excel</h1>";
}
