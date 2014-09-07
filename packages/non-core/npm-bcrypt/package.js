Package.describe({
  summary: "Wrapper around the bcrypt npm package",
  version: '0.7.7',
  name: 'windows:npm-bcrypt'
});

Npm.depends({
  bcrypt: '0.7.8'
});

Package.on_use(function (api) {
  api.export('NpmModuleBcrypt', 'server');
  api.addFiles('wrapper.js', 'server');
});
