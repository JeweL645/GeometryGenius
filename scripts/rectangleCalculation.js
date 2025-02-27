function calculateRectangleArea(){
    const rectangleWidthInput = document.getElementById('rectangleWidth');
    // console.log(rectangleWidthInput);
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    // console.log(width);

    const rectangleLengthInput = document.getElementById('rectangleLength');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    // console.log(length);

    const area = width*length;

    const rectangleAreaSpan = document.getElementById('rectangleArea');
    rectangleAreaSpan.innerText = area;

}