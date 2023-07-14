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