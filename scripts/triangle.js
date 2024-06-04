function calculateTriangleArea(){
    const triangleBaseInput =document.getElementById('triangle-base')
    const triangleBaseText =triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    //console.log( base)
    const triangleHeightInput =document.getElementById('triangle-hight');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    //console.log( height)
    
    const area = 0.5 * base * height;
    console.log(area)
    const triangleArea =document.getElementById('triangle-area');
    triangleArea.innerText = area;
    
}