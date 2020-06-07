'use strict';
let move = 0;
let b = document.getElementById('board').children;
function win(p) {
  document.getElementById('winChr').classList.add(p);
  document.getElementById('winText').innerHTML = p;
  document.getElementById('board').style.display = 'none';
  document.getElementById('win').style.display = 'flex';
}
for(let i = 0; i < 9; i++)
{
  b[i].onclick = () => {
    let p = (move % 2) ? 'o' : 'x';
    b[i].classList.add(p);
    b[i].onclick = null;
    for(let j = 0; j < 3; j++)
    {
      if(
       (b[j*3+0].classList.contains(p)   &
        b[j*3+1].classList.contains(p)   &
        b[j*3+2].classList.contains(p)) ||
       (b[0+j].classList.contains(p) &
        b[3+j].classList.contains(p) &
        b[6+j].classList.contains(p) ))
      {
        win(p);
        move = 9;
      }
    }
    if(
     (b[0].classList.contains(p)   &
      b[4].classList.contains(p)   &
      b[8].classList.contains(p)) ||
     (b[2].classList.contains(p)   &
      b[4].classList.contains(p)   &
      b[6].classList.contains(p))  )
    {
      win(p);
      move = 9;
    }
    if(move++ == 8)
    {
      document.getElementById('board').style.display = 'none';
      document.getElementById('draw').style.display = 'flex';
    }
  };
};
