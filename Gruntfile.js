module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      options: {
        debug: true,
        // plugin: [
        //   ['css-modulesify', {'output': 'output.css'}]
        // ],
        configure: function(b) {
          b.plugin(require('css-modulesify'), {
            output: './output.css'
          });
        }
      },
      dev: {
        src: ['*.js'],
        dest: 'bundle.js'
      }
    },
  });

  grunt.loadNpmTasks('grunt-browserify');

  // Default tasks
  grunt.registerTask('default', ['browserify']);
};