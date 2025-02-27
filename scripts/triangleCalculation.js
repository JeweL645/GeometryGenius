// console.log('triangleCalculation js file');

function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangleBase');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(base);
    const triangleHeightInput = document.getElementById('triangleHeight');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // console.log(height);
    const Area = 0.5*height*base;
    // console.log('Area is: ', Area);

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangleArea');
    triangleAreaSpan.innerText = Area;

}