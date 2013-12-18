module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    coffee:
      compile:
        files:
          'tooltip.js': 'tooltip.coffee'
          'docs/welcome/js/welcome.js': 'docs/welcome/coffee/welcome.coffee'

    watch:
      coffee:
        files: ['*.coffee', 'sass/*', 'docs/**/*']
        tasks: ['coffee', 'uglify', 'compass']

    uglify:
      tooltip:
        src: 'tooltip.js'
        dest: 'tooltip.min.js'
        options:
          banner: '/*! tooltip.js <%= pkg.version %> */\n'

    compass:
      dist:
        options:
          sassDir: 'sass'
          cssDir: 'css'
      welcomeDocs:
        options:
          sassDir: 'docs/welcome/sass'
          cssDir: 'docs/welcome/css'

    bower:
      install:
        options:
          targetDir: 'deps'
          cleanup: true
          layout: 'byComponent'
          bowerOptions:
            forceLatest: true
            production: true

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-compass'
  grunt.loadNpmTasks 'grunt-bower-task'

  grunt.registerTask 'default', ['coffee', 'uglify', 'compass', 'bower']
