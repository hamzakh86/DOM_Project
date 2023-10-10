let addButtons = Array.from(document.querySelectorAll("#add-button"));
let minusButtons = Array.from(document.querySelectorAll("#minus-button"));
let quantitys = Array.from(document.querySelectorAll("#quantity"));
let prices = Array.from(document.querySelectorAll("#price"));
let deletes = Array.from(document.querySelectorAll("#delete"));
let parents = Array.from(document.querySelectorAll("#parent"));
let hearts = Array.from(document.querySelectorAll("#heart"));




let arrOfQuantitys = [];
let arrOfPrices = [];
for(let i in quantitys){
    arrOfQuantitys[i] = 1 ;
}
for(let i in prices ){
    arrOfPrices[i] = +prices[i].innerHTML;
}

function updateTotal(){
    let total = 0 ;
    for(let i in quantitys)
    total += arrOfPrices[i]*arrOfQuantitys[i];

    document.getElementById('totale-price').textContent=`TOTALE PRICE : ${total} $`;
}
updateTotal();


//PLUS_BUTTON
for(let i in addButtons){
    addButtons[i].addEventListener("click",function(){
        arrOfQuantitys[i]++;
        quantitys[i].innerHTML = arrOfQuantitys[i];
        updateTotal();
    });
}

//MINUS_BUTTON
for(let i in minusButtons){
    minusButtons[i].addEventListener("click",function(){
        if(arrOfQuantitys[i] > 1){
            arrOfQuantitys[i]--;
            quantitys[i].innerHTML = arrOfQuantitys[i];
            updateTotal();
        }
    });
}

//DELETE_BUTTON
for(let i in deletes){
    deletes[i].addEventListener("click",function(){
        arrOfQuantitys[i] = 0;
        updateTotal();
        parents[i].remove();
    });
}


//HEART_BUTTON
for(let i in hearts){
    hearts[i].addEventListener("click",function(){
        if(hearts[i].getAttribute('src') == "https://www.pngmart.com/files/21/Instagram-PNG-Transparent-Image.png")
        hearts[i].setAttribute('src','https://www.nicepng.com/png/full/778-7786050_download-instagram-like-icon-png.png');
        else
        hearts[i].setAttribute('src','https://www.pngmart.com/files/21/Instagram-PNG-Transparent-Image.png');
    });
}