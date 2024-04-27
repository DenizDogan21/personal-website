document.addEventListener("DOMContentLoaded", function() {
    const projectListItems = document.querySelectorAll(".project");

    projectListItems.forEach(function(item) {
        item.addEventListener("mouseover", function() {
            const imgSrc = this.dataset.img; // Use the data-img attribute directly
            const projectImage = document.querySelector(".project-image img");
            projectImage.src = imgSrc;
            projectImage.style.display = "block";
        });

        item.addEventListener("mouseout", function() {
            const projectImage = document.querySelector(".project-image img");
            projectImage.style.display = "none";
        });

        item.addEventListener("click", function() {
            const projectName = this.innerText.toLowerCase().replace(/\s/g, "_"); // Convert project name to lowercase and remove spaces
            window.location.href = "../project_pages/"+projectName + ".html"; // Redirect to project page
        });
    });
});
