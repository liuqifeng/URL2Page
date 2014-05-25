module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      feedCard: {
        src: [
          ],

        dest: 'scripts/feedCard.js'
      },
      feedCardWithTab: {
        src: [
          'scripts/src/intro.js',
          'scripts/src/utils.js',
          'scripts/src/dom.js',
          'scripts/src/io.js',
          'scripts/src/ioAPI.js',
          'scripts/src/scroll.js',
          'scripts/src/template.js',
          'scripts/src/CONSTANT.js',
          'scripts/src/feed.js',
          'scripts/src/tab.js',
          'scripts/src/bootstrap.js',
          'scripts/src/outro.js'
          ],

        dest: 'scripts/feedCardWithTab.js'
      }
    },

    uglify: {
      options: {
        compress: {
          // drop_console: true
        }
      },
      feedCard: {
        options: {
          sourceMap: true,
          sourceMapName: 'scripts/feedCard.map'
        },
        files: {
          'scripts/feedCard.min.js': 'scripts/feedCard.js'
        }
      },
      feedCardWithTab: {
        options: {
          sourceMap: true,
          sourceMapName: 'scripts/feedCardWithTab.map'
        },
        files: {
          'scripts/feedCardWithTab.min.js': 'scripts/feedCardWithTab.js'
        }
      }
    },

    stylus: {
      compile: {
        options: {
          compress: false
        },
        files: {
          // 'styles/feed-card.css': 'styles/src/feed-card.styl'
        }
      }
    },

    watch: {
      scripts: {
        files: ['Gruntfile.js', 'styles/src/*.styl', 'scripts/src/*.js'],
        tasks: ['stylus', 'concat', 'uglify']
      }
    }

  });

  

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);
};