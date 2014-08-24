## Light & Shadow

    $sunglass: (
        global-light: 90deg // or use aliases: n, ne, e, se, s, sw, w, nw
    );

    _global-light(2px) -> 0 2px // Shorthand: _g(2px)
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

    _filter(one two three four five, two) -> one three four five
    _compact("one", "two", "three", false, "four", "", "five") -> "one", "two", "three", "four", "five"
    _split("one+two+three+four+five", "+") -> one, two, three, four, five

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

    _tint(#911, 30%) -> #b75858
    _shade(#911, 30%) -> #6b0b0b

    _cmyk(86,0,17,37) -> #16a085
    _cmyka(86,0,17,37,0.5) -> rgba(22,160,133,0.5)

    _hsv(168,86,63) -> #16a085
    _hsva(168,86,63,0.5) -> rgba(22,160,133,0.5)

## Grid system

    $sunglass: (
        base-grid: 12,
        base-gap: 20px
    );

### Create your own semantic grids

    .container {
        @include _grid-container;

        .sidebar {
            // _column has both span and push optionally included, with a span default of 1
            @include _column(3, 1);
        }

        .main {
            // but you can assign each one seperately (_column is necessary though)
            @include _column;
            @include _span(7);
            @include _push(1);
        }
    }

### The quick way

    @include _generate-grid(grid-container, col-, col-push-);

## Utils

### Paths

    $sunglass: (
        base-img-path: "../images/"
    );
    _img("filename.png") -> url("../images/filename.png")

    $sunglass: (
        base-icon-path: "../icons/"
    );
    _icon("filename.png") -> url("../icons/filename.png")

### _google-font()

    @include _google-font(Open Sans, 400 400italic 600 700, https);

##### Result:

    @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600,700");

### rem()

    $sunglass: (
        base-font-size: 13px,
        rem-fallback: true
    );

    @include _rem(padding, 2rem);

##### Result:

    padding: 26px;
    padding: 2rem;
