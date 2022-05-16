    function initApp() {
        const pangination = document.querySelector(".pangination");

        pangination.addEventListener('click', (event) => {
            initPangination(event);
        });


        function initPangination(event) {
            if (event.target.classList.contains('dot') && !event.target.classList.contains('selected')) {
                const activeDot = document.querySelector('.dot.selected');
                activeDot.classList.remove('selected');
                event.target.classList.add('selected');
                nextSlide();
            }
        }

        function nextSlide() {
            if (index == text.length - 1 && index == images.length - 1) {
                index = 0;
                selectedText(index);
                selectedImg(index);
            } else {
                index += 1;
                selectedText(index);
                selectedImg(index);
            }
        }
    };

    initApp();

    const images = document.querySelectorAll(".slide_image");
    const text = document.querySelectorAll(".slide_text");
    let index = 0;

    const selectedText = n => {
        for (slide_text of text) {
            slide_text.classList.remove('active');
        }
        text[n].classList.add('active');
    }

    const selectedImg = n => {
        for (slide_image of images) {
            slide_image.classList.remove('active');
        }
        images[n].classList.add('active');
    }