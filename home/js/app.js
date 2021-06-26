'use strict'
let validated    = document.querySelectorAll('.validate')
let uri          = document.querySelector('#validate-by-uri')
let upload       = document.querySelector('#validate-by-upload')
let directInput  = document.querySelector('#validate-by-input')

validated.forEach((oneValidate, i) => {
    oneValidate.addEventListener('click', () => {
        oneValidate.classList.toggle('selected')        
    })
})

function linkfunctionUri() {
    window.location.href="#validate-by-uri";
    uri.style.display = 'block'
    upload.style.display = 'none'
    directInput.style.display = 'none'

}
function linkfunctionUpload() {
    window.location.href="#validate-by-upload";
    uri.style.display = 'none'
    upload.style.display = 'block'
    directInput.style.display = 'none'

}
function linkfunctionInput() {
    window.location.href="#validate-by-iput";
    uri.style.display = 'none'
    upload.style.display = 'none'
    directInput.style.display = 'block'
}
