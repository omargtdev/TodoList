
function showBorderEmpty(title, description, inpuTitle, inputDescription){
    if(title === '' && description === ''){
        inpuTitle.className = 'empty-input'
        inputDescription.className = 'empty-input'
    }else if(title === ''){
        inpuTitle.className = 'empty-input'
    }else{
        inputDescription.className = 'empty-input'
    }
}

export function validateInputs(inputTitle, inputDescription){
    const title = inputTitle.value.trim();
    const description = inputDescription.value.trim();
    
        if(title !== '' && description !== ''){
            return { title, description }
        }else{
            showBorderEmpty(
                title, 
                description, 
                inputTitle, 
                inputDescription
            );
            return null;
        }
}

export function toogleMenuButton(state){
    const button = document.getElementById('btn-toogle-menu');
    button.onclick = () => {
        const menu = document.getElementsByClassName('navbar-content')[0];
        if(!state){
            menu.classList.add('show');
            state = true;
        }else{
            menu.classList.remove('show');
            state = false;
        }
    }
}