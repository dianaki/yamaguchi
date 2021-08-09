'use strict';

const btnUp = document.querySelector('.button--up');
const btnDown = document.querySelector('.button--down');
const tableTop = document.querySelector('.table__img--top');

const girl = document.querySelector('.interactive__girl');
const portal = document.querySelector('.interactive__portal');

btnDown.addEventListener('click', () => {
    gsap.to(tableTop, {
        duration: 1,
        x: -3,
        y: '35%'
    });
    btnUp.removeAttribute('disabled');
    btnDown.setAttribute('disabled', true);
});

btnUp.addEventListener('click', () => {
    gsap.to(tableTop, {
        duration: 1,
        x: -3,
        y: 15
    });
    btnDown.removeAttribute('disabled');
    btnUp.setAttribute('disabled', true);
});

const girlAppears = () => {
    gsap.to(girl, {
        duration: 2,
        scale: 1,
        y: '110%',
    })
}

const girlAnimation = () => {
    gsap.timeline({
    repeat: -1,
    defaults: {
        duration: 2
        }
    }) 
    .to(girl, {
        x: 0,
        y: -20,
        z: 0
    })
    .to(girl, {
        x: 0,
        y: 0,
        z: 0
    })
    .to(girl, {
        x: 20,
        y: -20,
        z: -20
    })
    .to(girl, {
        x: 0,
        y: 0,
        z: 0
    })
    .to(girl, {
        x: 0, 
        y: -20,
        z: 0
    })
    .to(girl, {
        x: 0,
        y: 0,
        z: 0
    })
    .to(girl, {
        x: -20,
        y: -20,
        z: 20,
    })
    .to(girl, {
        x: 0, 
        y: 0,
        z: 0,
    });
}

const portalAnimation = () => {
    gsap.timeline({
        defaults: {
            duration: 2,
        }
    })
    .to(portal, {
        scale: 1.5
    })
    .to(portal, {
        scale: 1
    })
}

girlAppears();
girlAnimation();
portalAnimation();
