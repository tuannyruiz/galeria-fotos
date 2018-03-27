"use strict";
var router_1 = require('@angular/router');
var register_component_1 = require('./register/register.component');
var list_component_1 = require('./list/list.component');
var appRoutes = [
    { path: '', component: list_component_1.ListComponent },
    { path: 'cadastro', component: register_component_1.RegisterComponent },
    { path: '**', component: list_component_1.ListComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map