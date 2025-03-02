function calculateParallelogramArea(){
    const parallelogramBaseInput = document.getElementById('parallelogramBase');
    // console.log( parallelogramBaseInput);
    const parallelogramBaseText = parallelogramBaseInput.value;
    const Base = parseFloat(parallelogramBaseText);
    // console.log(Base);

    const parallelogramHeightInput = document.getElementById('parallelogramHeight');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const Height = parseFloat(parallelogramHeightText);
    // console.log(Height);

    const Area = Base*Height;

    const parallelogramAreaSpan = document.getElementById('parallelogramArea');
    parallelogramAreaSpan.innerText = Area;
}