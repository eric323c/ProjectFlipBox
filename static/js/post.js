// Display modal for creating a new post
document.getElementById("create-post").addEventListener("click", function() {
    document.querySelector(".modal").style.display = "flex";
});

// Close the modal
function closeModal() {
    document.querySelector(".modal").style.display = "none";
}

// Trigger file upload when clicking on the upload container
function triggerFileUpload() {
    document.getElementById("file-input").click();
}

// Handle file selection
document.getElementById("file-input").addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.createElement("img");
            preview.src = e.target.result;
            preview.className = "post-preview-image";
            document.querySelector(".modal-content").appendChild(preview);
            document.querySelector(".upload-container").style.display = "none";
            document.querySelector(".next-btn").style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});

// Move to the next stage (e.g., adding caption) - placeholder functionality
function goToNextStage() {
    alert("Proceed to the next stage (e.g., add caption, filters, etc.)");
}

