![](http://cdn.devatrox.de/img/sunglass-logo.png)

**A mixin and functions library for Sass**

# DEPRECATED

Since the 4.0 branch turned out to be very different to master and missing a lot of things that might be precious to some people I decided to move it out into a new repository, named [sunglass-core](https://github.com/devatrox/sunglass-core) (very creative I know). It is much more stable and focused on functions mainly. My plan is to bring back some of the old stuff (like the grid) back as optional plugins. Sorry for any inconveinence.

## Requirements
RubySass 3.3+

## Installation

* Install with [Bower](http://bower.io/)

    `bower install sunglass --save-dev`

* Or Download the [latest release](https://github.com/devatrox/Sunglass/releases) and put it wherever you like

* Import Sunglass into your Sass file

    `@import "path/to/sunglass";`

* Change settings before the `@import` statement (optional)
    ```` sass
    $sunglass: (
      base-gap: 30px,
      base-font-size: 18px
    );
    ````


I will create a detailed documentation later on. Until then, head over to the [makeshift docs](docs.md)
