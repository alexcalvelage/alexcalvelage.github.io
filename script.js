document.addEventListener("DOMContentLoaded", () => {

    const dialog = document.getElementById("dialog-screenshot");
    const selected_image = document.getElementById("selected-image");

    function openSCRViewer(button) {
        const image = button.querySelector("img");
        if (!image) return;
        selected_image.src = image.src;
        dialog.showModal();
    }

    dialog.addEventListener("click", () => dialog.close());

    window.openSCRViewer = openSCRViewer;

});