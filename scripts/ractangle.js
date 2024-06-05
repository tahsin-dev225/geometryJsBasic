function calRectAr(){
    const width = widthRect('rect-width')
    const lenght =widthRect('rect-lenght')
    //console.log(width ,lenght)
    const area =width*lenght;
    const rectArea =outputPera('rect-area')
    rectArea.innerText = area;
}

//'rect-width'
function widthRect(pr){
    const widthInput =document.getElementById(pr)
    const widthText =widthInput.value ;
    const width = parseFloat(widthText)
    //console.log(typeof width)
    /* const lengthInput =document.getElementById('rect-lenght')
    const lengthText =lengthInput.value ;
    const length = parseFloat(lengthText)
    //console.log(length)
    const area = width * length;
    const rectArea =document.getElementById('rect-area');
    rectArea.innerText = area; */

    return width;
}
function lenghtRect(pr){
    const lengthInput =document.getElementById(pr)
    const lengthText =lengthInput.value ;
    const length = parseFloat(lengthText)
    return length;
}
function outputPera(pr){
    const rectArea =document.getElementById(pr);
    return rectArea;
}



function calPenAr(){
    const base = widthRect('pera-base')
    const height =lenghtRect('pera-height')
    //console.log(width ,lenght)
    const area =base * height;
    const rectArea =outputPera('pera-area')
    rectArea.innerText = area;
}

