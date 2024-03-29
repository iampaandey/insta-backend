"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_js_1 = require("../controller.js");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/login', controller_js_1.Login);
router.post('/register', controller_js_1.register);
router.get('/getUsers', controller_js_1.getUsers);
router.get('/getUsersName', controller_js_1.getUsersName);
router.post('/addpost', controller_js_1.addPost);
router.post('/getuserdata', controller_js_1.getUserData);
router.get('/getfeed', controller_js_1.getFeed);
router.post('/likepost', controller_js_1.likePost);
router.post('/dislikepost', controller_js_1.disLikePost);
router.post('/getpost', controller_js_1.getPost);
router.post('/addcomment', controller_js_1.addComment);
router.post('/removecomment', controller_js_1.removeComment);
router.post('/getuser', controller_js_1.getUser);
router.post('/getnotification', controller_js_1.getNotification);
router.post('/sendmess', controller_js_1.sendMessage);
router.post('/searchusers', controller_js_1.searchUsers);
router.post('/follow', controller_js_1.follow);
router.post('/unfollow', controller_js_1.unFollow);
router.post('/getfriends', controller_js_1.getFriends);
exports.default = router;
