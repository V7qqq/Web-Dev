const input_text = document.getElementById('input_text');
const button_add = document.getElementById('button_add');
const task = document.getElementById('task')


function add_element(event) {
    const text = input_text.value;
    if (text === '') {
        alert('please, write something');
        return;
    }

    const li = document.createElement('li');
    const bin = document.createElement('button');
    const title = document.createElement('span');
    const button = document.createElement('input');

    

    button.type = 'checkbox';
    button.addEventListener('change',(e) => {
        if (e.target.checked){
        title.style.textDecoration = 'line-through';
    } else{
        title.style.textDecoration = 'none';
    }
    });

bin.onclick = () => li.remove();
bin.innerHTML = '&#128465';

title.textContent = input_text.value;
li.className = 'class_li';
bin.className = 'class_bin';
title.className = 'class_title';
button.className = 'class_button';


li.append(button, title, bin);
task.appendChild(li);

input_text.value = '';
}
button_add.addEventListener('click', add_element);