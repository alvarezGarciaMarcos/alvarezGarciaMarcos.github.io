"use strict"
let macDivs = document.querySelectorAll("pre");
let macArrayDivs = Array.prototype.slice.call(macDivs);

macArrayDivs.map(element => {
    //General button bar
    const buttonBar = document.createElement('div')
    buttonBar.classList.add('buttons-bar')
    
    //Buttons area
    const buttonsArea  =document.createElement('div')
    buttonsArea.classList.add('buttons-area')
    buttonBar.appendChild(buttonsArea)
    //Button
    const redButton = document.createElement('div')
    redButton.classList.add('mac-button', 'red')

    const yellowButton = document.createElement('div')
    yellowButton.classList.add('mac-button', 'yellow')

    const greenButton = document.createElement('div')
    greenButton.classList.add('mac-button', 'green')

    buttonsArea.appendChild(redButton)
    buttonsArea.appendChild(yellowButton)
    buttonsArea.appendChild(greenButton)
    
    
    element.prepend(buttonBar)
    console.log(buttonBar)
    
})
