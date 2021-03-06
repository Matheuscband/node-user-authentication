"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const status_route_1 = __importDefault(require("./routes/status.route"));
const users_route_1 = __importDefault(require("./routes/users.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(users_route_1.default);
app.use(status_route_1.default);
app.listen(3000, () => {
    console.log('Aplicação executando na casa 3000!');
});
