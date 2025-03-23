/* script.js */
document.addEventListener("DOMContentLoaded", function () {
    function showSection(sectionId) {
        document.querySelectorAll(".section").forEach((section) => {
            section.classList.remove("active");
        });
        document.getElementById(sectionId).classList.add("active");
    }

    window.showSection = showSection;

    // Profile Editing in Dashboard
    const profileImageInput = document.getElementById("profileImageInput");
    const profileImage = document.getElementById("profileImage");
    const usernameInput = document.getElementById("dashboardUsername");
    const emailInput = document.getElementById("dashboardEmail");
    const profileUsername = document.getElementById("profileUsername");
    const profileEmail = document.getElementById("profileEmail");

    profileImageInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profileImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    window.updateDashboardProfile = function () {
        profileUsername.textContent = usernameInput.value;
        profileEmail.textContent = emailInput.value;
        alert("Profile updated!");
    };

    // Video Upload Functionality
    window.publishVideo = function () {
        const videoInput = document.getElementById("videoUpload");
        const videoTitle = document.getElementById("videoTitle").value;
        const videoList = document.getElementById("videoList");
        const videoHub = document.getElementById("videoHub");

        if (videoInput.files.length === 0) {
            alert("Please select a video file to upload.");
            return;
        }

        const file = videoInput.files[0];
        const allowedFormats = ["video/mp4", "video/webm", "video/ogg"];

        if (!allowedFormats.includes(file.type)) {
            alert(
                "Invalid file format. Please upload a valid video file (MP4, WEBM, OGG)."
            );
            return;
        }

        if (videoTitle.trim() === "") {
            alert("Please enter a video title.");
            return;
        }

        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${videoTitle}</strong><br><video controls width="300"><source src="${URL.createObjectURL(
            file
        )}" type="${file.type}"></video>`;
        videoList.appendChild(listItem);
        videoHub.appendChild(listItem);

        alert("Video Published!");
    };

    // Analytics Chart with Chart.js
    const ctx = document.getElementById("viewTrendsChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: [
                "September 2024",
                "October 2024",
                "November 2024",
                "December 2024",
                "January 2025",
                "Feburary 2025",
                "March 2025",
            ],
            datasets: [
                {
                    label: "Views",
                    data: [12, 19, 3, 5, 2, 3, 7],
                    borderColor: "#172619",
                    borderWidth: 2,
                    fill: false,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
});
