window.onscroll = function () {
    scrollFunction();
};

const mail = document.getElementById("mail");
const profile = document.getElementById("profile");
function scrollFunction() {
    // ----------------------Navbar Colour----------------------
    var navbar = document.getElementById("myTopnav");

    if (
        document.body.scrollTop > 70 ||
        document.documentElement.scrollTop > 70
    ) {
        navbar.style.backgroundColor = "#ffffff";
        profile.src = "images/profileBlack.png";
        mail.src = "images/mailBlack.png";
    } else {
        navbar.style.backgroundColor = "";
        profile.src = "images/profile.png";
        mail.src = "images/mail.png";
    }
}

function hover(x) {
    x.style.backgroundColor = "#ffffff";
    profile.src = "images/profileBlack.png";
    mail.src = "images/mailBlack.png";
}

function notHover(x) {
    x.style.backgroundColor = "";
    profile.src = "images/profile.png";
    mail.src = "images/mail.png";
}

// ----------------------Searchable Datas----------------------
const suggestions = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grapes",
    "Honeydew",
];

function showSuggestions() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let suggestionsBox = document.getElementById("suggestionsBox");
    let suggestionsList = document.getElementById("suggestionsList");

    suggestionsList.innerHTML = "";
    if (input) {
        let filteredSuggestions = suggestions.filter((item) =>
            item.toLowerCase().includes(input)
        );
        if (filteredSuggestions.length > 0) {
            suggestionsBox.style.display = "block";
            filteredSuggestions.forEach((item) => {
                let listItem = document.createElement("li");
                listItem.textContent = item;
                listItem.onclick = function () {
                    document.getElementById("searchInput").value = item;
                    suggestionsBox.style.display = "none";
                };
                suggestionsList.appendChild(listItem);
            });
        } else {
            suggestionsBox.style.display = "none";
        }
    } else {
        suggestionsBox.style.display = "none";
    }
}

function performSearch() {
    let query = document.getElementById("searchInput").value;
    if (query) {
        console.log("Searching for: " + query);
        // Implement actual search functionality here
    }
}

document.addEventListener("click", function (event) {
    if (!document.querySelector(".search-container").contains(event.target)) {
        document.getElementById("suggestionsBox").style.display = "none";
    }
});

// ----------------------SEO----------------------
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tab.classList.add("active");
        target.classList.add("active");
    });
});

// ----------------------SEO Change colour----------------------
document.querySelectorAll(".option-list span").forEach((element) => {
    let text = element.textContent.toLowerCase();
    console.log(text);

    if (text.includes("#statistics")) {
        element.style.color = "#3182f6";
    } else if (text.includes("#algebra")) {
        element.style.color = "#f67931";
    } else if (text.includes("#geometry")) {
        element.style.color = "#4b31f6";
    }

    element.style.fontSize = "1.1vw";
});

// ----------------------Date watched----------------------
function getFormattedDate() {
    const date = new Date();
    const year = date.getFullYear();
    const options = { month: "long", timeZone: "UTC" };
    const monthName = date.toLocaleString("en-US", options);
    let day = date.getDate();

    // Handle correct ordinal suffixes (1st, 2nd, 3rd, 4th...)
    let suffix = "th";
    if (day % 10 === 1 && day % 100 !== 11) {
        suffix = "st";
    } else if (day % 10 === 2 && day % 100 !== 12) {
        suffix = "nd";
    } else if (day % 10 === 3 && day % 100 !== 13) {
        suffix = "rd";
    }

    return `${monthName} ${day}${suffix}, ${year}`;
}

function markAsWatched(lectureId) {
    let formattedDate = getFormattedDate(); // Use the new formatted date
    localStorage.setItem(`lastWatched-${lectureId}`, formattedDate); // Save to localStorage
    document.getElementById(`lastWatched-${lectureId}`).textContent =
        formattedDate; // Update UI
}

function loadLastWatchedDates() {
    document.querySelectorAll(".lecture").forEach((lecture) => {
        let lectureId = lecture.getAttribute("data-id");
        let savedDate = localStorage.getItem(`lastWatched-${lectureId}`);
        if (savedDate) {
            document.getElementById(`lastWatched-${lectureId}`).textContent =
                savedDate;
        }
    });
}

// Load last watched dates when page loads
document.addEventListener("DOMContentLoaded", loadLastWatchedDates);
