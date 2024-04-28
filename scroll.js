document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const titleSection = document.querySelector(".static-section"); // Get the title section
    
    const viewportHeight = window.innerHeight;

    window.addEventListener("scroll", function() {
        const currentScroll = window.pageYOffset;

        sections.forEach(function(section, index) {
            // Exclude the title section from the fade-in effect
            if (section !== titleSection) {
                const sectionTop = section.offsetTop - viewportHeight * 0.7; // Adjust this value to control when the fade-in starts
                const sectionBottom = sectionTop + section.offsetHeight;

                if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
                    const sectionId = section.getAttribute("id");
                    setActiveNavItem(sectionId);
                    section.classList.add("fade-in");
                }
            }
        });
    });

    // Trigger the initial scroll event to apply the fade-in effect to visible sections on load
    window.dispatchEvent(new Event("scroll"));
    
    function setActiveNavItem(id) {
        const navItems = document.querySelectorAll("nav ul li");
        navItems.forEach(function(item) {
            const link = item.querySelector("a");
            if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }
});

