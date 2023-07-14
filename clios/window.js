// edits:
// - 10/10: cater for multiple .item divs
let divs = Array.from(document.querySelectorAll('.item')),
minWidth = 100,
minHeight = 100,
maxWidth = 900,
maxHeight = 900,
isResizing = false;

divs.forEach(div => {
div.addEventListener('mousedown', mousedown);
//select the resizers
let resizers = div.querySelectorAll('.resizer');

resizers.forEach(function(resizer) {
resizer.addEventListener('mousedown', mousedownOnResizer);
})

function mousedownOnResizer(e) {
let prevX = e.clientX,
prevY = e.clientY,
currentResizer = e.target,
rect = div.getBoundingClientRect(),
prevLeft = rect.left,
prevTop  = rect.top,
newWidth,
newHeight;

isResizing = true;

window.addEventListener('mousemove', mousemove);
window.addEventListener('mouseup', mouseup);


function mousemove(e){
let newX = prevX - e.clientX, //negative to the right, positive to the left
newY = prevY - e.clientY; //negative to the bottom, positive to the top
if (currentResizer.classList.contains('bottom-right')) {
newWidth = rect.width - newX;
newHeight = rect.height - newY;
if (newWidth > minWidth && newWidth < maxWidth) {
div.style.width = newWidth + 'px';
}
if (newHeight > minHeight && newHeight < maxHeight) {
div.style.height = newHeight + 'px';
}

}
else if (currentResizer.classList.contains('bottom-left')) {
newWidth = rect.width + newX;
newHeight = rect.height - newY;

if (newWidth > minWidth && newWidth < maxWidth) {
div.style.left = prevLeft - newX + 'px';
div.style.width = newWidth + 'px';
} 
if (newHeight > minHeight && newHeight < maxHeight) {
div.style.height = newHeight + 'px';
}

}
else if (currentResizer.classList.contains('top-right')) {
newWidth = rect.width - newX;
newHeight = rect.height + newY;

if (newWidth > minWidth && newWidth < maxWidth) {
div.style.width = newWidth + 'px';
}
if (newHeight > minHeight && newHeight < maxHeight) {
div.style.top = prevTop - newY + 'px';
div.style.height = newHeight + 'px';
}

}
else if (currentResizer.classList.contains('top-left')) {
newWidth = rect.width + newX;
newHeight = rect.height + newY;

if (newWidth > minWidth && newWidth < maxWidth) {
div.style.left = prevLeft - newX + 'px';
div.style.width = newWidth + 'px';
}
if (newHeight > minHeight && newHeight < maxHeight) {
div.style.top = prevTop - newY + 'px';
div.style.height = newHeight + 'px';
}
}
}

function mouseup() {
isResizing = false;
window.removeEventListener('mousemove', mousemove);
window.removeEventListener('mouseup', mouseup);
}
}
})


function mousedown(e) {
//get the initial mouse corrdinates and the position coordinates of the element
let div = this,
prevX = e.clientX,
prevY = e.clientY,
rect = div.getBoundingClientRect(),
prevLeft = rect.left,
prevTop  = rect.top;

if (!isResizing && !e.target.classList.contains('content')) {
window.addEventListener('mousemove', mousemove);
window.addEventListener('mouseup', mouseup);
}

function mousemove(e) {
//get horizontal and vertical distance of the mouse move
let newX = prevX - e.clientX, //negative to the right, positive to the left
newY = prevY - e.clientY; //negative to the bottom, positive to the top

//set coordinates of the element to move it to its new position
div.style.left = prevLeft - newX + 'px';
div.style.top = prevTop - newY + 'px';
}

function mouseup() {
window.removeEventListener('mousemove', mousemove);
window.removeEventListener('mouseup', mouseup);
}
}
