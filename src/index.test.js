var mods = require('../data/mods.json').mods
var items = require('../data/items.json').items
var heroes = require('../data/heroes.json').heroes
var lobbies = require('../data/lobbies.json').lobbies
var regions = require('../data/regions.json').regions
var abilities = require('../data/abilities.json').abilities

var dota2Api = require('./index')
var expect = require('chai').expect;

var dotas = [
    {
        title : 'Dota Mods',
        items : mods,
        key : 'mods',
        data : {
            "id" : 18,
            "name" : "Ability Draft"
        },
        tests : [
            {
                title : 'should be and array of Mod object',
                callback : function(mod){
                    return mod.every(function(obj){
                        return obj.hasOwnProperty('id') && obj.hasOwnProperty('name')
                    })
                }
            },
            {
                title : 'should contain `Ability Draft`'
            },
            {
                title : 'should contain random mods',
            },
            {
                title : 'should contain random array of 5 mods',
            },
            {
                title : 'should return searched `Ability Draft` array'
            },
            {
                title : 'should throw error when random a item'
            },
        ]
    },
    {
        title : 'Dota Items',
        items : items,
        key : 'items',
        data : {
            "id" : 91,
            "name" : "recipe_urn_of_shadows"
        },
        tests : [
            {
                title : 'should be and array of Item object',
                callback : function(item){
                    return item.every(function(obj){
                        return obj.hasOwnProperty('id') && obj.hasOwnProperty('name')
                    })
                }
            },
            {
                title : 'should contain `recipe_urn_of_shadows`'
            },
            {
                title : 'should contain random Item',
            },
            {
                title : 'should contain random array of 5 Items',
            },
            {
                title : 'should return searched `recipe_urn_of_shadows` array'
            },
            {
                title : 'should throw error when random a item'
            },
        ]
    },
    {
        title : 'Dota Heroes',
        items : heroes,
        key : 'heroes',
        data : {
            "name" : "leshrac",
            "id" : 52,
            "localized_name" : "Leshrac"
        },
        tests : [
            {
                title : 'should be and array of Mod object',
                callback : function(hero){
                    return hero.every(function(obj){
                        return (
                            obj.hasOwnProperty('name') &&
                            obj.hasOwnProperty('id') &&
                            obj.hasOwnProperty('localized_name')
                        )
                    })
                }
            },
            {
                title : 'should contain `leshrac`'
            },
            {
                title : 'should contain random mods',
            },
            {
                title : 'should contain random array of 5 mods',
            },
            {
                title : 'should return searched `leshrac` array'
            },
            {
                title : 'should throw error when random a item'
            },
        ]
    },
    {
        title : 'Dota Lobbies',
        items : lobbies,
        key : 'lobbies',
        data : {
            "id" : 6,
            "name" : "Solo Queue"
        },
        tests : [
            {
                title : 'should be and array of Lobby object',
                callback : function(lobby){
                    return lobby.every(function(obj){
                        return obj.hasOwnProperty('id') && obj.hasOwnProperty('name')
                    })
                }
            },
            {
                title : 'should contain `Solo Queue`'
            },
            {
                title : 'should contain random Lobbies',
            },
            {
                title : 'should contain random array of 5 Lobbies',
            },
            {
                title : 'should return searched `Solo Queue` array'
            },
            {
                title : 'should throw error when random a item'
            },
        ]
    },
    {
        title : 'Dota Regions',
        items : regions,
        key : 'regions',
        data : {
            "id" : 224,
            "name" : "China"
        },
        tests : [
            {
                title : 'should be and array of Region object',
                callback : function(mod){
                    return mod.every(function(obj){
                        return obj.hasOwnProperty('id') && obj.hasOwnProperty('name')
                    })
                }
            },
            {
                title : 'should contain `China`'
            },
            {
                title : 'should contain random Region',
            },
            {
                title : 'should contain random array of 5 Region',
            },
            {
                title : 'should return searched `China` array'
            },
            {
                title : 'should throw error when random a item'
            },
        ]
    },
    {
        title : 'Dota Abilities',
        items : abilities,
        key : 'abilities',
        data : {
            "id" : 5185,
            "name" : "faceless_void_chronosphere"
        },
        tests : [
            {
                title : 'should be and array of Abilities object',
                callback : function(ability){
                    return ability.every(function(obj){
                        return obj.hasOwnProperty('id') && obj.hasOwnProperty('name')
                    })
                }
            },
            {
                title : 'should contain `faceless_void_chronosphere`',
            },
            {
                title : 'should contain random Ability',
            },
            {
                title : 'should contain random array of 5 Abilities',
            },
            {
                title : 'should return searched `faceless_void_chronosphere` array'
            },
            {
                title : 'should throw error when random a item'
            },
        ]
    }
]

describe('Dota2 JSON Api', function(){

    describe('/Basic functionality', function(){

        dotas.forEach(function(dota){

            describe(dota.title, function(){

                var key = dota.key,
                    data = dota.data;

                //check obj structure
                it("/" + dota.tests[0].title, function(){
                    expect(dota.items).to.satisfy(dota.tests[0].callback)
                })

                //should contain an obj of
                it("/" + dota.tests[1].title, function(){
                    return expect(dota.items).to.deep.include(data)
                })

                //random item
                it("/" + dota.tests[2].title, function(){
                    var randomItem = dota2Api.random(key)
                    return expect(dota.items).to.deep.include(randomItem)
                })

                //random 5 item
                it("/" + dota.tests[3].title, function(){
                    var randomItems = dota2Api.random(key, 3)
                    return expect(randomItems)
                        .to.be.an('array')
                        .to.have.lengthOf(3)
                })

                //search item
                it("/" + dota.tests[4].title, function(){
                    var searchedItem = dota2Api.search(key, data.name)

                    expect(searchedItem)
                        .to.be.an('array')
                        .to.deep.include(data)

                    expect(function (){
                        dota2Api.search(key)
                    }).to.throw();

                })

                //throw error when random an item
                it("/" + dota.tests[5].title, function(){
                    expect(function(){
                        dota2Api.random(key, 'throw')
                    }).to.throw();
                })

                //throw error when random an item
                it("is key valid", function(){
                    expect(function(){
                        dota2Api.random('asdasdads')
                    }).to.throw();
                })

            })

        })

    })

})
