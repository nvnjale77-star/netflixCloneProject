let emailInputData = document.querySelector('.emailInput');
let placeHolderInputData = document.querySelector('.placeHolderInput');


function runningFirstFunction() {

    placeHolderInputData.style.top = -13 + "px"
    placeHolderInputData.style.scale = .8
    placeHolderInputData.style.left = -9 + "px"

}

function runnigsecondFunction() {

    placeHolderInputData.style.top = 0 + "px"
    placeHolderInputData.style.scale = 1
    placeHolderInputData.style.left = 0 + "px"

}

emailInputData.addEventListener('focus', runningFirstFunction)

emailInputData.addEventListener('blur', runnigsecondFunction)






let clickSliderBtn = document.querySelector('.clickSlider');
let showHideSlider = document.querySelector('.showHideSlider');

function showAndHideFunction(){
  
  showHideSlider.classList.toggle('show')
    
}


clickSliderBtn.addEventListener('click', showAndHideFunction)

