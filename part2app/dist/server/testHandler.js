"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testHandler = void 0;
const testHandler = async (req, resp) => {
    resp.setHeader("Content-type", "application/json");
    resp.json(req.body);
    resp.end();
};
exports.testHandler = testHandler;
