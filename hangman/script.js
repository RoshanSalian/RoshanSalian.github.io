const wordEl = document.getElementById('word');
const wrongLetterEl = document.getElementById('wrong-letters');
const plyAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figurePart = document.querySelectorAll('.figure-part');

const words = ['application', 'programmer', 'engineering', 'technology', 'developer'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

console.log(selectedWord);

const correctLetters = [];
const wrongLetters = [];

function displayWord(){
    wordEl.innerHTML = `${selectedWord.split('')
    .map( letter => `<span class="letters">${correctLetters.includes(letter)?letter:''}</span>`).join('')
    }`;

    const innerWord = wordEl.innerText.replace(/\n/g, '');

    if(innerWord == selectedWord){
        finalMessage.innerText = 'Congratulations! You won';
        popup.style.display='flex';
    }
}
displayWord();

function updateWrongLetterEl(){
    //DAFAQ is this
    console.log('Update Wrong');
    wrongLetterEl.innerText = "asd";
    wrongLetterEl.innerHTML = `
    ${wrongLetters.length > 0 ? `<p>Wrong</p>` : ''}
    ${wrongLetters.map(letter=> `<span>${letter}</span>`)}
    `;

    figurePart.forEach((part, index) => {
        const errors = wrongLetters.length;

        if(index<errors){
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });

    if(wrongLetters.length === figurePart.length){
        finalMessage.innerText = 'Unfortunalty you lost';
        popup.style.display = 'flex';
    }
}

function showNotification(){
    notification.classList.add('show');

    setTimeout( ()=>{
        notification.classList.remove('show');
    }, 2000 );
}

window.addEventListener('keydown', e => {
    const regex = /^[a-zA-Z]+$/;
    
    if(regex.test(e.key)){
        const letter = e.key;
        
        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);

                displayWord();
            } else{
                showNotification();
            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);

                updateWrongLetterEl();
            }else{
                showNotification();
            }
        }

    }
})


plyAgainBtn.addEventListener('click', ()=>{
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() *  words.length)];

    displayWord();

    updateWrongLetterEl();

    popup.style.display = 'none';
});

