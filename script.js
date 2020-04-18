// Zwiększanie, zmniejszanie i stopowania zmian napisu
var powiekszanie = document.getElementById('powiekszanie');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var Stop = document.getElementById('Stop');
var wznow = document.getElementById('wznow');

function zwieksz(){
    var fontSize = parseInt(window.getComputedStyle(powiekszanie).fontSize);
    powiekszanie.style.fontSize = (++fontSize) + "px";
    powiekszanie.style.color = "blue";
    powiekszanie.innerText = "Powiększanie";
}
function zmniejsz(){
    var fontSize = parseInt(window.getComputedStyle(powiekszanie).fontSize);
    powiekszanie.style.fontSize = (--fontSize) + "px";
    powiekszanie.style.color = "green";
    powiekszanie.innerText = "Pomniejszanie"
}

plus.addEventListener('click', zwieksz);
minus.addEventListener('click', zmniejsz);
Stop.addEventListener('click', function(){
    plus.removeEventListener('click',zwieksz);
    minus.removeEventListener('click',zmniejsz);
    powiekszanie.style.color = "red";
    powiekszanie.innerText = "Wstrzymano";
});

wznow.addEventListener('click', function()
{
    plus.addEventListener('click', zwieksz);
    minus.addEventListener('click', zmniejsz);
    powiekszanie.style.color = "black";
    powiekszanie.innerText = "Zmiana wielkości tekstu";
});

// Drag&Drop
// Pierwszy sposób
var skuter = document.getElementById('skuter');

skuter.onmousedown = function()
{
    skuter.onmousemove = function(e)
    {
        this.style.left = e.clientX - this.width / 2 +"px";
        this.style.top = e.clientY - this.height /2 + "px";
    };
};
skuter.onmouseup = function()
{
    this.onmousemove = null;
};

skuter.ondragstart = function(e)
{
    e.preventDefault();
};


/* Drugi sposób
function movingImage(e, objToMove)
{
    objToMove.style.left = e.clientX - objToMove.width / 2 +"px";
    objToMove.style.top = e.clientY - objToMove.height / 2 + "px";
}


var skuter = document.getElementById('skuter');

skuter.onmousedown = function()
{
    var self = this;
    document.onmousemove = function(e)
    {
      movingImage(e,self);
    };
};
skuter.onmouseup = function()
{
    document.onmousemove = null;
};

skuter.ondragstart = function(e)
{
    e.preventDefault();
};
*/


// Kontynuacja sposobem pierwszym

var staruszka = document.getElementById('staruszka');

staruszka.onmousedown = function()
{
    staruszka.onmousemove = function(e)
    {
        this.style.left = e.clientX - this.width/2 + "px";
        this.style.top = e.clientY - this.height/2 + "px";
    };
};

staruszka.onmouseup = function()
{
    this.onmousemove = null;
};

staruszka.ondragstart = function(e)
{
    e.preventDefault();
};

var fedora = document.getElementById('fedora');

fedora.onmousedown = function()
{
    fedora.onmousemove = function(e)
    {
       this.style.left = e.clientX - this.width / 2 + "px";
       this.style.top = e.clientY - this.height / 2 + "px"; 
    };
};
fedora.onmouseup = function()
{
    this.onmousemove = null;
};
fedora.ondragstart = function(e)
{
    e.preventDefault();
};

var sowa = document.getElementById('sowa');

sowa.onmousedown = function()
{
    sowa.onmousemove = function(e)
    {
       this.style.left = e.clientX - this.width / 2 + "px";
       this.style.top = e.clientY - this.height / 2 + "px"; 
    };
};
sowa.onmouseup = function()
{
    this.onmousemove = null;
};
sowa.ondragstart = function(e)
{
    e.preventDefault();
};

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);