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
    map = [0,'pl10.png','pl2.png','pl3.png','pl4.png',0,'blue1.png.160x120r.png','pl5.png','pl6.png','pl7.png','pl8.png','blue1.png.160x120r.png',0,'pl9.png','pl10.png','pl11.png','pl12.png',0]
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
        if (map[i] != 0){
            img_obj1 = document.createElement('img');
            img_obj1.src = map[i]
            cell_obj.appendChild(img_obj1)
            if (i != 16 && i != 4 && i != 11) {
                img_obj2 = document.createElement('img');
                img_obj2.src = 'strela.png'
                cell_obj.appendChild(img_obj2)
            }
        }
        if (i != 0 && i != 5 && i != 12 && i!=17){
            cell_obj.classList.add('cell')
            if (i == 6) {

            }
        }
        
        map_obj.appendChild(cell_obj)
    }
}   