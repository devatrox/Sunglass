![](http://cdn.devatrox.de/img/sunglass-logo.png)

**A mixin and functions library for Sass**

## 4.0 branch notes

I am rebuilding Sunglass, getting rid of stuff and make sure it works with libsass. Missing functions and mixins (like grids and shadows) from previous versions might come back in the future but probably in the form of separate repos. I want Sunglass to be a core library for advanced Sass functions.

### Plans with this upcoming release

- Heavy unit testing with [true](https://github.com/ericam/true) and [mocha](https://github.com/mochajs/mocha)
- Better documentation
- [libsass](https://github.com/sass/libsass) ready
- Prefix everything with "sg-" but offer a way to use it without prefixes

-- end of branch notes --

## Requirements
Sass 3.3+

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
