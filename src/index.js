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

var random = function(key, times){

    isKeyInvalid(key)

    var _times = times || 1

    if(_times === 1 ) {
        return getRandomItem(key)
    }

    else {
        var rand = [];

        for(var i = 0; i < _times; i++){
            rand.push(getRandomItem(key))
        }

        return rand;
    }

    function getRandomItem(key){
        return dota[key][ Math.floor(Math.random() * dota[key].length) ]
    }
}

module.exports = {
    mods : mods,
    items : items,
    heroes : heroes,
    lobbies : lobbies,
    regions : regions,
    abilities : abilities,
    random : random
}