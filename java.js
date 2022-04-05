function clic(){
    
    const casillas = document.querySelectorAll('.numero');

    for (const casilla  of casillas) {
        casilla.addEventListener('click', () => {
            casilla.classList.toggle('active');
        })
    }
}