// @ts-nocheck
// pokemon.js
// Implementations for all the calls for the pokemon endpoints.
import Api from "../services/Api";

// Method to get a list of all Pokemon
export const getPokemonList = async () => {
    try {
        const response = await Api.get("/pokemon?limit=525");
        return response.results;
    } catch (error) {
        console.error(error);
    }
};

// Get a pokemon details by name
export const getPokemonByName = async (name) => {
    try {
        const response = await Api.get(`/pokemon/${name}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

// Get a pokemon details by name
export const getPokemonSpecies = async (name) => {
    try {
        const response = await Api.get(`/pokemon-species/${name}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

// Get a pokemon details by name
export const getEvolution = async (number) => {
    try {
        const response = await Api.get(`/evolution-chain/${number}`);
        // console.log(response)
        let evol1 = new Array(response.chain.species.name);
        let evol2 = (response.chain.evolves_to).map(e => e.species.name);
        let evol3 = (response.chain.evolves_to).map(e => e.evolves_to);
        if (evol3.length > 0) evol3 = evol3[0].map(e => e.species.name)

        let evolution = [];
        evolution.push(evol1);
        if (evol2.length > 0) evolution.push(evol2);
        if (evol3.length > 0) evolution.push(evol3);

        // console.log(evolution)

        return evolution;
    } catch (error) {
        console.error(error);
    }
};