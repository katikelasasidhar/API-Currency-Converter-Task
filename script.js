var resultFrom;
var resultTo;
var searchvalue;
var search = document.querySelector(".searchBox");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var convert = document.querySelector(".convert");




fromCurrecy.addEventListener('change',(event)=>{
    resultFrom=event.target.value

})
toCurrecy.addEventListener('change',(event)=>{
    resultTo=event.target.value
})
search.addEventListener('input',update)
function update(event){
searchvalue=event.target.value
}
convert.addEventListener('click',getResults)
async function getResults(){
    try{
    let data=await fetch(` https://v6.exchangerate-api.com/v6/01777bfc1367fa73232384ab/pair/${resultFrom}/${resultTo}/${searchvalue}`);
    let data2=await data.json();
    displayResults(data2)

    }
    catch(e){
        console.log(`something went wrong:${e}`)

    }
}
function displayResults(results){
    document.getElementsByClassName("finalValue")[0].innerHTML=results.conversion_result;

}
function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
};