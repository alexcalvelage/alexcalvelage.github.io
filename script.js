const dialog = document.getElementById("dialog-screenshot");
const selected_image = document.getElementById("selected-image");
function openSCRViewer(button) {
    const image = button.querySelector("img");
    selected_image.src = image.src;
    dialog.showModal();
}