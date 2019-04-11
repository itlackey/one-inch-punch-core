export default [{
        input: 'src/index.js',
        output: {
            file: 'dist/oip.umd.js',
            format: 'umd',
            name: 'oip',
            esModule: false
        }
    },
    {
        input: 'src/index.js',
        output: {
            file: 'dist/oip.esm.js',
            format: 'esm'
        }
    }
];