window.onresize = adjustHeight;
let previousEmoji;

let emojis = document.getElementsByClassName('emoji');
for (i = 0; i < emojis.length-1; i++) {
  (function() {
    let emoji = emojis[i];
    emoji.addEventListener("click", function() {
      updateContent(emoji);
  });
  }());
}

function adjustHeight() {
  const grid = document.getElementById("grid");
  const w = getComputedStyle(grid, null).getPropertyValue("width");
  h = parseInt(w, 10)/8;
  grid.style.height = (h+"px");
}

function updateContent(emoji) {
 document.getElementById('h').innerHTML = emoji.getAttribute('h');
 document.getElementById('h').style.color = emoji.getAttribute('color');
 const idOfContentToRemove = previousEmoji ? previousEmoji.getAttribute('id')+'-content' : 'intro-content-web'
 document.getElementById(idOfContentToRemove).removeAttribute('style')
 document.getElementById(emoji.getAttribute('id')+'-content').setAttribute('style','display:block')
 previousEmoji = emoji
}
