module.exports = {
    apps: [
        {
            name: 'southamerica-company',
            port: '5000',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
            env: {
                PORT: 5000  // Define el puerto aquí como una variable de entorno
            }
        }
    ]
}
