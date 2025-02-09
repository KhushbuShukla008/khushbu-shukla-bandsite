const BASE_URL = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
const API_KEY = "ee000510-47ef-4d74-ab92-04255ab731cr";

const list = document.getElementById("comments-container");
const form = document.getElementById("comment-form__container");

getCommentsAndRender();

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const comment = e.target.comment.value;

    if (!name || !comment) {
        alert("Please enter both name and comment.");
        return;
    }

    const postBody = { name, comment, };

    try {
        await axios.post(`${BASE_URL}/comments?api_key=${API_KEY}`, postBody);
        e.target.reset(); 
        getCommentsAndRender();
    } catch (e) {
        console.error("Error adding comment:", e.response.data.message);
    }
});


async function getCommentsAndRender() {
    try {
        const { data: comments } = await axios.get(`${BASE_URL}/comments?api_key=${API_KEY}`);
        list.innerHTML = '';
        comments.forEach((comment) => {
            const commentEl = createCommentComponent(comment);
            list.prepend(commentEl);
        });
    } catch (e) {
        console.error(e);
    }
}


function createCommentComponent({ name, comment, timestamp }) {
    const date = new Date(timestamp);
    const commentEl = document.createElement("div");
    commentEl.classList.add("comment");

    const divider = document.createElement("hr");
    divider.classList.add("comment__divider");
   
    const header = document.createElement("div");
    header.classList.add("comment__header");

    const avatar = document.createElement("div");
    avatar.classList.add("comment__avatar");
    
    avatar.innerText='';

    const info = document.createElement("div");
    info.classList.add("comment__info");

    const h3 = document.createElement("h3");
    h3.innerText = name;

    const h4 = document.createElement("h4");
    h4.innerText = date.toLocaleDateString();

    info.appendChild(h3);
    info.appendChild(h4);

    header.appendChild(avatar);
    header.appendChild(info);

    const commentText = document.createElement("h4");
    commentText.innerText = comment;

    commentEl.appendChild(divider);
    commentEl.appendChild(header);
    commentEl.appendChild(commentText);

    return commentEl;
}