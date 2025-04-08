const slider = document.querySelector('.slider');
const thumb = document.querySelector('.slider-thumb');
const valueIndicator = document.querySelector('.value-indicator');
const track = document.querySelector('.slider-track');

let isDragging = false;

function updateValue(clientX) {
    const rect = slider.getBoundingClientRect();
    let newX = clientX - rect.left;
    newX = Math.max(0, Math.min(newX, rect.width));
    
    const percent = (newX / rect.width) * 100;
    thumb.style.left = `${percent}%`;
    valueIndicator.textContent = Math.round(percent);
}

thumb.addEventListener('mousedown', (e) => {
    isDragging = true;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
    if (!isDragging) return;
    updateValue(e.clientX);
}

function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}

track.addEventListener('click', (e) => {
    updateValue(e.clientX);
});

updateValue(slider.getBoundingClientRect().left + slider.offsetWidth / 2);