const button = document.querySelector('button');

button.style.backgroundColor = 'black'
button.style.color = 'white'
button.style.cursor = 'pointer'



let color = "white";

button.addEventListener('click', () => {
    if (color === 'white') {
        
        document.body.style.backgroundColor = 'black';
        button.style.backgroundColor = 'white';
        button.style.color = 'black'
        button.textContent = 'Day'
        color = 'black';
    } 
    else {
        document.body.style.backgroundColor = 'white';
        button.style.backgroundColor = 'black';
        button.style.color = 'white'
        button.textContent = 'Night'
        color = 'white';
    }
    })
    