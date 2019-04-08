module.exports = function (api) {
    api.cache(true);

    const plugins = [];
    const presets = [
        ['@babel/preset-env', {
            targets: {
                chrome: 58,
            },
            useBuiltIns: false,
            loose: false,
            spec: false,
            debug: false,
            include: [],
            exclude: []
        }]
    ];


    return {
        presets,
        plugins
    };
}
