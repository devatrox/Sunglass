![](http://cdn.devatrox.de/img/sunglass-logo.png)

**A mixin and functions library for Sass**

## Requirements
Sass 3.3+

## Installation

* Install with [Bower](http://bower.io/)

    `bower install sunglass --save-dev`

* Or Download the [latest release](https://github.com/devatrox/sunglass/releases) and put it wherever you like

* Import Sunglass into your Sass file

    `@import "path/to/sunglass";`

* Have fun!

## Light & Shadow

global-light() gives you a consistent source of light for all your shadow stuff, just like you're used to in Photoshop!

    $global-light: 90deg !default;

    global-light(2px) -> -2px -2px // Shorthand: gl()

    local-light(nw, 2px) -> 2px 2px

    long-shadow(#107360, 50px) -> #0e6756 -1px -1px 0, #0e6756 -2px -2px 0, #0e6856 -3px -3px 0, ...

## Functions

    cmyk(86,0,17,37) -> #16a085
    cmyka(86,0,17,37,0.5) -> rgba(22,160,133,0.5)

    hsv(168,86,63) -> #16a085
    hsva(168,86,63,0.5) -> rgba(22,160,133,0.5)

    $imgbase: "../images/" !default;
    img("filename.png") -> url("../images/filename.png")

    $icobase: "../icons/" !default;
    icon("filename.png") -> url("../icons/filename.png")

    reverse(2em -4em) -> -2em 4em

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
