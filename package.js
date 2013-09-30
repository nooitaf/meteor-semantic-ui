Package.describe({
  summary: "Semantic UI packaged for meteor"
});

Package.on_use(function (api) {

  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('semantic');
  api.add_files(path.join(asset_path, 'css', 'semantic.min.css'), 'client');
  api.add_files(path.join(asset_path, 'javascript', 'semantic.min.js'), 'client');

  // fonts
  api.add_files(path.join(asset_path, 'fonts', 'basic.icons.eot'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'basic.icons.ttf'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'basic.icons.svg'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'basic.icons.woff'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'icons.eot'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'icons.ttf'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'icons.otf'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'icons.svg'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'icons.woff'), 'client');

  // images
  api.add_files(path.join(asset_path, 'images', 'loader-large-inverted.gif'), 'client');
  api.add_files(path.join(asset_path, 'images', 'loader-large.gif'), 'client');
  api.add_files(path.join(asset_path, 'images', 'loader-medium-inverted.gif'), 'client');
  api.add_files(path.join(asset_path, 'images', 'loader-medium.gif'), 'client');
  api.add_files(path.join(asset_path, 'images', 'loader-mini-inverted.gif'), 'client');
  api.add_files(path.join(asset_path, 'images', 'loader-mini.gif'), 'client');
  api.add_files(path.join(asset_path, 'images', 'loader-small-inverted.gif'), 'client');
  api.add_files(path.join(asset_path, 'images', 'loader-small.gif'), 'client');

  // XXX this makes the paths to the icon sets absolute. it needs
  // to be included _after_ the standard semantic css so
  // that its styles take precedence.
  api.add_files('semantic-override.css', 'client');
});