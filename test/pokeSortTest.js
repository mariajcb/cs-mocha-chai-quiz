const pokeSort = require('../pokeSort');
const expect = require('chai').expect;

describe('sorts an array of pokemon objects', function() {
    it("takes an array of objects", function() {
        let pokeArray = [{
            id: 4,
            name: 'charmander',
            weight: 12.3
        }, {
            id: 1,
            name: 'bulbasaur',
            weight: 22.4
        }, {
            id: 7,
            name: 'squirtle',
            weight: 17.9
        }, {
            id: 144,
            name: 'articuno',
            weight: 60.2
        }]

        expect(pokeArray).to.be.an.instanceof(Array);
    })

    it("sorts pokemon by weight, lowest to highest", function() {
        let pokeArray = [{
            id: 4,
            name: 'charmander',
            weight: 12.3
        }, {
            id: 1,
            name: 'bulbasaur',
            weight: 22.4
        }, {
            id: 7,
            name: 'squirtle',
            weight: 17.9
        }, {
            id: 144,
            name: 'articuno',
            weight: 60.2
        }]

        expect(pokeSort(pokeArray, "weight")).to.deep.equal([{
            id: 4,
            name: 'charmander',
            weight: 12.3
        }, {
            id: 7,
            name: 'squirtle',
            weight: 17.9
        }, {
            id: 1,
            name: 'bulbasaur',
            weight: 22.4
        }, {
            id: 144,
            name: 'articuno',
            weight: 60.2
        }]);

    })

    it("sorts pokemon by name, alphabetically", function() {
        let pokeArray = [{
            id: 4,
            name: 'charmander',
            weight: 12.3
        }, {
            id: 1,
            name: 'bulbasaur',
            weight: 22.4
        }, {
            id: 7,
            name: 'squirtle',
            weight: 17.9
        }, {
            id: 144,
            name: 'articuno',
            weight: 60.2
        }]
        expect(pokeSort(pokeArray, "name")).to.deep.equal([{
            id: 144,
            name: 'articuno',
            weight: 60.2
        }, {
            id: 1,
            name: 'bulbasaur',
            weight: 22.4
        }, {
            id: 4,
            name: 'charmander',
            weight: 12.3
        }, {
            id: 7,
            name: 'squirtle',
            weight: 17.9
        }]);
    })

    it("sorts pokemon by id, lowest to highest", function() {
        let pokeArray = [{
            id: 4,
            name: 'charmander',
            weight: 12.3
        }, {
            id: 1,
            name: 'bulbasaur',
            weight: 22.4
        }, {
            id: 7,
            name: 'squirtle',
            weight: 17.9
        }, {
            id: 144,
            name: 'articuno',
            weight: 60.2
        }]
        expect(pokeSort(pokeArray, "id")).to.deep.equal([{
            id: 1,
            name: 'bulbasaur',
            weight: 22.4
        }, {
            id: 4,
            name: 'charmander',
            weight: 12.3
        }, {
            id: 7,
            name: 'squirtle',
            weight: 17.9
        }, {
            id: 144,
            name: 'articuno',
            weight: 60.2
        }]);
    })

})
