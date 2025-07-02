const dotenv = require("dotenv");
dotenv.config();

const max_memory_restart = '200M'

module.exports = {
    apps: [
        {
            name: 'ermatel_backend',
            cwd: '/var/www/ermatel/backend',
            script: "npm",
            args: "start",
            instances: 1,
            autorestart: true,
            max_memory_restart,
            error_file: "/var/www/ermatel/backend/logs/error.log",
            out_file: "/var/www/ermatel/backend/logs/out.log",
            env: {
                NODE_ENV: process.env.NODE_ENV,
                PORT: process.env.PORT,
                DATABASE_CLIENT: process.env.DATABASE_CLIENT,
                DATABASE_HOST: process.env.DATABASE_HOST,
                DATABASE_PORT: process.env.DATABASE_PORT,
                DATABASE_NAME: process.env.DATABASE_NAME,
                DATABASE_USERNAME: process.env.DATABASE_USERNAME,
                DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
            }
        }
    ]
}