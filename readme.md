# Sunglass

Mixin library for Sass

## Requirements
Sass 3.2+

## Install
* Download and put the "sunglass" folder in your Sass directory
* Import Sunglass in your Sass documents as needed

        @import "sunglass/helpers";
        @import "sunglass/css3";

        or simply

        @import "sunglass/all";

## Helpers

    black(0.5) -> rgba(0,0,0,0.5)
    white(0.5) -> rgba(255,255,255,0.5)

    percent(500, 10) -> 50

    @include contrast($bgcolor);

    @extend %clear-after;

    $smartphones: 640px;
    $tablets: 700px;
    $smallscreen: 1024px;
    @include media($size, $device: screen, $minmax: max-width);

## CSS3

    @include animation($string);
    @include appearance($string);
    @include backface-visibility($string);
    @include background-color($color, $behind: null);
    @include background-size($string);
    @include border-radius($radius);
    @include box-shadow($string);
    @include keyframes($name) {
        @content;
    }
    @include filter($string);
    @include hyphens($string);
    @include linear-gradient($from, $to, $dir: "to bottom");
    @include linear-gradient-custom($string);
    @include opacity($string);
    @include radial-gradient($from, $to, $type: ellipse farthest-corner, $origin: center);
    @include radial-gradient-custom($string);
    @include resize($string);
    @include selection {
        @content;
    }
    @include transform($string);
    @include transition($string);

## Resets

    @import "sunglass/normalize";
    @import "sunglass/reset";

## Changelog:

### v1.0

2013-03-19

* Engage!

### v1.1

2013-03-22

* Split linear-gradient and radial-gradient into easy and custom mixins
* Updated Normalize to v2.1.0

### v1.5

2013-03-25

* Added backface-visibility
* Added background-size
* Added appearance
* Added full CSS3-properties-mixins (e.g. @include border-top-left-radius(5px);)
* Updated linear-gradient to reflect new W3C-standards (please use new syntax)
* Added $ie-filters boolean-variable in CSS3 (default: false)

### v1.5.1

2013-03-26

* Created Git Repository
* Renamed to Sunglass

### v1.6

2013-03-27

* Added CSS3-filter property
* Added calc() mixin

### v1.7

2013-04-11

* Added appearance mixin
* Added file() function
* Added letterpress mixin
* Changed clear-after. Is now a placeholder selector
* Updated resize mixin
* Changed reset to html5doctor.com Reset stylesheet

### v1.8

2013-04-12

* Added background-color mixin
* Added selection mixin
* Merged all background related mixins into a single file

### v1.9

2013-05-17

* Rewritten all properties to use new prefix-mixin
* Keyframes output now much more compact
* You can choose which prefixes are allowed by adding "$prefix-config" to your SASS files with the names separated by spaces (e.g. "webkit moz spec". remember to always add "spec" which is the prefix-free version)
* Added hyphens mixin

## ToDo:

* Fine controlled IE-compatibility configuration
* More CSS3 mixins
* font-face
*
