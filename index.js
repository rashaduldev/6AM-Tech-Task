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
    let visibleCards = getVisibleCards();
    const totalCards = $(".card").length;
    let cardWidth = $(".card").outerWidth(true);

    $("#prevBtn").hide(); 

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
            return 2;
        } else {
            return 4; 
        }
    }

    function updateSlider() {
        visibleCards = getVisibleCards();
        cardWidth = $(".card").outerWidth(true); // Update card width
        currentIndex = 0; // Reset index when resizing
        slide();
        updateButtons();
    }

    $(window).resize(updateSlider);

    updateButtons();
});

// Countdown
$(document).ready(function () {
    // Countdown Timer
    function startCountdown(targetDate) {
        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = targetDate - now;

            if (timeLeft <= 0) {
                $("#days, #hours, #minutes, #seconds").text("00");
                clearInterval(interval); // Stop the countdown
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            $("#days").text(days.toString().padStart(2, '0'));
            $("#hours").text(hours.toString().padStart(2, '0'));
            $("#minutes").text(minutes.toString().padStart(2, '0'));
            $("#seconds").text(seconds.toString().padStart(2, '0'));
        }

        const interval = setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call to prevent 1-sec delay
    }

    const countdownEndTime = new Date("March 21, 2025 09:20:59").getTime();
    startCountdown(countdownEndTime);

    // Dropdown Menu
    const dropdownButton = $("#dropdownButton");
    const dropdownMenu = $("#dropdownMenu");

    dropdownButton.click(function (event) {
        event.stopPropagation();
        dropdownMenu.toggleClass("show");
    });

    $(".dropdown-menu li").click(function () {
        dropdownButton.html(`${$(this).text()} <i class="fas fa-chevron-down"></i>`);
        dropdownMenu.removeClass("show");
    });

    $(document).click(function (event) {
        if (!dropdownButton.is(event.target) && !dropdownMenu.is(event.target) && dropdownMenu.has(event.target).length === 0) {
            dropdownMenu.removeClass("show");
        }
    });

    // Drawer
    $("#drawer-toggle").click(function () {
        $("#drawer").addClass("open");
        $("#overlay").addClass("active");
    });

    $("#close-drawer, #overlay").click(function () {
        $("#drawer").removeClass("open");
        $("#overlay").removeClass("active");
    });

    $(".category-toggle").click(function () {
        const categoryMenu = $(this).next();
        categoryMenu.css("maxHeight", categoryMenu.css("maxHeight") ? null : categoryMenu.prop("scrollHeight") + "px");
        $(this).toggleClass("active");
    });
});