/*
addEventListener

1. 'beforbegin' - before the element itself
2. 'afterbegin' - just inside the element, before its first child
3. 'beforeend' - just inside the element, after its last child
4. 'afterend' - after the element itself

callback funtion
event.target
parentNode
*/

const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');
const taskList = document.querySelector ('.list-container ul');
const listItems = taskList.children;


function attachRemoveButton (li) {
    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove);
}

for (let i=0; i < listItems.length; i++) {
    attachRemoveButton(listItems[i]);
}

taskList.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
        const button = event.target;
        const li = button.parentNode;
        li.remove();
       
    }
    
})



btnCreate.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    const input = document.querySelector('.input-main');
    let li = document.createElement('li');
    li.textContent = input.value;
    attachRemoveButton(li);
    ul.appendChild(li);
    input.value='';

});

// btnCreate.addEventListener('click', () => {
//     const input = document.querySelector('.input-main');
//     const list = document.querySelector('ul');
   
//     list.insertAdjacentHTML(
//         'afterbegin',
//         `<li>${input.value}</li>`
//     );
//     input.value = '';

// });

btnToggle.addEventListener('click', () => {
    const listContainer = document.querySelector('.list-container');

    if (listContainer.style.display === 'none') {
        btnToggle.textContent = 'Hide List';
        listContainer.style.display = 'block';
    } else {
        btnToggle.textContent = 'Show List';
        listContainer.style.display = 'none';
    }

});

// btnRemove.addEventListener('click', () => {
//     const lastItem = document.querySelector('li:last-child');
//     lastItem.remove();
// });

