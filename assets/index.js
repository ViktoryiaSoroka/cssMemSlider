    

function initApp() {
    const pangination = document.querySelector(".pangination");

    pangination.addEventListener('click', (event) => {
         initPangination(event); 
    });

function initPangination(event) {
    if (event.target.classList.contains('dot') && !event.target.classList.contains('selected')) {
        const activeDot = document.querySelector('.dot.selected');
        activeDot.classList.remove('selected');
        event.target.classList.add('selected');
    }  
}
};

initApp();
    