
module.exports.baseUrl = process.env.API_ENDPOINT;
module.exports.credentials = Buffer(process.env.API_CREDENTIALS || 'placeholder for tests').toString('base64');
module.exports.apiUser = process.env.API_USER;
module.exports.apiPassword = process.env.API_PASSWORD;
module.exports.jwtSecret = process.env.JWT_SECRET;