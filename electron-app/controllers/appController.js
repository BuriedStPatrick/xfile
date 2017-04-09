const path = require('path')

let currentDir

exports.getCurrentDir = _ => currentDir

exports.updateDir = dir => {
    currentDir = dir
}