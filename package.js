Package.describe({
	summary: "filepicker.io re-re-packaged for Meteor"
});

Package.on_use(function (api) {
	api.add_files([
		'filepicker.js'
	],'client');
});