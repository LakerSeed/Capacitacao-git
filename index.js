// slider
const voltar = document.getElementById("voltar");
const avançar = document.getElementById("avançar");
const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const slider3 = document.getElementById("slider3");
let slide_index = 0;
const slide_num = [slider1, slider2, slider3];

function slider(slide){
    slide_index += slide;
    if(slide_index < 0){
        slide_index = 2;
    }else if(slide_index > 2){
        slide_index = 0;
    }
    for(let i = 0; i < 3 ; i++){
        if(slide_index == i){
            slide_num[slide_index].style.display = "block"
            continue;
        }
        slide_num[i].style.display = "none"
    }
}