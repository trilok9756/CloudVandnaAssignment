const surveyForm = document.querySelector('.survey-form');
// const submitForm = document.querySelector('#submit');
const formEntries = document.querySelectorAll('input:not([type="reset"],[type="submit"])');

surveyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    for(let entry of formEntries) {
        console.log(entry.value);
    }
    
})
