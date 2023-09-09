//share functionality
function getInputValue(field) {
    const inputField = document.getElementById(field);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;

}
function addToLog( areaType , area){
   console.log(areaType+" "+area);
   const htmlText = document.getElementById('add-Log')
   const count =  htmlText.childElementCount;
   const p= document.createElement('p');
   p.classList.add('ml-4')
   p.classList.add('text-center');
   p.classList.add('mt-10')
   p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-primary ml-5">Convert</button>`;
   htmlText.appendChild(p);

 }



 //main function

 function  calcTriangle(){
   const wide = getInputValue('triangle-wide')
  
  const hight=  getInputValue('triangle-hight')
  
const area = 0.5*wide*hight;
setElementInnerText('triangle-area' , area);
addToLog('Triangle' , area)
 }
 
 function calcRectangle(){
    const wide = getInputValue('rectangle-wide');
    const length = getInputValue('rectangle-length') ;
      const area =  wide*length;
       setElementInnerText('rectangle-area', area);
       addToLog('Rectangle' , area)
 }
 
 function calcParallelogram(){
    const wide = getInputValue('parallelogram-wide');
    const hight = getInputValue('parallelogram-hight') ;
      const area =  wide*hight;
       setElementInnerText('parallelogram-area', area);
       addToLog('Parallelogram' , area)
 }
function calcRhombus(){
    const hand1= getInputValue('rhombus-bahu1')
    const hand2= getInputValue('rhombus-bahu2')
    const area = 0.5 * hand1* hand2;
    setElementInnerText('rhombus-area', area);
    addToLog('Rhombus' , area);
}

 function calcPentagon(){
    const wide = getInputValue('pentagon-wide')
    const hight= getInputValue('pentagon-hight')
    const area =  0.5 * wide*hight;
    setElementInnerText('pentagon-area' , area);
    addToLog('Pentagon' , area)
 }   
 function calcEllipse(){
    const d = getInputValue('ellipse-a')
    const  u = getInputValue('ellipse-b')
    const area =  3.1416* d*u;
    setElementInnerText('ellipse-area' , area);
    addToLog('Ellipse' , area)
 }  
 
 