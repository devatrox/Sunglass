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
        src: [
          "src/core/_defaults.scss",
          "src/core/__private/_legacy-vars.scss",
          "src/core/__private/_internal-vars.scss",
          "src/**/*.scss"
        ],
        dest: "_sunglass.scss"
      }
    },

    sass: {
      test: {
        options: {
          noCache: true,
          loadPath: [
            "src",
            "node_modules",
            "specs"
          ],
          bundleExec: true,
          style: "expanded"
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

    bootcamp: {
      test: {
        files: {
          src: ['tests/functions/*.css']
        }
      }
    },

    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      sass: {
        files: [
          "specs/**/*.scss",
          "tests/**/*.scss",
          "src/**/*.scss"
        ],
        tasks: ["test"]
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
  grunt.loadNpmTasks("bootcamp");

  grunt.registerTask("test", ["sass", "bootcamp"]);
  grunt.registerTask("build", ["concat"]);
  grunt.registerTask("default", ["watch"]);
};
