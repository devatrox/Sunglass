module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    bwr: grunt.file.readJSON('bower.json'),

    concat: {
      dist: {
        options: {
          banner: '/*!\n' +
                  '* <%= bwr.name %> - <%= bwr.description %>\n' +
                  '* v<%= bwr.version %>\n' +
                  '* <%= bwr.homepage %>\n' +
                  '*/\n\n'
        },
        src: [
          'src/core/_defaults.scss',
          'src/core/__private/_legacy-vars.scss',
          'src/core/__private/_internal-vars.scss',
          'src/**/*.scss'
        ],
        dest: '_sunglass.scss'
      }
    },

    watch: {
      options: {
        spawn: false
      },
      test: {
        files: [
          'test/**/*.scss',
          'src/**/*.scss',
        ],
        tasks: ['test']
      },
    },
  });
};
