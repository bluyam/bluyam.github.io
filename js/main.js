window.onresize = adjustHeight;
let previousEmoji;

let emojis = document.getElementsByClassName('emoji');
// the resume emoji shouldn't update the content, hence the -1
for (i = 0; i < emojis.length-1; i++) {
  (function() {
    let emoji = emojis[i];
    emoji.addEventListener("click", function() {
      updateContent(emoji);
  });
  }());
}

// properly sizes the emojis (this will probably be refactored soon)
function adjustHeight() {
  const grid = document.getElementById("grid");
  const w = getComputedStyle(grid, null).getPropertyValue("width");
  h = parseInt(w, 10)/8;
  grid.style.height = (h+"px");
}

// updates the h1 and p content when a new emoji is clicked
function updateContent(emoji) {
 document.getElementById('h').innerHTML = emoji.getAttribute('h');
 document.getElementById('h').style.color = emoji.getAttribute('color');
 const idOfContentToRemove = previousEmoji ? previousEmoji.getAttribute('id')+'-content' : 'intro-content-web'
 document.getElementById(idOfContentToRemove).removeAttribute('style')
 document.getElementById(emoji.getAttribute('id')+'-content').setAttribute('style','display:block')
 previousEmoji = emoji
}
