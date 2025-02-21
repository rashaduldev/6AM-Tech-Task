// Dinamic slider
$(document).ready(function () {
    let currentIndex = 0;
    const totalCards = $(".imgcard").length;
    const cardWidth = $(".imgcard").outerWidth();
    const autoSlideInterval = 3000; 

    function updateSlider() {
        $(".img-card-slider").css("transform", `translateX(-${currentIndex * cardWidth}px)`);
        updateDots();
    }

    function updateDots() {
        $(".dot").removeClass("active");
        $(".dot").eq(currentIndex).addClass("active");
    }

    $(".dot").click(function () {
        currentIndex = $(this).index();
        updateSlider();
    });

    // Auto Slide Function
    setInterval(function () {
        currentIndex = (currentIndex + 1) % totalCards;
        updateSlider();
    }, autoSlideInterval);

    updateDots();
});

// Product Slideber
$(document).ready(function () {
    let currentIndex = 0;
    let visibleCards = getVisibleCards(); // Dynamically get visible cards count
    const totalCards = $(".card").length;
    let cardWidth = $(".card").outerWidth(true);

    $("#prevBtn").hide(); // Initially hide left button

    function updateButtons() {
        $("#prevBtn").toggle(currentIndex > 0);
        $("#nextBtn").toggle(currentIndex < totalCards - visibleCards);
    }

    function slide() {
        $(".card-slider").css({
            transform: `translateX(-${currentIndex * cardWidth}px)`,
            transition: "transform 0.5s ease-in-out" // Smooth movement
        });
    }

    $("#nextBtn").click(function () {
        if (currentIndex < totalCards - visibleCards) {
            currentIndex++;
            slide();
            updateButtons();
        }
    });

    $("#prevBtn").click(function () {
        if (currentIndex > 0) {
            currentIndex--;
            slide();
            updateButtons();
        }
    });

    function getVisibleCards() {
        if ($(window).width() <= 768) {
            return 2; // Show 2 cards on smaller screens
        } else {
            return 4; // Default to 4 on larger screens
        }
    }

    function updateSlider() {
        visibleCards = getVisibleCards();
        cardWidth = $(".card").outerWidth(true); // Update card width
        currentIndex = 0; // Reset index when resizing
        slide();
        updateButtons();
    }

    $(window).resize(updateSlider); // Adjust on window resize

    updateButtons();
});

// Countdown
    function startCountdown(targetDate) {
        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = targetDate - now;

            if (timeLeft <= 0) {
                document.getElementById("days").innerText = "00";
                document.getElementById("hours").innerText = "00";
                document.getElementById("minutes").innerText = "00";
                document.getElementById("seconds").innerText = "00";
                clearInterval(interval); // Stop the countdown
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = days.toString().padStart(2, '0');
            document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
            document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
        }

        const interval = setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call to prevent 1-sec delay
    }

    // Set the countdown to a future date (YYYY, MM (0-based), DD, HH, MM, SS)
    // const countdownEndTime = new Date(2025, 2, 21, 23, 59, 59).getTime();
    // Define the countdown end time in a human-readable format
    const countdownEndTime = new Date("March 21, 2025 09:20:59").getTime();
    startCountdown(countdownEndTime);

    document.addEventListener("DOMContentLoaded", function () {
        const dropdownButton = document.getElementById("dropdownButton");
        const dropdownMenu = document.getElementById("dropdownMenu");
        const dropdownIcon = dropdownButton.querySelector("i"); // Select the icon
    
        // Open/close dropdown on button click
        dropdownButton.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent event bubbling
            dropdownMenu.classList.toggle("show");
        });
    
        // Change only text on item selection, keeping the icon
        document.querySelectorAll(".dropdown-menu li").forEach(item => {
            item.addEventListener("click", function () {
                dropdownButton.innerHTML = `${this.innerText} <i class="fas fa-chevron-down"></i>`;
                dropdownMenu.classList.remove("show"); // Close dropdown after selection
            });
        });
    
        // Close dropdown when clicking outside
        document.addEventListener("click", function (event) {
            if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove("show");
            }
        });
    });
    
    // Drawer
    document.addEventListener("DOMContentLoaded", function () {
        const drawerToggle = document.getElementById("drawer-toggle");
        const drawer = document.getElementById("drawer");
        const closeDrawer = document.getElementById("close-drawer");
        const overlay = document.getElementById("overlay");
        const categoryToggles = document.querySelectorAll(".category-toggle");
    
        // Open Drawer
        drawerToggle.addEventListener("click", function () {
            drawer.classList.add("open");
            overlay.classList.add("active");
        });
    
        // Close Drawer
        closeDrawer.addEventListener("click", function () {
            drawer.classList.remove("open");
            overlay.classList.remove("active");
        });
    
        // Close when clicking outside the drawer
        overlay.addEventListener("click", function () {
            drawer.classList.remove("open");
            overlay.classList.remove("active");
        });
    
        // Toggle Category Menu
        categoryToggles.forEach(toggle => {
            toggle.addEventListener("click", function () {
                const categoryMenu = this.nextElementSibling;
                if (categoryMenu.style.maxHeight) {
                    categoryMenu.style.maxHeight = null;
                } else {
                    categoryMenu.style.maxHeight = categoryMenu.scrollHeight + "px";
                }
                this.classList.toggle("active");
            });
        });
    });
    