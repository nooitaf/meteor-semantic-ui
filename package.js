Package.describe({
  summary: "Semantic UI packaged for Meteor",
  version: "1.5.2",
  name: "nooitaf:semantic-ui",
  git: "https://github.com/nooitaf/meteor-semantic-ui.git"
});


Package.on_use(function (api) {
  api.versionsFrom('1.0');
  api.use('jquery','client');

  var path = Npm.require('path');

  var assetPath = path.join('lib/semantic-ui/');
  var assetFiles = [
    assetPath + 'components/ad.css',
    assetPath + 'components/accordion.css',
    assetPath + 'components/accordion.js',
    assetPath + 'components/api.js',
    assetPath + 'components/breadcrumb.css',
    assetPath + 'components/button.css',
    assetPath + 'components/card.css',
    assetPath + 'components/checkbox.css',
    assetPath + 'components/checkbox.js',
    assetPath + 'components/colorize.js',
    assetPath + 'components/comment.css',
    assetPath + 'components/dimmer.css',
    assetPath + 'components/dimmer.js',
    assetPath + 'components/divider.css',
    assetPath + 'components/dropdown.css',
    assetPath + 'components/dropdown.js',
    assetPath + 'components/feed.css',
    assetPath + 'components/flag.css',
    assetPath + 'components/form.css',
    assetPath + 'components/form.js',
    assetPath + 'components/grid.css',
    assetPath + 'components/header.css',
    assetPath + 'components/icon.css',
    assetPath + 'components/image.css',
    assetPath + 'components/input.css',
    assetPath + 'components/item.css',
    assetPath + 'components/label.css',
    assetPath + 'components/list.css',
    assetPath + 'components/loader.css',
    assetPath + 'components/menu.css',
    assetPath + 'components/message.css',
    assetPath + 'components/modal.css',
    assetPath + 'components/modal.js',
    assetPath + 'components/nag.css',
    assetPath + 'components/nag.js',
    assetPath + 'components/popup.css',
    assetPath + 'components/popup.js',
    assetPath + 'components/progress.css',
    assetPath + 'components/progress.js',
    assetPath + 'components/rail.css',
    assetPath + 'components/rating.css',
    assetPath + 'components/rating.js',
    assetPath + 'components/reset.css',
    assetPath + 'components/reveal.css',
    assetPath + 'components/search.css',
    assetPath + 'components/search.js',
    assetPath + 'components/segment.css',
    assetPath + 'components/shape.css',
    assetPath + 'components/shape.js',
    assetPath + 'components/sidebar.css',
    assetPath + 'components/sidebar.js',
    assetPath + 'components/site.css',
    assetPath + 'components/site.js',
    assetPath + 'components/state.js',
    assetPath + 'components/statistic.css',
    assetPath + 'components/step.css',
    assetPath + 'components/sticky.css',
    assetPath + 'components/sticky.js',
    assetPath + 'components/tab.css',
    assetPath + 'components/tab.js',
    assetPath + 'components/table.css',
    assetPath + 'components/transition.css',
    assetPath + 'components/transition.js',
    assetPath + 'components/video.css',
    assetPath + 'components/video.js',
    assetPath + 'components/visibility.js',
    assetPath + 'components/visit.js',
    assetPath + 'themes/default/assets/fonts/icons.eot',
    assetPath + 'themes/default/assets/fonts/icons.svg',
    assetPath + 'themes/default/assets/fonts/icons.ttf',
    assetPath + 'themes/default/assets/fonts/icons.woff',
    assetPath + 'themes/default/assets/images/flags.png'
  ];
  api.add_files(assetFiles, 'client');

  // jquery-address dependancy 
  // ----------------------------
  // (TODO: create package)
  // ----------------------------
  api.add_files('lib/jquery-address/jquery.address.js', 'client');

});
