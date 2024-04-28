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
    map = [0,'map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png',0,'blue1.png.160x120r.png','map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png',0,'map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png',0]
newgame.onclick = () => {

    new_div.innerHTML = ''
    render_map(map)
}


function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let a = Math.floor(     Math.random() * (max - min) + min); 
    return a 
    
  }

function draw(a1,b1,a2,b2) {
    console.log(a1,b1,b2,a2)
    let canvas = document.getElementById('graph');
    let ctx = canvas.getContext('2d');
    
    ctx.beginPath();
    ctx.moveTo(a1,b1);
    ctx.lineTo(a2,b2);
    ctx.strokeStyle = '#1a2edb'
    ctx.stroke();
}

function render_map(map) {
    const canvas_template = `
    <canvas class="can" id="graph"></canvas>`;
    new_div.insertAdjacentHTML('afterbegin', canvas_template)
    const map_template = `
    <div class="map_div" id="map_div"></div>`;
    new_div.insertAdjacentHTML('afterbegin', map_template)

    const map_obj = document.getElementById('map_div');
    map_div.innerHTML = '';
    let cell, cell_obj;
    for (let i = 0; i != map.length;i++) {
        cell = map[i];

        cell_obj = document.createElement('div');
        if (map[i] != 0){
            img_obj1 = document.createElement('img');
            img_obj1.src = map[i]
            img_obj1.classList.add('abs')

            if (Math.random() > 0.5) 
                {img_obj1.style.top =`${getRandom(0,100)}px`}
            else 
                {img_obj1.style.bottom =`${getRandom(0,100)}px`}

                img_obj1.style.right=`${getRandom(0,100)}px`
                cell_obj.appendChild(img_obj1)
                
        }
        if (i != 0 && i != 5 && i != 12 && i!=17){
            cell_obj.classList.add('cell')
            if (i == 6) {

            }
        }
        let m = []
        map_obj.appendChild(cell_obj)
        for (let elem of map_obj.childNodes) {
            let rect = elem.getBoundingClientRect();
            let x = rect.left;
            let y = rect.top;
                m.push(x)
                m.push(y)
            if (m.length == 4) {
                draw(m[0], m[1], m[2],m[3])
                m = []
            }
        }
    }
}