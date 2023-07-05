// varibales
const button = document.querySelector('#btn');
const modal = document.querySelector('.modal');
const closeX = document.querySelector('.close');
const modalContent = document.querySelector('.modal-content')

// adding event listeners 
button.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = "block";
});

modal.addEventListener('click',closeModal);
closeX.addEventListener('click', closeModal);


// function
function closeModal(){
    modalContent.classList.add("slide-up");
    // adding setTimeout
    
    setTimeout(() => {
        modal.style.display = "none";
        modalContent.classList.remove("slide-up");
    },500);
}
    