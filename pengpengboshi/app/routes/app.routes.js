"use strict";
var login_routes_1 = require('./login.routes');
var signup_routes_1 = require('./signup.routes');
var index_1 = require('../login/index');
exports.routes = login_routes_1.LoginRoutes.concat(signup_routes_1.SignupRoutes, [
    { path: '**', component: index_1.LoginComponent }
]);
//# sourceMappingURL=app.routes.js.map