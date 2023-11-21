function checkViewport() {
    const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    const parentDiv = document.getElementById('parent');
    const emailLink = document.getElementById('email');
    const whatsappLink = document.getElementById('whatsapp');

    // Check if the last child of the parent div is a div
    const lastChildIsDiv = parentDiv.lastChild.nodeName === 'DIV';

    if (viewportWidth <= 834 && viewportWidth > 580 && !lastChildIsDiv) {
        // Create a new div and append the last two anchor tags to it
        const newDiv = document.createElement('div');
        newDiv.appendChild(emailLink);
        newDiv.appendChild(whatsappLink);

        // Append the new div to the parent div
        parentDiv.appendChild(newDiv);
    } else if ((viewportWidth > 834 || viewportWidth <= 580) && lastChildIsDiv) {
        // If the last child of the parent div is a div, remove it
        parentDiv.removeChild(parentDiv.lastChild);

        // Append the last two anchor tags directly to the parent div
        parentDiv.appendChild(emailLink);
        parentDiv.appendChild(whatsappLink);
    }
}

window.onload = checkViewport;
window.onresize = checkViewport;
