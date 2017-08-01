var dusko = document.getElementById('dusko');
var blinkDuration = 100;

function blink() {
  dusko.src = 'img/dusko_was_here2.svg';

  setTimeout(function() {
    dusko.src = 'img/dusko_was_here.svg';
  }, blinkDuration);
}

setInterval(() => {
  blink();
  setTimeout(blink, blinkDuration + 200);
}, 5000);
