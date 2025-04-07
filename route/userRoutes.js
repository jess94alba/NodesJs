const userController = require('../controller/userController');
module.exports = (app) => {
    app.post('/api/users/create', userController.register);
    app.post('/api/users/login', userController.login);
}
