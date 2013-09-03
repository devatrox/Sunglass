![](http://cdn.devatrox.de/img/sunglass-logo.png)

Mixin and functions library for Sass

## Requirements
Sass 3.2+

## Install
* Download and put the "sunglass" folder in your Sass directory
* Import Sunglass in your Sass file

        @import "sunglass/sunglass";

* Have fun!

## Light & Shadow

global-light() gives you a consistent source of light for all your shadow stuff, just like you're used to in Photoshop!

    $global-light: se;

    global-light(2px) -> -2px -2px

    local-light(nw, 2px) -> 2px 2px

    long-shadow(#107360, 50px) -> #0e6756 -1px -1px 0, #0e6756 -2px -2px 0, #0e6856 -3px -3px 0, ...

## Functions

    cmyk(86,0,17,37) -> #16a085
    cmyka(86,0,17,37,0.5) -> rgba(22,160,133,0.5)

    hsv(168,86,63) -> #16a085
    hsva(168,86,63,0.5) -> rgba(22,160,133,0.5)

    $imgbase: "../images/";
    img("filename.png") -> url("../images/filename.png")

    $icobase: "../icons/";
    icon("filename.png") -> url("../icons/filename.png")

    reverse(2em -4em) -> -2em 4em

## Mixins

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

    $base-font-size: 14px;
    @include rem(font-size, 2rem);

##### Result:

    font-size: 28px;
    font-size: 2rem;

## html5doctor.com Reset

    @import "sunglass/addons/reset";

## Grid system

    $grid: 12;
    $gap: 4%;
    @import "sunglass/addons/grid";

    or

    $gap: 4%;
    @import "sunglass/addons/bootstrap-grid";
