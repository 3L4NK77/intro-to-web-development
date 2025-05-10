function changeBackgroundColor(color){
    let section = document.getElementById('coding-journey');
    section.style.backgroundColor = color;
}

document.getElementById('intro').addEventListener('click', () => changeBackgroundColor("#8ba7b2"));
document.getElementById('react').addEventListener('click', () => changeBackgroundColor("#028da4"));
document.getElementById('backend').addEventListener('click', () => changeBackgroundColor("#9467BD"));