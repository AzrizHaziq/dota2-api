var mods = require('../data/mods.json').mods
var items = require('../data/items.json').items
var heroes = require('../data/heroes.json').heroes
var lobbies = require('../data/lobbies.json').lobbies
var regions = require('../data/regions.json').regions
var abilities = require('../data/abilities.json').abilities

var dota2Api = require('./index')
var expect = require('chai').expect;

describe('Dota2 JSON Api', function(){

    describe('Dota Mods', function(){

        it('should be and array of Mod object', function(){
            expect(dota2Api.mods).to.satisfy(isArrayOfMods)

            function isArrayOfMods(mod){
                return mod.every(function(obj){
                    return obj.hasOwnProperty('id') && obj.hasOwnProperty('name')
                })
            }
        })

        it('should contain `Ability Draft`', function(){
            return expect(dota2Api.mods).to.deep.include({
                "id" : 18,
                "name" : "Ability Draft"
            })
        })

        it('should contain random mods', function(){
            var randomMods = dota2Api.random('mods')
            return expect(dota2Api.mods).to.deep.include(randomMods)
        })

        it('should contain random array of 5 mods ', function(){
            var random5Mods = dota2Api.randomXTimes('mods', 5)
            return expect(random5Mods)
                .to.be.an('array')
                .to.have.lengthOf(5)
        })

    })

    describe('Dota Item', function(){

        it('should be and array of Item object', function(){
            expect(dota2Api.items).to.satisfy(isArrayOfItems)

            function isArrayOfItems(item){
                return item.every(function(ability){
                    return ability.hasOwnProperty('id') && ability.hasOwnProperty('name')
                })
            }
        })

        it('should contain `Cheese`', function(){
            return expect(dota2Api.items).to.deep.include({
                "id" : 33,
                "name" : "cheese"
            })
        })

        it('should contain random items', function(){
            var randomItem = dota2Api.random('items')
            return expect(dota2Api.items).to.deep.include(randomItem)
        })

        it('should contain random array of 5 Items ', function(){
            var random5Items = dota2Api.randomXTimes('items', 5)
            return expect(random5Items)
                .to.be.an('array')
                .to.have.lengthOf(5)
        })

    })

    describe('Dota Heroes', function(){

        it('should be and array of heroes object', function(){
            expect(dota2Api.heroes).to.satisfy(isArrayOfHeroes)

            function isArrayOfHeroes(heroes){
                return heroes.every(function(item){
                    return (
                        item.hasOwnProperty('name') &&
                        item.hasOwnProperty('id') &&
                        item.hasOwnProperty('localized_name')
                    )
                })
            }
        })

        it('should contain `Anti Mage`', function(){
            return expect(dota2Api.heroes).to.deep.include({
                "id" : 1,
                "name" : "antimage",
                "localized_name" : "Anti-Mage"
            })
        })

        it('should contain random heroes', function(){
            var randomHeroes = dota2Api.random('heroes')
            return expect(dota2Api.heroes).to.deep.include(randomHeroes)
        })

        it('should contain random array of 5 Items ', function(){
            var random5Items = dota2Api.randomXTimes('items', 5)
            return expect(random5Items)
                .to.be.an('array')
                .to.have.lengthOf(5)
        })

    })

    describe('Dota Lobbies', function(){

        it('should be and array of Lobby object', function(){
            expect(dota2Api.lobbies).to.satisfy(isArrayOfLobbies)

            function isArrayOfLobbies(lobby){
                return lobby.every(function(obj){
                    return obj.hasOwnProperty('id') && obj.hasOwnProperty('name')
                })
            }
        })

        it('should contain `Public matchmaking`', function(){
            return expect(dota2Api.lobbies).to.deep.include({
                "name" : "Public matchmaking",
                "id" : 0
            })
        })

        it('should contain random lobbies', function(){
            var randomLobbies = dota2Api.random('lobbies')
            return expect(dota2Api.lobbies).to.deep.include(randomLobbies)
        })

        it('should contain random array of 5 Lobbies ', function(){
            var random5Lobbies = dota2Api.randomXTimes('lobbies', 5)
            return expect(random5Lobbies)
                .to.be.an('array')
                .to.have.lengthOf(5)
        })

    })

    describe('Dota Regions', function(){

        it('should be and array of region object', function(){
            expect(dota2Api.regions).to.satisfy(isArrayOfRegions)

            function isArrayOfRegions(region){
                return region.every(function(obj){
                    return obj.hasOwnProperty('id') && obj.hasOwnProperty('name')
                })
            }
        })

        it('should contain `US West`', function(){
            return expect(dota2Api.regions).to.deep.include({
                "name" : "US West",
                "id" : 111
            })
        })

        it('should contain random regions', function(){
            var randomRegion = dota2Api.random('regions')
            return expect(dota2Api.regions).to.deep.include(randomRegion)
        })

        it('should contain random array of 5 Items ', function(){
            var random5Regions = dota2Api.randomXTimes('regions', 5)
            return expect(random5Regions)
                .to.be.an('array')
                .to.have.lengthOf(5)
        })

    })

    describe('Dota Abilities', function(){

        it('should be and array of abilities object', function(){
            expect(dota2Api.abilities).to.satisfy(isArrayOfAbilities)

            function isArrayOfAbilities(abilities){
                return abilities.every(function(ability){
                    return ability.hasOwnProperty('id') && ability.hasOwnProperty('name')
                })
            }
        })

        it('should contain `Necromonicon Worrior last will`', function(){
            return expect(dota2Api.abilities).to.deep.include({
                "name" : "necronomicon_warrior_last_will",
                "id" : 5200
            })
        })

        it('should contain random heroes', function(){
            var randomAbilities = dota2Api.random('abilities')
            return expect(dota2Api.abilities).to.deep.include(randomAbilities)
        })

        it('should contain random array of 5 Abilities ', function(){
            var random5Abilities = dota2Api.randomXTimes('abilities', 5)
            return expect(random5Abilities)
                .to.be.an('array')
                .to.have.lengthOf(5)
        })

    })

})
