"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const users_module_1 = require("./users/users.module");
const articles_controller_1 = require("./articles/articles.controller");
const articles_service_1 = require("./articles/articles.service");
const article_schema_1 = require("./articles/schemas/article.schema");
const admin_controller_1 = require("./admin/admin.controller");
const admin_service_1 = require("./admin/admin.service");
const admin_schema_1 = require("./admin/schemas/admin.schema");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI, { dbName: 'SPEED' }),
            mongoose_1.MongooseModule.forFeature([
                { name: article_schema_1.Article.name, schema: article_schema_1.ArticleSchema },
                { name: admin_schema_1.Admin.name, schema: admin_schema_1.AdminSchema },
            ]),
            users_module_1.UsersModule,
        ],
        controllers: [articles_controller_1.ArticlesController, admin_controller_1.AdminController],
        providers: [articles_service_1.ArticlesService, admin_service_1.AdminService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map