//сцена 1 начать игру
let new_div = document.getElementById('new_div')

const newgame_template = `
    <div class="new_game_div">
            <h1>"Game Name"</h1>
            <button class='btn btn-secondary close' data-index="1" data-action="delete" id="newgame">New Game</button>
            <button class='btn btn-secondary close' data-index="1" data-action="delete">Options</button>
            <button class='btn btn-secondary close' data-index="1" data-action="delete">Titles</button>
    </div>`
    ;
new_div.insertAdjacentHTML('afterbegin', newgame_template)


//сцена 2 карта игры

let newgame = document.getElementById("newgame")
    map = [0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0]
newgame.onclick = () => {
    console.log('if выполнился')
    new_div.innerHTML = ''
    render_map(map)
}



function render_map(map) {
    const map_template = `
    <div class="map_div" id="map_div"></div>`;
    new_div.insertAdjacentHTML('afterbegin', map_template)

    const map_obj = document.getElementById('map_div');
    map_div.innerHTML = '';
    let cell, cell_obj;
    for (let i = 0; i != map.length;i++) {
        cell = map[i];
        console.log('a')
        cell_obj = document.createElement('div');
        cell_obj.classList.add('cell')
        
        map_obj.appendChild(cell_obj)
    }
}   