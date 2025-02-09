const BASE_URL = "https://unit-2-project-api-25c1595833b2.herokuapp.com"
const API_KEY = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

const showsContainer = document.getElementById("showtimes");

async function fetchShowData() {
    try {
        const { data: shows } = await axios.get(`${BASE_URL}/showdates?api_key=${API_KEY}`);
        displayShows(shows);
    } catch (error) {
        console.error("Error fetching show data:", error);
    }
}


function displayShows(shows) {
    showsContainer.innerHTML = "";

    shows.forEach(show => {
        const showDiv = document.createElement("div");
        showDiv.classList.add("show-list");
        showDiv.id = `show-list`;

        const dateContainer = document.createElement("div");
        dateContainer.classList.add("show__detail-container");

        const dateTitle = document.createElement("div");
        dateTitle.classList.add("show__label");
        dateTitle.textContent = "Date";

        const date = document.createElement("div");
        date.classList.add("show__detail");
        date.classList.add("show__date");
        date.textContent = new Date(show.date).toDateString();
        
        dateContainer.appendChild(dateTitle);
        dateContainer.appendChild(date);

        const venueContainer = document.createElement("div");
        venueContainer.classList.add("show__detail-container");
        
        const venueTitle = document.createElement("div");
        venueTitle.classList.add("show__label");
        venueTitle.textContent = "Venue";

        const venue = document.createElement("div");
        venue.classList.add("show__detail");
        venue.classList.add("show__place");
        venue.textContent = show.place;

        venueContainer.appendChild(venueTitle);
        venueContainer.appendChild(venue);

        const locationContainer = document.createElement("div");
        locationContainer.classList.add("show__detail-container");

        const locationTitle = document.createElement("div");
        locationTitle.classList.add("show__label");
        locationTitle.textContent = "Location";

        const location = document.createElement("div");
        location.classList.add("show__detail");
        location.classList.add("show__location");
        location.textContent = show.location;

        locationContainer.appendChild(locationTitle);
        locationContainer.appendChild(location);

        const details = document.createElement("div");
        details.classList.add("show__details");

        details.appendChild(dateContainer);
        details.appendChild(venueContainer);
        details.appendChild(locationContainer);
        
        const button = document.createElement("button");
        button.classList.add("show__btn");
        button.textContent = "BUY TICKETS";

        const divider = document.createElement("div");
        divider.classList.add("show__divider");

        
        showDiv.appendChild(details);
        showDiv.appendChild(button);
        showDiv.appendChild(divider);

        showsContainer.appendChild(showDiv);
        showsContainer.appendChild(divider);

        showDiv.addEventListener("click", () => {
            
            showDiv.classList.toggle("active");

            const allShows = document.querySelectorAll(".show-list");
            allShows.forEach(otherShow => {
                if (otherShow !== showDiv) {
                    otherShow.classList.remove("active");
                }
            });
        });
    });
        
}

fetchShowData();