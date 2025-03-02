function ellipseCalculation(){
    const aAxisInput = document.getElementById('aAxis');
    const aAxisInputText = aAxisInput.value;
    const aAxis = parseFloat(aAxisInputText);
    console.log(aAxis);

    const bAxisInput = document.getElementById('bAxis');
    const bAxisInputText = bAxisInput.value;
    const bAxis = parseFloat(bAxisInputText);
    console.log(bAxis);

    const area = 3.14158 * aAxis * bAxis;

    const ellipseAreaSpan = document.getElementById('ellipseArea');
    ellipseAreaSpan.innerText = area;
}