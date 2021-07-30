import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

//const namespaced = true;

export default {
    namespaced: true,
    state() {

        return {
            product: [{
                    id: '1',
                    title: 'Maximilian',
                    price: 'Schwarzmüller',
                    description: "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    image: 30
                },
                {
                    id: '2',
                    title: 'Maximilian',
                    price: 'Schwarzmüller',
                    description: "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    image: 30
                },
                {
                    id: '3',
                    title: 'Maximilian',
                    price: 'Schwarzmüller',
                    description: "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    image: 30
                },
                {
                    id: '4',
                    title: 'Maximilian',
                    price: 'Schwarzmüller',
                    description: "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    image: 30
                }
            ]
        }
    },
    mutations,
    getters,
    actions
}