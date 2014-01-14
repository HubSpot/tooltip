module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    bower:
      install:
        options:
          targetDir: 'bower_components'
          cleanup: true
          layout: 'byComponent'
          bowerOptions:
            forceLatest: true
            production: true

  grunt.loadNpmTasks 'grunt-bower-task'
