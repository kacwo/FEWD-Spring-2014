/*global module:false*/
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/* \n' +
					' * <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> \n' +
					' */'
		},
		// CSSMin
		cssmin: {
			combine: {
				files: '<%= pkg.css %>'
			}
		},
		// Uglify
		uglify: {
			options: {
				banner: '<%= meta.banner %>',
				report: 'min'
			},
			target: {
				files: '<%= pkg.js %>'
			}
		},
		//Watch
		watch:{
			css:{
				files: ['css/*', '!css/*.min.css'],
				tasks: [ 'cssmin']
			},

			js: {

				files: ['js/*', 'js/*.min.js'],
				tasks: ['uglify']
			}
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Default task.
	grunt.registerTask('default', [ 'uglify', 'cssmin' ]);

};