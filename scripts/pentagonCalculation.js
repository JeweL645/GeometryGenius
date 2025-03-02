function pentagonArea(){
    const perimeterInput = document.getElementById('perimeter');
    const perimeterInputText = perimeterInput.value;
    const Perimeter = parseFloat(perimeterInputText);
    console.log(Perimeter);

    const baseInput = document.getElementById('base');
    const baseInputText = baseInput.value;
    const Base = parseFloat(baseInputText);
    console.log(Base);

    const area = 0.5*Perimeter*Base;

    const pentagonAreaSpan = document.getElementById('pentagonArea');
    pentagonAreaSpan.innerText = area;


}