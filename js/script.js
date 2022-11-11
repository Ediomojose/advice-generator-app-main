// ------------------QUERY SELECTORS--------------------//
const generateBtn = document.querySelector('.generateBtn');
const textArea = document.querySelector('.textArea');
const adviseId = document.querySelector('.adviseId');


// ---------------FETCH ADVISE API --------------//
const api_url = 'https://api.adviceslip.com/advice'

generateBtn.addEventListener('click', generateAdvise);

function generateAdvise(){
    fetch(api_url)
    .then((response)=>response.json())
    .then((json)=>{
        textArea.innerText = json.slip.advice
        adviseId.innerText = json.slip.id
    })
    .catch(()=>alert('Site is busy'));
}