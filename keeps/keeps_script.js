'use strict'

let new_keep = document.getElementById("new_keep")
let new_keep_btn = document.getElementById("new_keep_btn")
let keeps = document.getElementById("keeps")
let new_keep_1 = document.getElementById("new_keep_1")


new_keep.value = localStorage.getItem('input')
new_keep.oninput = save_input


function save_input(event) {
    console.log(event.target.value)
    localStorage.setItem('input', event.target.value)
}

let keeps_array = JSON.parse(localStorage.getItem('keeps')) || [];
render_keep();
if (keeps_array == []) {
    const no_notes = `
    <div class="width=100% height="150px">
        <p class='none'>Нет заметок</p>
    </div>
    `
    
}
function render_keep(value) {
    keeps.innerHTML = ''
    let i = 0 
    if (keeps_array.length == 0) {
        keeps.insertAdjacentHTML('afterbegin','<p>Нет заметок</p>')
    }
    else {
    for (let value of keeps_array){
    const keep_template = `
    <div class="col-12 p-2">
        <div class="border p-2 relo">
            <p class="text-wrap overflow-hidden">${value}</p>
            <button class='btn btn-danger close' data-index="${i}" data-action="delete">x</button>
        </div>
    </div>
    `;
    keeps.insertAdjacentHTML('afterbegin', keep_template)
    i++;
    }}
}

new_keep_btn.onclick = add_keep

function add_keep(event) {
    if (new_keep.value) {
        keeps_array.push(new_keep.value)
        localStorage.setItem('keeps',JSON.stringify(keeps_array))
        render_keep(new_keep.value)
        new_keep.value = ''
        localStorage.removeItem('input')
        console.log('заметка добавлена')
    }
}
new_keep.hidden = true
new_keep_btn.hidden = true

new_keep_1.onclick = () => {
    new_keep_1.hidden = true
    new_keep.hidden = false
    new_keep_btn.hidden = false
}
new_keep_btn.onclick = () => {
    add_keep(null)
    new_keep_1.hidden = false
    new_keep.hidden = true
    new_keep_btn.hidden = true
}

keeps.onclick = check_action

function check_action(event) {
    let HTMLelement = event.target

    if (HTMLelement.dataset.action === 'delete') {
        delete_keep(HTMLelement.dataset.index)
    }
}

function delete_keep(index) {
    keeps_array.splice(index, 1)
    localStorage.setItem('keeps', JSON.stringify(keeps_array))
    render_keep();
}

