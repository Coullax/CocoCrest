// function checkViewport() {
//     const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

//     const parentDiv = document.getElementById('parent');
//     const emailLink = document.getElementById('email');
//     const whatsappLink = document.getElementById('whatsapp');

//     // Check if the last child of the parent div is a div
//     const lastChildIsDiv = parentDiv.lastChild.nodeName === 'DIV';

//     if (viewportWidth <= 580 && viewportWidth > 80 && !lastChildIsDiv) {
//         // Create a new div and append the last two anchor tags to it
//         const newDiv = document.createElement('div');
//         newDiv.appendChild(emailLink);
//         newDiv.appendChild(whatsappLink);
//         // Create a new ClassName for the new div "mystyle"
//         newDiv.classList.add("mystyle");

//         // Append the new div to the parent div
//         parentDiv.appendChild(newDiv);
//     } else if ((viewportWidth > 580 || viewportWidth <= 180) && lastChildIsDiv) {
//         // If the last child of the parent div is a div, remove it
//         parentDiv.removeChild(parentDiv.lastChild);

//         // Append the last two anchor tags directly to the parent div
//         parentDiv.appendChild(emailLink);
//         parentDiv.appendChild(whatsappLink);
//     }
// }

// window.onload = checkViewport;
// window.onresize = checkViewport;
