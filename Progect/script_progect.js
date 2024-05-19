function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//сцена 1 начать игру
let new_div = document.getElementById("new_div");
let i = 0
const newgame_template = `
    <div class="new_game_div">
            <h1>"Game Name"</h1>
            <button class='btn btn-secondary close' data-index="1" data-action="delete" id="newgame">New Game</button>
            <button class='btn btn-secondary close' data-index="1" data-action="delete">Options</button>
            <button class='btn btn-secondary close' data-index="1" data-action="delete">Titles</button>
    </div>`;
new_div.insertAdjacentHTML("afterbegin", newgame_template);

//сцена 2 карта игры

let newgame = document.getElementById("newgame");
map = [
  "map_icon2.png",
  "map_icon1.png",
  "map_icon1.png",
  "map_icon1.png",
  "map_icon1.png",
  "map_icon1.png",
  "map_icon1.png",
  "map_icon1.png",
  "map_icon1.png",
  "map_icon1.png",
  "map_icon1.png",
  "map_icon1.png",
  "map_icon1.png",
  "map_icon1.png",
  "map_icon1.png",
  "map_icon1.png",
  "map_icon1.png",
  "map_icon1.png",
];

newgame.onclick = () => {
  new_div.innerHTML = "";
  render_map(map);
};

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let a = Math.floor(Math.random() * (max - min) + min);
  return a;
}

function render_map(map) {
  const map_template = `
    <div class="map_div" id="map_div"></div>`;
  new_div.insertAdjacentHTML("afterbegin", map_template);

  const map_obj = document.getElementById("map_div");
  map_div.innerHTML = "";
  let cell_obj;
  for (let i = 0; i != map.length; i++) {
    cell = map[i];

    cell_obj = document.createElement("div");
    if (map[i] != 0) {
      img_box = document.createElement("div");
      img_box.classList.add("abs");
      img_box1 = document.createElement("div");
      img_box1.classList.add("abs");
      img_obj1 = document.createElement("img");
      img_obj1.src = map[i];
      img_obj1.classList.add("abs-img");
      img_obj2 = document.createElement("img");
      img_obj2.src = "line1.png";
      img_obj2.classList.add("abs-img");

      img_box.appendChild(img_obj1);
      img_box1.appendChild(img_obj2);

      cell_obj.appendChild(img_box);
      cell_obj.appendChild(img_box1);
    }
    cell_obj.classList.add("cell");
    if (i == 6) {
    }

    map_obj.appendChild(cell_obj);
  }
  button_obj = document.createElement("div");
  button_obj.classList.add("div1")
  button_o = document.createElement("button");
  button_o.id ='id12'
  button_o.classList.add("button1")
  button_obj.appendChild(button_o);
  new_div.appendChild(button_obj);
  let a = document.getElementById('id12').innerText = 'Continue';


  
  button_o.onclick = (event) => {
  if (map[i] === "map_icon1.png") {
    i+=1
    fight()} 
  if (map[i] === "map_icon2.png") {
    i+=1
    // потом
  }   } 
}
//3 игра

function fight_enemy_random() {
  let a = getRandomInt(5);
  console.log(a)
  if (a == 2) {
    return "камень";
  }
  if (a == 3) {
    return "бумага";
  }
  if (a == 1) {
    return "ящерица";
  }
  if (a == 0) {
    return "спок";
  }
  if (a == 4) {
    return "ножницы";
  }
}

function results(player) {
    console.log(player)
    
  enemy = fight_enemy_random();
  console.log(enemy)
  if (enemy == player) {
    return "ничья";
  }
  if (enemy == "камень")
    if (player == "ножницы" || player == "ящерица") return "поражение";
    else {
      return "победа";
    }
  if (enemy == "ногжницы")
    if (player == "бумага" || player == "ящерица") return "поражение";
    else {
      return "победа";
    }
  if (enemy == "бумага")
    if (player == "камень" || player == "спок") return "поражение";
    else {
      return "победа";
    }
  if (enemy == "ящерица")
    if (player == "бумага" || player == "спок") return "поражение";
    else {
      return "победа";
    }
  if (enemy == "спок")
    if (player == "камень" || player == "ножницы") return "поражение";
    else {
      return "победа";
    }
}


function fight() {
    new_div.innerHTML = ''
    const fight = `
    <div class="fight_div">
        <div class = 'arts' id = 'arts'></div>
        <div class = 'center' id = 'center' >  
            <div class = 'hp' id = 'hp'>123</div>
            <div class = 'enemy' id = 'enemy'>1234</div>
            <div class = 'enemy_hp' id = 'enemy_hp'>12345</div>
        </div>
        <div class = 'moves' id = 'moves'>
            <div class = 'move'><button id = 'rock'>камень</button></div>
            <div class = 'move'><button id = 'scissors'>ножницы</button></div>
            <div class = 'move'><button id = 'papper'>бумага</button></div>
            <div class = 'move'><button id = 'spock'>спок</button></div>
            <div class = 'move'><button id = 'lizard'>ящерица</button></div>
        </div>
    </div>`;
    new_div.insertAdjacentHTML('afterbegin', fight)

    player_hp =10
    enemy_hp =1
    while (player_hp >= 0 && enemy_hp >= 0) {
        let rock = document.getElementById("rock")
        rock.onclick = (event) => {
            console.log(results("камень"))
        }
        let scissors = document.getElementById("scissors")
        scissors.onclick = (event) => {
            console.log(results("ножницы"))
        }
        let papper = document.getElementById("papper")
        papper.onclick = (event) => {
            console.log(results("бумага"))
        }
        let spock = document.getElementById("spock")
        spock.onclick = (event) => {
            console.log(results("спок"))
        }
        let lizard = document.getElementById("lizard")
        lizard.onclick = (event) => {
            console.log(results("ящерица"))
        }
        player_hp -= 1
    }
}
