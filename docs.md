## Light & Shadow

global-light() gives you a consistent source of light for all your shadow stuff, just like you're used to in Photoshop!

    $global-light: 90deg !default; // or use aliases like n, sw, ne, ...

    _global-light(2px) -> 0 2px // Shorthand: _gl(2px)

    _local-light(nw, 2px) -> 2px 2px

    _long-shadow(#107360, 50px) -> #0e6756 -1px -1px 0, #0e6756 -2px -2px 0, #0e6856 -3px -3px 0, ...

## Functions for power users

### Strings

    _str-append("Sass", " kicks ass!") -> "Sass kicks ass!"
    _str-prepend("I know", "Not sure if ") -> "Not sure if I know"
    _str-contains("Is There Intelligent Life in Outer Space?", "Intelligent Life") -> true
    _str-count("How Much Wood Would a Woodchuck Chuck", "Wood") -> 2
    _str-join((one, two, three, four, five), "+") -> "one+two+three+four+five"

### Lists

    _filter()
    _split()

### Numbers

    _opposite(-1px 3px) -> 1px -3px
    _coords(216deg, 10px) -> -8.09017px 5.87785px
    _rem-to-px(2rem) -> 24px (based on $base-font-size: 12px)
    _strip-unit(-400px) -> -400

## Colors

    _random-color() -> #d925f0 *
    _random-color(grayscale) -> #e6e6e6 *
    _random-color(monochrome) -> black *
    * Not the actual output. Because it's random, d'uh!

    _cmyk(86,0,17,37) -> #16a085
    _cmyka(86,0,17,37,0.5) -> rgba(22,160,133,0.5)

    _hsv(168,86,63) -> #16a085
    _hsva(168,86,63,0.5) -> rgba(22,160,133,0.5)

    $imgbase: "../images/" !default;
    img("filename.png") -> url("../images/filename.png")

    $icobase: "../icons/" !default;
    icon("filename.png") -> url("../icons/filename.png")

## Mixins

### generate-grid()

    $grid: 12 !default;
    $gap: 20px !default;

    @include generate-grid($grid-class, $span-class, $offset-class, $grid: $grid, $gap: $gap);

### google-font()

    @include google-font(Open Sans,(400,300,600,700), https);

##### Result:

    @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700);

### letterpress()

    @include letterpress(#16a085);

##### Result:

    // Will - by default - use the $global-light setting

    text-shadow: rgba(0,0,0,0.7) 0 1px 0;
    color: #e7f5f2;

### rem()

    $base-font-size: 13px !default;
    $rem-fallback: true !default;

    @include rem(padding, 2rem);

##### Result:

    padding: 26px;
    padding: 2rem;

### clearfix()

    selector {
        @include clearfix;
    }

##### Result:

    selector {
        *zoom: 1;
    }
    selector:before,
    selector:after {
        content: " ";
        display: table;
    }
    selector:after {
        clear: both;
    }

## html5doctor.com Reset

    @import "sunglass/addons/reset";