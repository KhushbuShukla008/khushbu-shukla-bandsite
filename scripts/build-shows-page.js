const shows = [
    {
        date: "Mon Sept 09 2024",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
    },
    {
        date: "Tues Sept 17 2024",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
    },
    {
        date: "Sat Oct 12 2024",
        venue: "View Lounge",
        location: "San Francisco, CA",
    },
    {
        date: "Sat Nov 16 2024",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
    },
    {
        date: "Fri Nov 29 2024",
        venue: "Moscow Center",
        location: "San Francisco, CA",
    },
    {
        date: "Wed Dec 18 2024",
        venue: "Press Club",
        location: "San Francisco, CA",
    },
];
function displayShows() {
    const showsContainer = document.getElementById("shows-container");
    showsContainer.innerHTML = "";


    shows.forEach((show) => {
        const showEl = document.createElement("div");
        showEl.className = "show";
        showEl.innerHTML = `
        <div class="show__details">
          <div class="show__detail">
            <h3 class="show__label">DATE</h3>
            <h3 class="show__date">${show.date}</h3>
          </div>
          <div class="show__detail">
            <h3 class="show__label">VENUE</h3>
            <h3>${show.venue}</h3>
          </div>
          <div class="show__detail">
            <h3 class="show__label">LOCATION</h3>
            <h3>${show.location}</h3>
          </div>
        </div>
        <button class="show__button">BUY TICKETS</button>
        <hr class="show__divider"> 
      `;
        showsContainer.appendChild(showEl);
    });
}


document.addEventListener("DOMContentLoaded", displayShows);