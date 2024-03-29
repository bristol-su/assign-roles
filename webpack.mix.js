const mix = require('laravel-mix');

mix.setPublicPath('./public');

mix.js('resources/js/module.js', 'public/modules/assign-roles/js').vue()
    .js('resources/js/form-settings/components.js', 'public/modules/assign-roles/js').vue()
    .sass('resources/sass/module.scss', 'public/modules/assign-roles/css');

mix.webpackConfig({
    externals: {
        '@bristol-su/frontend-toolkit': 'Toolkit',
        'vue': 'Vue',
    }
});
