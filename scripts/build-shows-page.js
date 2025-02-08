const BASE_URL = "https://unit-2-project-api-25c1595833b2.herokuapp.com"
const API_KEY = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

const showsContainer=document.getElementById("showtimes");
// const hidden= document.getElementById("hidden");
// const showsContainer=document.getElementById("show-container");

async function fetchShowData() {
    try {
    const { data: shows } = await axios.get(`${BASE_URL}/showdates?api_key=${API_KEY}`);
        displayShows(shows); 
        } catch (error) 
        { console.error("Error fetching show data:", error); 

        } 
    }


function displayShows(shows) {
    showsContainer.innerHTML = ""; 

    shows.forEach(show => {
        const showDiv = document.createElement("div");
        showDiv.classList.add("show");
        showDiv.id = `show-list`;

        const date = document.createElement("div");
        date.classList.add("show__date");
        date.textContent = new Date(show.date).toDateString(); // Convert timestamp to readable format

        const venue = document.createElement("div");
        venue.classList.add("show__place");
        venue.textContent = show.place;

        const location = document.createElement("div");
        location.classList.add("show__location");
        location.textContent = show.location;

        const button = document.createElement("button");
        button.classList.add("show__btn");
        button.textContent = "BUY TICKETS";

        showDiv.appendChild(date);
        showDiv.appendChild(venue);
        showDiv.appendChild(location);
        showDiv.appendChild(button);

        showsContainer.appendChild(showDiv);
    });
}

fetchShowData();