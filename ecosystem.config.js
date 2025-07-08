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
                SMTP_HOST: process.env.SMTP_HOST,
                SMTP_PORT: process.env.SMTP_PORT,
                SMTP_USERNAME: process.env.SMTP_USERNAME,
                SMTP_PASSWORD: process.env.SMTP_PASSWORD,
                DEFAULT_FROM_EMAIL: process.env.DEFAULT_FROM_EMAIL,
                DEFAULT_REPLYTO_EMAIL: process.env.DEFAULT_REPLYTO_EMAIL,
            }
        }
    ]
}