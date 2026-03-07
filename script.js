document.addEventListener("DOMContentLoaded", () => {

    fetch("/footer.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("footer").innerHTML = html;
        });

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