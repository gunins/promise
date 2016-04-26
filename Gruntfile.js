module.exports = function (grunt) {
    /*
     * Usage:
     * grunt dev  --target=dev      //=> run development tasks (default watch:tasks)
     * grunt dist --target=dist //=> run distribution tasks, creates /dist/styles and minify CSS
     *
     * --target=dev (default)
     * --target=dist (removes all backgrounds and devHelpers)
     *
     * http://requirejs.org/docs/optimization.html
     * http://stackoverflow.com/questions/13567312/working-project-structure-that-uses-grunt-js-to-combine-javascript-files-using-r
     *
     * https://github.com/sindresorhus/grunt-sass
     * http://sass-compatibility.github.io/
     * https://github.com/haithembelhaj/compass-importer
     * */

    var path = grunt.option('target') || 'dev';


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                options: {
                    sourceMap: true
                },
                files: {'dev/style/styles.css': 'src/style/styles.scss'}
            },
            dist: {
                options: {
                    environment: 'production',
                    outputStyle: 'compressed' //CSS output mode. Can be: nested, expanded, compact, compressed.
                },
                files: {'dist/style/styles.css': 'src/style/styles.scss'}
            }
        },
        requirejs: {
            // global config
            options: {
                baseUrl: 'src/js',
                mainConfigFile: 'src/js/setup.js',
                paths: {
                    app: 'app',
                    lib: 'lib'
                }

            },
            dev: {
                // overwrites the default config above
                options: {
                    dir: 'dev/scripts',
                    optimize: 'none' // /* uglify2|none */
                }
            },
            dist: {
                // overwrites the default config above
                options: {
                    name: 'lib/require',
                    include: ['setup'],


                    out: "dist/scripts/app.min.js",
                    optimize: 'uglify2',
                    preserveLicenseComments: true, /*Cannot use preserveLicenseComments and generateSourceMaps together. Either explcitly set preserveLicenseComments to false (default is true) or turn off generateSourceMaps. If you want source maps with license comments, see: http://requirejs.org/docs/errors.html#sourcemapcomments*/
                    generateSourceMaps: false
                }
            }
        },
        clean: {
            env: {
                src: [path + '/']
            }
        },
        copy: {
            htmldev: {expand: true, cwd: 'src/pages/', src: ['*.html'], dest: path + '/'}
            /*htmldist: {expand: true, cwd: 'src/pages/', src: ['*.html'], dest: path + '/'}*/
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'DataMain',
                            replacement: 'data-main="scripts/setup" '
                        },
                        {
                            match: 'Src',
                            replacement: 'src="scripts/lib/require.js"'
                        }
                    ]
                },
                files: [
                    {expand: true, flatten: true, src: ['src/pages/index.html'], dest: path + '/'}
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'DataMain',
                            replacement: ''
                        },
                        {
                            match: 'Src',
                            replacement: 'src="scripts/app.min.js"'
                        }
                    ]
                },
                files: [
                    {expand: true, flatten: true, src: ['src/pages/index.html'], dest: path +'/'}
                ]
            }
        },
        watch: {
            css: {
                files: ['src/style/**/*.scss'],
                tasks: ['sass:dev']
            },
            html: {
                files: ['src/pages/*.html'],
                tasks: ['replace:dev']
            },
            requirejs: {
                files: ['src/js/**/*'],
                tasks: ['requirejs:dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-replace');

    grunt.registerTask('dev', [
        'clean:env',
        'sass:' + path,
        'replace:dev',
        'requirejs:dev',
        'watch'
    ]);

    grunt.registerTask('dist', [
        'clean:env',
        'sass:' + path,
        'replace:dist',
        'requirejs:dist'
    ]);
};


