# How to reproduce

```bash
npm i && gulp stylus
```
 
#Expected Result
```
Using gulpfile ~/dev/github/gulp-stylus-accord/gulpfile.js
Starting 'stylus'...
Finished 'stylus' after 99 ms
```

# Actual Result
With `npm@2.14.7` everything works fine

With `npm` the stylus task throws the following error

```
Potentially unhandled rejection [2] Error: ..../gulp-stylus-accord/stylus_files_1/index.styl:5:15
   1| @require "emptyRequireInOtherFolder.styl"
   2| @import "./variables.styl"
   3|
   4| .menu
   5|   color: menu.primary.color
--------------------^

menu has no property .primary
    at ".menu" (..../gulp-stylus-accord/stylus_files_1/index.styl:3:27)

    at Evaluator.visitMember (..../gulp-stylus-accord/node_modules/stylus/lib/visitor/evaluator.js:333:11)
```