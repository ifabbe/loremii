module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'public/stylesheets/main.css': 'public/stylesheets/main.scss'
                }
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'public/stylesheets/main.css': 'public/stylesheets/main.scss'
                }
            }
        },

        watch: {
            css: {
                files: ['public/stylesheets/**/*.scss'],
                tasks: ['build']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['sass:dev']);
    grunt.registerTask('default', ['build', 'watch']);

};