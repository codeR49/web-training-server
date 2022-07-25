module.exports = ({ env }) => ({
  
  email: {
    provider: process.env.EMAIL_PROVIDER,
    providerOptions: {
      host: process.env.EMAIL_SMTP_HOST,
      port: process.env.EMAIL_SMTP_PORT,
      auth: {
        user: process.env.EMAIL_SMTP_USER,
        pass: process.env.EMAIL_SMTP_PASS,
      },
    },
    settings: {
      defaultFrom: `Strapi Backend Alchemy ${process.env.EMAIL_ADDRESS_FROM}`,
      defaultReplyTo: process.env.EMAIL_ADDRESS_REPLY,
    },
  }
})  