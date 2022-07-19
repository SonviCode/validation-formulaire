const inputUtilisateur = document.querySelector('.form-groupe:nth-child(1) input');
const inputMail = document.querySelector('.form-groupe:nth-child(2) input');
const inputMdp = document.querySelector('.form-groupe:nth-child(3) input');
const inputConfirme = document.querySelector('.form-groupe:nth-child(4) input');
const allImg = document.querySelectorAll('.icone-verif');
const allSpan = document.querySelectorAll('span');
const allLigne = document.querySelectorAll('.ligne div');
let valeurInput;

// --------------- INPUT NAME --------------------
inputUtilisateur.addEventListener('input', (e) => {

    const regexNom = /^[a-z0-9]+$/i;

    if(e.target.value.length >= 5 && e.target.value.search(regexNom) === 0){
        allImg[0].style.display = "inline";
        allImg[0].src = "ressources/check.svg";
        allSpan[0].style.display = "none";
    }
    else {
        allImg[0].style.display = "inline";
        allImg[0].src = "ressources/error.svg";
        allSpan[0].style.display = "inline";
    }
})


// --------------- INPUT MAIL --------------------
inputMail.addEventListener('input', (e) => {

    const regexMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(e.target.value.search(regexMail) === 0){
        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/check.svg";
        allSpan[1].style.display = "none";
    }
    else {
        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/error.svg";
        allSpan[1].style.display = "inline";
    }
})


// --------------- INPUT PASSWORD --------------------
inputMdp.addEventListener('input', (e) => {

    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{5,}$/;

    valeurInput = e.target.value;

    if(valeurInput.search(regexPassword) === 0){
        allImg[2].style.display = "inline";
        allImg[2].src = "ressources/check.svg";
        allSpan[2].style.display = "none";
    }
    else {
        allImg[2].style.display = "inline";
        allImg[2].src = "ressources/error.svg";
        allSpan[2].style.display = "inline";
    }

    // Taille mdp pour force mdp
    if(valeurInput.length <= 6 && valeurInput.length > 0){
        console.log('coucou');
        allLigne[0].style.opacity = '1';
        allLigne[1].style.opacity = '0';
        allLigne[2].style.opacity = '0';
    } 
    else if(valeurInput.length > 6 && valeurInput.length <= 9){
        allLigne[0].style.opacity = '1';
        allLigne[1].style.opacity = '1';
        allLigne[2].style.opacity = '0';
    }
    else if(valeurInput.length > 9){
        allLigne[0].style.opacity = '1';
        allLigne[1].style.opacity = '1';
        allLigne[2].style.opacity = '1';
    }
    else if(valeurInput.length === 0){
        allLigne[0].style.opacity = '0';
        allLigne[1].style.opacity = '0';
        allLigne[2].style.opacity = '0';
    }
})

// CONFIRMATION

inputConfirme.addEventListener('input', (e) => {

    if(e.target.value.length === 0){
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/error.svg";
    }
    else if(e.target.value === valeurInput){
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/check.svg";
    } else {
        allImg[3].src = "ressources/error.svg";
    }

})