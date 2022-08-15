//for home page Image slider
    var currentIndex = 0;
    displaySlides(currentIndex);
    function goSlide(num) {
        displaySlides(currentIndex += num);
    }
    function displaySlides(num) {
        var x;
        var slides = document.getElementsByClassName("slide");
        if (num > slides.length) { currentIndex = 1 }
        if (num < 1) { currentIndex = slides.length }
        for (x = 0; x < slides.length; x++) {
            slides[x].style.display = "none";
        }
        slides[currentIndex - 1].style.display = "block";
    }
