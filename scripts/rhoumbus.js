function rhombusCalculationArea() {
    const rhombusD1Input = document.getElementById('rhombusD1');
    const rhombusD1InputText = rhombusD1Input.value;
    const rhombusD1 = parseFloat(rhombusD1InputText);
    console.log(rhombusD1);

    const rhombusD2Input = document.getElementById('rhombusD2');
    const rhombusD2InputText = rhombusD2Input.value;
    const rhombusD2 = parseFloat(rhombusD2InputText);
    console.log(rhombusD2);

    const area = 0.5*rhombusD1*rhombusD2;

    const rhombusAreaSpan = document.getElementById('rhombusArea');
    rhombusAreaSpan.innerText = area;





}