/*!
Your jQuery and javascript codes here
 */

//variables:
var imagesLink = [];
var imgNb = 10;
var trueId = [];
var hiding = 0;
var score = 0;
var btn = document.getElementById('nextBtn');
var found = document.getElementById('txtDiv1');
var found2 = document.getElementById('txtDiv2');
var ctrl = 1;
var on = 0;

for (var i = 0; i < imgNb; i++) {
    document.getElementsByTagName('div')[i + 4].id = 'place' + i;


    var sum = i + 1;
    var imgC = document.createElement('img');
    document.getElementById('place' + i).appendChild(imgC);


    imgC.id = 'img' + sum;
    imgC.src = 'images/image' + sum + '.png';
    document.getElementsByClassName('choicesDiv')[i].style.backgroundColor = '#3273dbc2';
    document.getElementsByClassName('choicesDiv')[i].style.borderRadius = '20px';
}
for (var i = 1; i < 3; i++) {
    var khyar = document.createElement('img');
    let currentImg = document.getElementById('qnsImage' + i);
    currentImg.appendChild(khyar);
    khyar.id = 'imgC' + i;
    document.getElementsByClassName('qnsDiv')[i - 1].style.backgroundColor = '#3273dbc2';
    document.getElementsByClassName('qnsDiv')[i - 1].style.borderRadius = '20px';
}
function restart(){
    ctrl = 1;
    found.innerHTML = '';
    found2.innerHTML = '';
    btn.disabled = true;
for (var i=0; i<imgNb; i++) {

    do {
        imagesLink[i] = Math.floor(Math.random()* 10);
        var check=1;
        var previous=i-1;
        for (var a=i; a>0; a--) {
            if (imagesLink[previous]==imagesLink[i]) {check=0;}
            previous--

        }
    }
    while (!check);
        var sum = i + 1;
        trueId.push("img" + sum);
        trueId['img' + sum] = imagesLink[i] + 1;
        //working randomly:
        imagesLink.push('images/image' +( imagesLink[i] + 1) + '.png');
        var img = document.getElementById('img' + sum);
        img.src = 'images/image' + (imagesLink[i] + 1) + '.png';

}


//making the Animal one and Animal two spawn randomly
var cImg1 = document.getElementById('imgC1');
var cImg2 = document.getElementById('imgC2');
var rImg1 = Math.floor(Math.random() * 10);

cImg1.src = "images/image" + (rImg1 + 1) + ".png";
do {rImg2 = Math.floor(Math.random() * 10);} while (rImg1 == rImg2);
cImg2.src = "images/image" + (rImg2 + 1) + ".png";


//cards :ach dar hasan dzeb
window.onload = setTimeout(function (){

hiding = 1;
displayedImg = 0;
displayedImg2 = 0;

    for(var i = 1; i < imgNb + 1; i++){
        var cardV = document.getElementById('img' + i);
        cardV.src = "images/card.jpg";
        cardV.style.width = '100%';
        cardV.style.height = '150px';
    }

    document.getElementById('choices').onclick = event => {

    if (ctrl) {
    for(var i = 1; i < imgNb + 1; i++){
//clearing image's class:

        switch(document.getElementsByTagName('img')[i + 1].className){
            case '':
        document.getElementById('img' + i).src = "images/card.jpg";
        break;
            case 'choosed':
        document.getElementsByClassName('choosed').className = '';
        break;
            case 'choosed2':
        document.getElementsByClassName('choosed2').className = '';
        break;
        }
    }
            document.getElementById(event.target.id).src = "images/image" + (trueId[event.target.id]) + ".png";


//   scoring:
if ((document.getElementById(event.target.id).src == cImg1.src && found.innerHTML != 'Found!') 
    || (document.getElementById(event.target.id).src == cImg2.src && found2.innerHTML != 'Found!')) {

    score = score + 1;
    document.getElementById('hitTxt').innerHTML = score;
}else if (score > 0 && (found2.innerHTML == 'Found!' && found.innerHTML == 'Found!')){
    score--;
    if (score < 0) {score = 0}
    document.getElementById('hitTxt').innerHTML = score;
}else if ((score > 0) && ((document.getElementById(event.target.id).src != cImg1.src) 
    || (document.getElementById(event.target.id).src != cImg2.src))) {
        score--;
        document.getElementById('hitTxt').innerHTML = score;
    }

//unreplaceable matched animal:
if (document.getElementById(event.target.id).src == cImg1.src) {
    document.getElementById(event.target.id).className = 'choosed';
}


else if (document.getElementById(event.target.id).src == cImg2.src) {
    document.getElementById(event.target.id).className = 'choosed2';
}


    
//displaying "Found!":
    if (document.getElementById(event.target.id).src == cImg1.src) {found.innerHTML = 'Found!';}
    if (document.getElementById(event.target.id).src == cImg2.src) {found2.innerHTML = 'Found!';}

// unclickable images if you matched the 2:
if (found.innerHTML == 'Found!' && found2.innerHTML == 'Found!') {ctrl = 0;btn.disabled = false;}
        }
    }
}

,2000);
}
restart();
function clearClassName(){
    for (var i = 1; i < imgNb ; i++){ 
    document.getElementsByTagName('img')[i + 1].className = '';
    }
}

//button functions:
btn.addEventListener("click" , restart);
btn.addEventListener("click" , clearClassName);

//styling:
document.getElementById('titleTxt').innerHTML = 'Match the animals game';