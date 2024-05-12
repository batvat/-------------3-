function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


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
    map = ['map_icon2.png','map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png']

    newgame.onclick = () => {
    new_div.innerHTML = ''
    render_map(map)
}


function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let a = Math.floor(Math.random() * (max - min) + min); 
    return a 
    
  }


  


function render_map(map) {
    const map_template = `
    <div class="map_div" id="map_div"></div>`;
    new_div.insertAdjacentHTML('afterbegin', map_template)

    

    const map_obj = document.getElementById('map_div');
    map_div.innerHTML = '';
    let cell_obj;
    for (let i = 0; i != map.length;i++) {
        cell = map[i];

        cell_obj = document.createElement('div');
        if (map[i] != 0){
            img_box = document.createElement('div');
            img_box.classList.add("abs")
            img_box1 = document.createElement('div');
            img_box1.classList.add("abs")
            img_obj1 = document.createElement('img');
            img_obj1.src = map[i]
            img_obj1.classList.add('abs-img')
            img_obj2 = document.createElement('img');
            img_obj2.src = 'line1.png'
            img_obj2.classList.add('abs-img')
            
            img_box.appendChild(img_obj1)
            img_box1.appendChild(img_obj2)
            
                cell_obj.appendChild(img_box)
                cell_obj.appendChild(img_box1)
                
        }
        cell_obj.classList.add('cell')
            if (i == 6) {

            }
        
        map_obj.appendChild(cell_obj)
    }
    button_obj = document.createElement('div')
    button_o = document.createElement('button')
    document.button_o.innerHTML = 'текстфывофытвофывофывьффшыфвшфышвшфы'
    button_obj.appendChild(button_o)
    new_div.appendChild(button_obj)
}
    //3 игра


function fight_enemy_random() {
    let a = getRandomInt(5); 
    if (a == 2) {
        return 'камень'
    } 
    if (a == 3) {
        return 'бумага'
    } 
    if (a == 1) {
        return 'ящерица'
    } 
    if (a == 0) {
        return 'спок'
    } 
    if (a == 4) {
        return 'ножницы'
    } 
}

function results(player) {
    enemy = fight_enemy_random()
    if (enemy == player){
        return 'ничья'
    }
    if (enemy == 'камень')
        if (player == 'ножницы' || player == 'ящерица')
            return 'поражение'
        else {
            return 'победа'
        }
    if (enemy == 'ногжницы')
        if (player == 'бумага' || player == 'ящерица')
            return 'поражение'
        else {
            return 'победа'
        }
    if (enemy == 'бумага')
        if (player == 'камень' || player == 'спок')
            return 'поражение'
        else {
            return 'победа'
        }
    if (enemy == 'ящерица')
        if (player == 'бумага' || player == 'спок')
            return 'поражение'
        else {
            return 'победа'
        }
    if (enemy == 'спок')
        if (player == 'камень' || player == 'ножницы')
            return 'поражение'
        else {
            return 'победа'
        }
}

function fight() {
    new_div.innerHTML = ''
    const fight = `
    <div class="fight_div">
        <div class = 'arts' id = 'arts'></div>
        <div class = 'center' id = 'center' >  
            <div class = 'hp' id = 'hp'></div>
            <div class = 'enemy' id = 'enemy'></div>
            <div class = 'enemy_hp' id = 'enemy_hp'></div>
        </div>
        <div class = 'moves' id = 'moves'>
            <div class = 'move'><button id = 'rock'>'камень'</button></div>
            <div class = 'move'><button id = 'scissors'>'ножницы'</button></div>
            <div class = 'move'><button id = 'papper'>'бумага'</button></div>
            <div class = 'move'><button id = 'spock'>'спок'</button></div>
            <div class = 'move'><button id = 'lizard'>'ящерица'</button></div>
        </div>
    </div>`;
    new_div.insertAdjacentHTML('afterbegin', fight)

}



