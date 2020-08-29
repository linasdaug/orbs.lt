function SmartSlider (sliderElement) {
    this.pages = [];
    this.currentSlide = 1;
    this.isChanging = false;
    this.keyUp = {38:1, 33:1};
    this.keyDown = {40:1, 34:1};


    this.init = function () {
        var self = this;

        var content = document.getElementById("slider-wrapper");
        content.classList.add('slider__body');

        // control scrolling
        whatWheel = 'onwheel' in document.createElement('div') ? 'wheel' : document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
        window.addEventListener(whatWheel, function (e) {

            var direction = e.wheelDelta || e.deltaY;
            if (direction > 0) {
                self.changeSlide(-1);
            } else {
                self.changeSlide(1);
            }
        });

        // allow keyboard input
        window.addEventListener('keydown', function (e) {
            if (self.keyUp[e.keyCode]) {
                self.changeSlide(-1);
            } else if (self.keyDown[e.keyCode]) {
                self.changeSlide(1);
            }
        });

        // page change animation is done
        self.detectChangeEnd() && document.querySelector(sliderElement).addEventListener(self.detectChangeEnd(), function () {
            if (self.isChanging) {
                setTimeout(function() {
                    self.isChanging = false;
                    window.location.hash = document.querySelector('[data-slider-index="' + self.currentSlide + '"]').id;
                }, 400);
            }
        });

        // set up page and build visual indicators
        document.querySelector(sliderElement).classList.add('slider__container');
        var indicatorContainer = document.createElement('div');
        indicatorContainer.classList.add('slider__indicators');

        var index = 1;
        [].forEach.call(document.querySelectorAll(sliderElement + ' > *'), function (section) {

            var indicator = document.createElement('a');
            indicator.classList.add('slider__indicator')
            indicator.setAttribute('data-slider-target-index', index);
            indicatorContainer.appendChild(indicator);

            section.classList.add('slider__page');
            self.pages.push(section);
            section.setAttribute('data-slider-index', index++);
        });

        document.body.appendChild(indicatorContainer);
        document.querySelector('a[data-slider-target-index = "' + self.currentSlide +'"]').classList.add('slider__indicator--active');


        // stuff for touch devices
        var touchStartPos = 0;
        var touchStopPos = 0;
        var touchMinLength = 90;
        document.addEventListener('touchstart', function (e) {
            e.preventDefault();
            if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
                var touch = e.touches[0] || e.changedTouches[0];
                touchStartPos = touch.pageY;
            }
        });
        document.addEventListener('touchend', function (e) {
            e.preventDefault();
            if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
                var touch = e.touches[0] || e.changedTouches[0];
                touchStopPos = touch.pageY;
            }
            if (touchStartPos + touchMinLength < touchStopPos) {
                self.changeSlide(-1);
            } else if (touchStartPos > touchStopPos + touchMinLength) {
                self.changeSlide(1);
            }
        });

        if (location.hash) {
            setTimeout(function () {
                window.scrollTo(0, 0);
                self.gotoSlide(location.hash);
            }, 1);
        };
    }; // init

    // prevent double scrolling
    this.detectChangeEnd = function () {
        var transition;
        var e = document.createElement('foobar');
        var transitions = {
            'transition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        };

        for(transition in transitions) {
            if (e.style[transition] !== undefined) {
                return transitions[transition];
            }
        }
        return true;
    };


    // handle css change
    this.changeCss = function (obj, styles) {
        for (var _style in styles
            ) {
            if (obj.style[_style] !== undefined) {
                obj.style[_style] = styles[_style];
            }
        }
    };

    // handle page/section change
    this.changeSlide = function (direction) {

        // already doing it or last/first page, staph plz
        if (this.isChanging || (direction == 1 && this.currentSlide == this.pages.length) || (direction == -1 && this.currentSlide == 1)) {
            return;
        }

        // change page
        this.currentSlide += direction;
        this.isChanging = true;
        this.changeCss(document.querySelector(sliderElement), {
            transform: 'translate3d(0, ' + -(this.currentSlide - 1) * 100 + '%, 0)'
        });

        // change dots
        document.querySelector('a.slider__indicator--active').classList.remove('slider__indicator--active');
        document.querySelector('a[data-slider-target-index="' + this.currentSlide +'"]').classList.add('slider__indicator--active');
    };

    // go to spesific slide if it exists
    this.gotoSlide = function (where) {
        if (where !== null) {
            var target = document.querySelector(where).getAttribute('data-slider-index');
            if (target != this.currentSlide && document.querySelector(where)) {
                this.changeSlide(target - this.currentSlide);
            }
        }
    };
};
