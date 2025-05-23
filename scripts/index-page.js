const comments = [
    {
        name: "Isaac Tadesse",
        comment:
            "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        date: new Date("10/20/2023"),
    },
    {
        name: "Christina Cabrera",
        comment:
            "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        date: new Date("02/28/2024"),
    },
    {
        name: "Victor Pinto",
        comment:
            "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        date: new Date("08/14/2024"),
    },
];

function displayComments() {
    const commentsContainer = document.getElementById("comments-container");
    commentsContainer.innerHTML = ""; 

    const divider = document.createElement("hr");
    divider.className = "comment__divider";
    commentsContainer.appendChild(divider);
  
    comments.forEach((comment) => {
      const commentEl = document.createElement("div");
      commentEl.className = "comment";
      commentEl.innerHTML = `
        <div class="comment__header">
          <div class="comment__avatar"></div> 
          <div class="comment__info">
            <h3>${comment.name}</h3>
            <h4>${comment.date.toLocaleDateString()}</h4>
          </div>
        </div>
        <h4>${comment.comment}</h4>
        <hr class="comment__divider">
      `;
      commentsContainer.appendChild(commentEl);
    });
  }
  
  function commentSubmit(e) {
    e.preventDefault(); 
    const nameAdded = document.getElementById("name");
    const commentAdded = document.getElementById("comment");
  
    const newComment = {
      name: nameAdded.value,
      comment: commentAdded.value,
      date: new Date(),
    };
  
    comments.unshift(newComment);
  
    nameAdded.value = "";
    commentAdded.value = "";
        displayComments();
  }
  document.addEventListener("DOMContentLoaded", displayComments);

  const commentForm = document.querySelector(".comment-form__fields");
   commentForm.addEventListener("submit", commentSubmit);