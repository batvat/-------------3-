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
    map = [0,'map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png',0,'map_icon2.png','map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png',0,'map_icon1.png','map_icon1.png','map_icon1.png','map_icon1.png',0]
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
    const canvas_template = `
    <canvas class="can" width="${window.innerWidth}" height="${window.innerHeight}" id="graph"></canvas>`;
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
        if (i != 0 && i != 5 && i != 12 && i!=17){
            cell_obj.classList.add('cell')
            if (i == 6) {

            }
        }
        map_obj.appendChild(cell_obj)
    }


//     let canvas = document.getElementById('graph');
//     let ctx = canvas.getContext('2d');
//     ctx.strokeStyle = 'white'
//     ctx.lineWidth = '1'
//     ctx.beginPath();

//     let m = [];
//     let i = -1;
//     for (let elem of map_obj.childNodes) {
//         if (elem.firstChild) {
//             let rect = elem.firstChild.getBoundingClientRect();
//             let x = rect.right;
//             let y = rect.top + 15;

//             m.push([x, y])
//             i++;
//             console.log(m)
//             console.log(m[i])
//             if (m.length == 1) {
//                 ctx.moveTo(...m[i]);
//             } else if (m.length >= 2) {
//                 ctx.lineTo(...m[i]);
//             }
//         }
//     }
//     ctx.stroke();
}