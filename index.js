
setTimeout(function() {
    let div = document.createElement('div');

    div.style.position = 'relative';
    div.style.top = '35vh';
    div.style.left = '0vh';
    div.style.height = "99%";
    div.style.width = "99%";
    div.style.display = "flex";
    div.style.justifyContent = 'center';
    div.style.fontSize = "150px";
    div.style.fontFamily = "Brush Script MT, Brush Script Std, cursive";
    div.style.fontWeight = "bold";
    div.innerHTML = 'ТЫ ПИДОР';
    div.style.color = 'white';

    document.body.append(div);
}, 2150);

const backcolor = [
    '#ffffff', '#f8f8f8', '#f5f5f5', '#f0f0f0', '#e8e8e8', '#e0e0e0', 
    '#dcdcdc', '#d8d8d8', '#d3d3d3', '#d0d0d0', '#c8c8c8', '#c0c0c0',
    '#bebebe', '#b8b8b8', '#b0b0b0', '#a9a9a9', '#a8a8a8', '#a0a0a0',
    '#989898', '#909090', '#888888', '#808080', '#787878', '#707070',
    '#696969', '#686868', '#606060', '#585858', '#505050', '#484848',
    '#404040', '#383838', '#303030', '#282828', '#202020', '#181818',
    '#101010', '#080808', '#000000'
];

let delay = 0;

while(delay < 60000) {
    let id = 0;
    
    delay = delay + 1000;

    for(let i = delay; i < delay + 1140;){
        (function(i, id) {
                setTimeout(function(){
                    document.body.style.backgroundImage = `linear-gradient(to left, ${backcolor[id]}, ${backcolor[id+2]}, ${backcolor[id+4]}, ${backcolor[id+6]}`; 
                }, i);
        })(i, id);
        i = i + 30;
        id++;
    };

    delay = delay + 2000;

    for(let i = delay; i < delay + 1140;){
        (function(i, id) {
                setTimeout(function(){
                    document.body.style.backgroundImage = `linear-gradient(to left, ${backcolor[id]}, ${backcolor[id-1]}, ${backcolor[id-3]}, ${backcolor[id-5]}`;
                }, i);
        })(i, id);
        i = i + 30;
        id--;
    };

}

