### v2.6 (Exactly)

2013-09-02

* Added deg input for light source!
* Added rem mixin

### v2.5 (Shiny)

2013-08-14

* Added font-size mixin for fallback support if using rem
* Added google-font mixin
* Added grid system
* Added light-source and global-light functions

### v2.0 (Robin)

2013-08-01

Starting over. Sunglass is not a CSS3 mixin library anymore. This is now a library of functions and mixins that might be helpful for some and can be used as in addition to other libraries (I recommend [Bourbon](http://bourbon.io/)) or standalone.

### v1.9.5

2013-05-25

* Added overflow-wrap mixin

### v1.9

2013-05-17

* Rewritten all properties to use new prefix-mixin
* Keyframes output now much more compact
* You can choose which prefixes are allowed by adding "$prefix-config" to your SASS files with the names separated by spaces (e.g. "webkit moz spec". remember to always add "spec" which is the prefix-free version)
* Added hyphens mixin

### v1.8

2013-04-12

* Added background-color mixin
* Added selection mixin
* Merged all background related mixins into a single file

### v1.7

2013-04-11

* Added appearance mixin
* Added file() function
* Added letterpress mixin
* Changed clear-after. Is now a placeholder selector
* Updated resize mixin
* Changed reset to html5doctor.com Reset stylesheet

### v1.6

2013-03-27

* Added CSS3-filter property
* Added calc() mixin

### v1.5.1

2013-03-26

* Created Git Repository
* Renamed to Sunglass

### v1.5

2013-03-25

* Added backface-visibility
* Added background-size
* Added appearance
* Added full CSS3-properties-mixins (e.g. @include border-top-left-radius(5px);)
* Updated linear-gradient to reflect new W3C-standards (please use new syntax)
* Added $ie-filters boolean-variable in CSS3 (default: false)

### v1.1

2013-03-22

* Split linear-gradient and radial-gradient into easy and custom mixins
* Updated Normalize to v2.1.0

### v1.0

2013-03-19

* Engage!
