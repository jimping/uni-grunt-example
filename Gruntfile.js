module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            react: {
                files: 'components/*.js',
                tasks: ['browserify']
            }
        },

        jshint: {
            options: {
                esversion: 6,
            },
            all: ['Gruntfile.js', 'components/**/*.js']
        },

        jsdoc: {
            dist: {
                src: ['components/*.js'],
                options: {
                    destination: 'doc'
                }
            }
        },

        clean: ['dist', 'doc'],

        browserify: {
            client: {
                src: ['components/**/*.js'],
                dest: 'dist/app.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-jsdoc');

    grunt.registerTask('default', [
        'test',
        'build',
        'docs'
    ]);

    grunt.registerTask('build', [
        'clean',
        'browserify'
    ]);

    grunt.registerTask('test', [
        'jshint',
    ]);

    grunt.registerTask('docs', [
        'jsdoc',
    ]);
};
