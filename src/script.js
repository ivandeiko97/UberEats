'use stirct';

 window.onscroll = () => {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  const button = document.getElementById('scrollUp');

  if (scrolled < 300) {
    button.style.display = 'none';
  } else {
    button.style.display = 'flex';
  }
}

let currentBuys = 0;
document.onclick = event => {
  const buys = document.getElementById('currentBuys');

  if (event.target.parentElement.className === 'restaurant') {
    currentBuys += 1;
    buys.style.display = 'flex';
    buys.innerHTML = `${currentBuys}`;
  };
}

let scrollTimer;
function up() {
  let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);

  if(top > 0) {
    window.scrollBy(0,-100);
    scrollTimer = setTimeout('up()',20);
  } else clearTimeout(scrollTimer);
  return false;
}

function changeColorOfDiv () {
  let div = event.path[1];
  if (event.target.parentElement.className === 'restaurant') {
    if (div.style.backgroundColor !== 'rgba(117, 117, 117, 0.2)') {
      div.style.backgroundColor = 'rgba(117, 117, 117, 0.2)';
    } else {
      div.style.backgroundColor = '#fff';
      currentBuys -= 2;
    }
  }
}