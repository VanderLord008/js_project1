// https://quotes-react.netlify.app/
let quoteText =document.querySelector("#quote");
let quoteContainer =document.querySelector("#quote-container");
let quoteAuthor =document.querySelector(".quote-author");
let quoteMark=document.querySelector("#quote-marks")


console.log(quoteMark);
let loader=document.querySelector(".loader");


function loading(){
    loader.hidden=false;
    quoteContainer.hidden=true;

}
function complete(){
    loader.hidden=true;
    quoteContainer.hidden=false;

}


async function getQuote(){
    
    loading();
    let q1= await axios.get("https://type.fit/api/quotes");
    
    console.log(q1);
    
    let num=parseInt( Math.floor((Math.random()*q1.data.length)));

    quoteText.textContent=q1.data[num].text;
    quoteAuthor.textContent=q1.data[num].author;
    console.log(num);
    complete();
}



let reloadBtn =document.querySelector("#reload-button");

reloadBtn.addEventListener("click",function(evt)
{
    getQuote();
})
getQuote();