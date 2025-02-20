$(document).ready(function(){
    let currentIndex = 0;
    const totalCards = $(".card").length;
    const visibleCards = 4;
    const cardWidth = $(".card").outerWidth(true);

    $("#nextBtn").click(function(){
        if (currentIndex < totalCards - visibleCards) {
            currentIndex++;
            $(".card-slider").css("transform", `translateX(-${currentIndex * cardWidth}px)`);
        }
    });

    $("#prevBtn").click(function(){
        if (currentIndex > 0) {
            currentIndex--;
            $(".card-slider").css("transform", `translateX(-${currentIndex * cardWidth}px)`);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const descriptions = document.querySelectorAll(".product-description");
    descriptions.forEach(des => {
        let words = des.innerText.split(" ");
        if (words.length > 3) {
            des.innerText = words.slice(0, 3).join(" ") + " ...";
        }
    });
});
