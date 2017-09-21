import mods from './data/mods.json'
import items from './data/items.json'
import heroes from './data/heroes.json'
import lobbies from './data/lobbies.json'
import regions from './data/regions.json'
import abilities from './data/abilities.json'

const dota = {
    mods : mods.mods,
    items : items.items,
    heroes : heroes.heroes,
    lobbies : lobbies.lobbies,
    regions : regions.regions,
    abilities : abilities.abilities,
}

const isKeyInvalid = function(key){

    if( !(key in dota) || key === undefined){
        throw "must be either " + Object.keys(dota).join('/')
    }
}

const random = function(key, times){

    isKeyInvalid(key)

    if(times === undefined){
        return getRandomItem(key)
    }

    else {  

        if(typeof times !== 'number')
            throw new TypeError('Times is not a number : ' + times + " is " + typeof times)

        const rand = [];

        for(let i = 0; i < times ; i++){
            rand.push(getRandomItem(key))
        }

        return rand;
    }

    function getRandomItem(key){
        return dota[key][ Math.floor(Math.random() * dota[key].length) ]
    }
}

const search = function(key, searchItem){

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