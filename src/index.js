var mods = require('../data/mods.json').mods
var items = require('../data/items.json').items
var heroes = require('../data/heroes.json').heroes
var lobbies = require('../data/lobbies.json').lobbies
var regions = require('../data/regions.json').regions
var abilities = require('../data/abilities.json').abilities

var dota = {
    mods : mods,
    items : items,
    heroes : heroes,
    lobbies : lobbies,
    regions : regions,
    abilities : abilities,
}

var isKeyInvalid = function(key){

    if( !(key in dota) || key === undefined){
        throw "must be either " + Object.keys(dota).join('/')
    }
}

var random = function(key){

    isKeyInvalid(key)

    return dota[key][ Math.floor(Math.random() * dota[key].length) ]
}

var randomXTimes = function(key, times){

    isKeyInvalid(key)

    if(typeof times !== 'number')
        throw 'times is not a number (' + times + ": " + typeof times + ")"

    var rand = [];

    for(var i = 0; i< times; i++){
        rand.push(random(key))
    }

    return rand;
}

module.exports = {
    mods : mods,
    items : items,
    heroes : heroes,
    lobbies : lobbies,
    regions : regions,
    abilities : abilities,
    random : random,
    randomXTimes : randomXTimes
}