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
          'src/core/_variables.scss',
          'src/**/*.scss'
        ],
        dest: 'dist/sunglass.scss'
      }
    },
  });
};
