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
    { title: "Measures of Central Tendency and Spread", author: "Marcus Chew" },
    { title: "Data Collection and Representation", author: "Julian Fairchild" },
    { title: "Properties and Constructions", author: "Catherine Bellamy" },
    { title: "Quadratic Equation Applications", author: "Kwame Osei" },
    { title: "Simultaneous Equation Applications", author: "Isabella Moretti" },
    { title: "Scatter Graphs and Correlation", author: "Marcus Chew" },
    { title: "Master Trigonometry", author: "Zhang Wei" },
    { title: "Advanced Trigonometry Techniques", author: "Liam Patterson" },
    { title: "Statistical Data Interpretation", author: "Sophia Nguyen" },
    { title: "Geometric Structures and Theorems", author: "Daniel Holt" },
    { title: "Applied Quadratic Equations", author: "Fatima Al-Mansour" },
    { title: "Analyzing Mean, Median, and Variability", author: "Noah Becker" },
    { title: "Correlation and Trend Analysis", author: "Elena Rodríguez" },
    {
        title: "Practical Uses of Simultaneous Equations",
        author: "Hiroshi Tanaka",
    },
    { title: "Understanding Linear Functions", author: "Maria Delgado" },
    { title: "Graphing Quadratic Functions", author: "Ethan Caldwell" },
    { title: "Exponential Growth and Decay", author: "Amira Hassan" },
    {
        title: "Factorising and Expanding Algebraic Expressions",
        author: "Liam Wright",
    },
    { title: "Solving Linear and Quadratic Equations", author: "Emily Carter" },
    {
        title: "Simultaneous Equations: Graphical and Algebraic Methods",
        author: "Oliver Kim",
    },
    { title: "Function Transformations", author: "Grace Thompson" },
    {
        title: "Understanding Rational and Reciprocal Functions",
        author: "David Zhang",
    },
    { title: "Piecewise and Step Functions", author: "Isabelle Laurent" },
    { title: "Exploring Absolute Value Graphs", author: "Nathaniel Scott" },
    { title: "Introduction to Sequences and Series", author: "Sophia Bennett" },
    { title: "Introduction to Inequalities", author: "William Turner" },
    {
        title: "Straight Line Graphs: Gradients and Intercepts",
        author: "Jessica Alvarez",
    },
];

function showSuggestions() {
    let input = document
        .getElementById("searchInput")
        .value.trim()
        .toLowerCase();
    let suggestionsBox = document.getElementById("suggestionsBox");
    let suggestionsList = document.getElementById("suggestionsList");

    // Clear previous suggestions
    suggestionsList.innerHTML = "";

    if (input.length === 0) {
        suggestionsList.style.display = "none";
        return;
    }

    let filteredSuggestions = suggestions.filter((item) =>
        item.title.toLowerCase().includes(input)
    );

    console.log("Input:", input);
    console.log("Filtered Results:", filteredSuggestions);

    if (filteredSuggestions.length > 0) {
        suggestionsList.style.display = "block";
        filteredSuggestions.forEach((item) => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `${item.title} <br><span style="color:#6b7684;">${item.author}</span>`;
            listItem.onclick = function () {
                document.getElementById("searchInput").value = item.title;
                suggestionsList.style.display = "none";
            };
            suggestionsList.appendChild(listItem);
        });
    } else {
        suggestionsList.style.display = "none";
    }
}

// Attach event listener
document
    .getElementById("searchInput")
    .addEventListener("input", showSuggestions);

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

function search() {
    document.getElementById("search-box").style.width = "50%";
    document.querySelector(".contents").style.opacity = "0.6";
    document.querySelector(".contents").style.backgroundColor =
        "rgba(0, 0, 0, 0.6)";
    document.querySelector("#search-box").style.padding = "1%";
}

function closeSearch() {
    document.getElementById("search-box").style.width = "0";
    document.querySelector(".contents").style.opacity = "1";
    document.querySelector(".contents").style.backgroundColor = "";
    document.querySelector("#search-box").style.padding = "0";
}

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
