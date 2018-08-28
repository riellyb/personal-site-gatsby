$(function() {
    var isScrolling = false;
    var offset = 60;
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width <= 640) {
        offset = 120;
    }

    //scrolls to contact section
    $('.contact-link').click(function(event) {
        isScrolling = true;
        var sectionTop = $('#contact').offset().top - offset,
            windowTop = window.scrollY,
            height = Math.abs(sectionTop - windowTop);
        $('html, body').animate({ scrollTop: sectionTop }, getAnimationTime(sectionTop), function() {
            isScrolling = false;
        });
    });
    //scrolls page to section of nav that was clicked
    $('.main-nav-item').click(function(event) {
        event.preventDefault();
        $this = $(this).find('a');
        if (!$this.hasClass('nav-active')) {
            $('.main-nav-item a').removeClass('nav-active');
            $this.addClass('nav-active');

            isScrolling = true;
            var link = $(this).children('a').attr('href'),
                sectionTop = $(link).offset().top - offset,
                windowTop = window.scrollY,
                height = Math.abs(sectionTop - windowTop);

            $('html, body').animate({ scrollTop: sectionTop }, getAnimationTime(height), function() {
                isScrolling = false;
            });
        }
    });

    function getAnimationTime(height) {
        var msPerHeight = 1,
            minRange = 500, //minimal animation time
            maxRange = 1500, //Maximal animation time
            time = height * msPerHeight;

        time = Math.min(time, maxRange);
        time = Math.max(time, minRange);
        return time;
    }


   

    var aChildren = $('nav li').children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i = 0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function() {
        debounce(highlightNav(), 20);
    });
    highlightNav();


    //debounce
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    //highlights the current section of the page based on scroll position
    function highlightNav() {
        if (!isScrolling) {


            var windowPos = $(window).scrollTop() + offset; // get the offset of the window from the top of page
            var windowHeight = $(window).height(); // get the height of the window
            var docHeight = $(document).height();

            for (var i = 0; i < aArray.length; i++) {
                var theID = aArray[i];
                var divPos = $(theID).offset().top; // get the offset of the div from the top of page
                var divHeight = $(theID).outerHeight(); // get the height of the div in question
                if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                    $("a[href='" + theID + "']").addClass('nav-active');
                } else {
                    $("a[href='" + theID + "']").removeClass('nav-active');
                }
            }

            if (windowPos + windowHeight >= docHeight) {
                if (!$('nav li:last-child a').hasClass('nav-active')) {
                    var navActiveCurrent = $('.nav-active').attr('href');
                    $("a[href='" + navActiveCurrent + "']").removeClass('nav-active');
                    $('nav li:last-child a').addClass('nav-active');
                }
            }
        }
    }

    const pressed = [];
    const secretCode = 'cat';
    const secretCat = 'dog';
    const secretDevare = 'del';
    //listen for our secret codes to be typed
    window.addEventListener('keyup', (e) => {
        pressed.push(e.key);
        pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
        if (pressed.join('').includes(secretCode) || pressed.join('').includes(secretCat)) {
            addCatImage();
        } else if (pressed.join('').includes(secretDevare)) {
            removeCatImages();
        }
    });

    //add random cat image from Cat API
    function addCatImage() {
        const image = new Image(),
            main = document.querySelector('.main');

        image.src = 'http://thecatapi.com/api/images/get?format=src&type=jpg&size=small' + new Date().getTime();


        image.onload = function() {
            var min_height = window.scrollY;
            var max_height = min_height + window.innerHeight;
            var max_width = window.innerWidth - image.width;

            var randomCoordinate = function() {
                var r = [];
                var x = Math.floor(Math.random() * max_width);
                // Get random top position in the window
                var y = Math.random() * (max_height - min_height) + min_height;
                r = [x, y];
                return r;
            };

            var xy = randomCoordinate();

            image.style.top = xy[1] + 'px';
            image.style.left = xy[0] + 'px';
            image.classList.add('cat');
            main.append(image);
            image.classList.add('active');

            // if you click a cat image it will be removed
            image.addEventListener('click', function(e) {
                removeCatImages(image);
            });
        };
    }
    //devared cat images 
    function removeCatImages(image = '') {
        if (image === '') {
            const images = document.querySelectorAll('.cat');
            images.forEach(function(cat) {
                removeImage(cat);
            });
        } else {
            removeImage(image);
        }
        //animate and devare image
        function removeImage(image) {
            image.classList.add('devared');
            setTimeout(function() { image.parentNode.removeChild(image); }, 500);
        }

    }
});