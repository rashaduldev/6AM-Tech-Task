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
