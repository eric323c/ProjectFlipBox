// JavaScript for like interaction
document.querySelectorAll('.like-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        this.classList.toggle('liked');
        this.textContent = this.classList.contains('liked') ? 'favorite' : 'favorite_border';
    });
});

// JavaScript for adding comments
function addComment(event) {
    event.preventDefault();
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value;
    const commentSection = document.querySelector('.comments-section');

    // Create a new comment element
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `<p><strong>You</strong>: ${commentText}</p>`;

    // Add the new comment to the comments section
    commentSection.insertBefore(newComment, commentSection.querySelector('.add-comment-form'));

    // Clear the input field
    commentInput.value = '';
}

