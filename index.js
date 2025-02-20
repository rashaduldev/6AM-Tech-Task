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
    const totalCards = $(".card").length;
    const visibleCards = 4;
    const cardWidth = $(".card").outerWidth(true);

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

    updateButtons();
});

// product description
document.addEventListener("DOMContentLoaded", function () {
    const descriptions = document.querySelectorAll(".product-description");

    descriptions.forEach(des => {
        let fullText = des.innerText;
        let words = fullText.split(" ");

        if (words.length > 3) {
            let shortText = words.slice(0, 3).join(" ") + " ...";
            des.innerText = shortText;
            des.setAttribute("title", fullText);
        }
    });
});

