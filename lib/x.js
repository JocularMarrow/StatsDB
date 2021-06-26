"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const user = '1703651444307355';
const pass = 'f5b61325a4b60622bcb9d4d2242a8acd';
(() => __awaiter(void 0, void 0, void 0, function* () {
    if (user != undefined && pass != undefined) {
        const statsDB = new index_1.StatsDB(user, pass);
        console.log((yield statsDB.config()).payload);
    }
    else {
        console.log('env');
    }
}))();
//# sourceMappingURL=x.js.map