module.exports = function(grunt) {

  grunt.initConfig({

    bwr: grunt.file.readJSON("bower.json"),

    concat: {
      dist: {
        options: {
          banner: "/*!\n" +
                  "* <%= bwr.name %> - <%= bwr.description %>\n" +
                  "* v<%= bwr.version %>\n" +
                  "* <%= bwr.homepage %>\n" +
                  "*/\n\n"
        },
        src: ["src/core/_defaults.scss", "src/**/*.scss"],
        dest: "_sunglass.scss"
      }
    },

    sass: {
      test: {
        options: {
          noCache: true,
          loadPath: ".",
          bundleExec: true
        },
        files: [
          {
            expand: true,
            src: ["tests/**/*.scss"],
            dest: ".",
            ext: ".css"
          }
        ]
      }
    },

    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      sass: {
        files: ["tests/**/*.scss", "src/**/*.scss"],
        tasks: ["sass"]
      },
      html: {
        files: ["tests/**/index.html"]
      }
    },

    connect: {
      test: {
        options: {
          port: 9000,
          base: "test"
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.registerTask("compile", ["concat", "sass"]);
  grunt.registerTask("default", ["watch"]);
};
