"use strict";

//Modules
const { 
    downloadContentFromMessage
 } = require("@adiwajshing/baileys-md");
const fs = require("fs");
const PhoneNumber = require('awesome-phonenumber')
const moment = require("moment-timezone");
const { exec, spawn } = require("child_process");
const xfar = require('xfarr-api');

const { color, bgcolor } = require("../lib/color");
const { ind } = require('../help/')
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep } = require("../lib/myfunc");
const setting = JSON.parse(fs.readFileSync('./config.json'));
let {
    ownerNumber
} = setting

moment.tz.setDefault("Asia/Jakarta").locale("id");
