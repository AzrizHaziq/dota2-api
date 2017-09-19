var heroes = require('../data/heroes.json').heroes
var abilities = require('../data/abilities.json').abilities

var dota = {
    heroes : heroes,
    abilities : abilities
}

var random = function(key){

    if( !(key in dota) || key === undefined){
        return console.warn("must be either " + Object.keys(dota).join(' or '))
    }

    return dota[key][ Math.floor(Math.random() * dota[key].length) ]
}

module.exports = {
    heroes : heroes,
    abilities : abilities,
    random : random,
}