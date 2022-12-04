const resultElement = document.getElementById('result')

const currentDate = new Date()

const birthdate = '05/07/1997';

const birthDate = new Date(birthdate)

const ageInMilliseconds = currentDate - birthDate

let ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000)

setInterval(() => {
    ageInYears += 1 / (365 * 24 * 60 * 60)
    // console.log(ageInYears.toFixed(10))
    resultElement.innerHTML = ageInYears.toFixed(10)
}, 100)


$('.carousel').carousel({
    interval: 200
});


// Carousel start

//Carousel end
