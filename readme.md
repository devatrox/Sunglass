![](http://cdn.devatrox.de/img/sunglass-logo.png)

Mixin and functions library for Sass

## Requirements
Sass 3.2+

## Install
* Download and put the "sunglass" folder in your Sass directory
* Import Sunglass in your Sass documents as needed

        @import "sunglass/sunglass";

* Have fun!

## Reset

    @import "sunglass/reset";

## Functions

    cmyk(86,0,17,37) -> #16a085
    cmyka(86,0,17,37,0.5) -> rgba(22,160,133,0.5)

    hsv(168,86,63) -> #16a085
    hsva(168,86,63,0.5) -> rgba(22,160,133,0.5)

    $imgbase: "../images/";
    img("filename.png") -> url("../images/filename.png")

    $icobase: "../icons/";
    icon("filename.png") -> url("../icons/filename.png")

    long-shadow(#16a085, 100) -> #139077 1px 1px 0, #139077 2px 2px 0, #139078 3px 3px 0, ...

## Mixins

### letterpress()

    @include letterpress(#16a085);

#### Result:

    text-shadow: rgba(0,0,0,0.7) 0 1px 0;
    color: #e7f5f2;
