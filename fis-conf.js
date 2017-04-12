//Step 1. 开启simple插件，注意需要先进行插件安装 npm install -g fis-postpackager-simple
fis.config.set('modules.postpackager', 'simple');

//通过pack设置干预自动合并结果，将公用资源合并成一个文件，更加利于页面间的共用
//Step 2.将[]里面的所有文件打包到pkg/lib.js目录里,设置打包规则
fis.config.set('pack', {
    '/pkg/lib.js': [
        'js/lib/jquery.js',
        'js/lib/underscore.js',
        'js/lib/backbone.js',
        'js/lib/backbone.localStorage.js',
    ],
    // 取消下面的注释设置CSS打包规则，CSS打包的同时会进行图片合并
    '/pkg/aio.css': '**.css'
});

//Step 3. 除了Step2中手动设置合并的JS脚本之外。通过Step3的配置，可以对其他的脚本进行自动合并。
// 取消下面的注释可以开启simple对零散资源的自动合并
fis.config.set('settings.postpackager.simple.autoCombine', true);

// 设置图片合并的最小间隔
fis.config.set('settings.spriter.csssprites.margin', 20);

// 取消下面的注释开启simple插件，注意需要先进行插件安装 npm install -g fis-postpackager-simple
fis.config.set('modules.postpackager', 'simple');

// npm install -g fis-optimizer-minify-html
// fis-optimizer-htmlmin
// fis.config.set('modules.optimizer', {
//     html: 'minify-html'
// });
fis.config.merge({
    modules: {
        optimizer: {
            html: "htmlmin"
        }
    },
    settings: {
        optimizer: {
            "htmlmin": {
                minifyJS: false
            }
        }
    }
});
