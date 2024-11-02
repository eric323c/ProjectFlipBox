function openModal() {
    document.getElementById("newPostModal").style.display = "block";
}

function closeModal() {
    document.getElementById("newPostModal").style.display = "none";
}

function triggerFileUpload() {
    document.getElementById("fileInput").click();
}

document.getElementById("create-post").onclick = openModal;
