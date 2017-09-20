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

    if(times === undefined){
        return getRandomItem(key)
    }

    else {  

        if(typeof times !== 'number')
            throw 'Times is not a number : ' + times + " is " + typeof times

        var rand = [];

        for(var i = 0; i < times ; i++){
            rand.push(getRandomItem(key))
        }

        return rand;
    }

    function getRandomItem(key){
        return dota[key][ Math.floor(Math.random() * dota[key].length) ]
    }
}

var search = function(key, searchItem){

    isKeyInvalid(key)

    if(searchItem === undefined)
        throw 'Search keyword is undefined'

    return dota[key].filter(function(item){
        return item.name === searchItem
    })
}

module.exports = {
    mods : mods,
    items : items,
    heroes : heroes,
    lobbies : lobbies,
    regions : regions,
    abilities : abilities,
    random : random,
    search : search
}