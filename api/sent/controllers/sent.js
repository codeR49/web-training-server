'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    async create(ctx) {
        
        const { body } = ctx.request
        const {fullname, email} = body
        strapi.log.debug(`Trying to send an email to ${email}`)
       
        try {
            const emailOptions = {
                to: email,
                subject: 'This is a test email from strapi backend for alchemy solutions',
                html: `<h1>Welcome ${fullname}!</h1><p>We have successfully received your query. We will get back to you in two working days</p>`,
            }
            await strapi.plugins['email'].services.email.send(emailOptions)
            strapi.log.debug(`Email sent to ${email}`)
            ctx.send({ message: 'Email sent' })
            //save mail data to db
            
        } catch (err) {
            strapi.log.error(`Error sending email to ${email}`, err)
            ctx.send({ error: 'Error sending email' })
        }
        await strapi.services.sent.create(body);
        ctx.send({ message: 'Data saved to db' });
    }
};
