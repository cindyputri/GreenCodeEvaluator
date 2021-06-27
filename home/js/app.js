'use strict'
let tabs         = document.querySelectorAll('.tabs')
let options      = document.querySelectorAll('.tabset_content')


tabs.forEach((oneTabs, i) => {
    tabs[i].addEventListener('click', () => {
        tabs.forEach((oneTabs, i) =>{
            tabs[i].classList.remove('selected')
        })
        tabs[i].classList.add('selected')
    })
})

let uri          = document.querySelector('#validate-by-uri')
let upload       = document.querySelector('#validate-by-upload')
let directInput  = document.querySelector('#validate-by-input')

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

let icon    = document.querySelector('.fa-arrow-down');
let ul      = document.querySelector('.ul');

icon.addEventListener ('click', () =>{
    ul.classList.toggle('ver');
})
