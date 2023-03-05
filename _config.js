var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://amwau:aA6OrA8m140EyGbs@cluster0.hng1sl8.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://amwau:aA6OrA8m140EyGbs@cluster0.hng1sl8.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://amwau:aA6OrA8m140EyGbs@cluster0.hng1sl8.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
