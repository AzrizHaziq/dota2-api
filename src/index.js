var heroes = require('../data/heroes.json').heroes

var randomHero = function(){
    return heroes[Math.floor(Math.random() * heroes.length)]
}

module.exports = {
    all : heroes,
    randomHero : randomHero
}