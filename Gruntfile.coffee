module.exports = (grunt) ->
  grunt.initConfig

    bwr: grunt.file.readJSON "bower.json"

    concat:
      dist:
        options:
          banner: "/*! #{grunt.util.linefeed}* <%= bwr.name %> - <%= bwr.description %> #{grunt.util.linefeed}* v<%= bwr.version %> #{grunt.util.linefeed}* <%= bwr.homepage %> #{grunt.util.linefeed}*/#{grunt.util.linefeed}#{grunt.util.linefeed}"

        src: [
          "src/_defaults.scss"
          "src/functions/*.scss"
          "src/mixins/*.scss"
        ]
        dest: "_sunglass.scss"

    copy:
      dist:
        files: [
          expand: true,
          cwd: "src/addons"
          src: ["**/*.scss"]
          dest: "addons"
        ]

    sass:
      test:
        options:
          # sourcemap: true
          noCache: true

        files: [
          expand: true,
          cwd: "tests/",
          src: ["**/*.scss"],
          dest: "tests/",
          ext: ".css"
        ]

    watch:
      test:
        options:
          livereload: true
          spawn: false
        files: [
          "tests/**/*.scss"
          "tests/**/index.html"
          "src/**/*.scss"
        ]
        tasks: ["sass"]

    connect:
      test:
        options:
          port: 9000
          base: "test"

  grunt.loadNpmTasks "grunt-contrib-connect"
  grunt.loadNpmTasks "grunt-contrib-sass"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-concat"
  grunt.loadNpmTasks "grunt-contrib-copy"

  grunt.registerTask "dist", [
    "concat"
    "copy"
  ]

  grunt.registerTask "default", [
    "connect"
    "watch"
  ]
