// challengeController.js// challengeController.js// challengeController.js// challengeController.js

// Handles logic for the gamified CTF challenge system

// Handles logic for the gamified CTF challenge system

import ChallengeView from '../views/challengeView.js';

// Handles logic for the gamified CTF challenge system// Handles logic for the gamified CTF challenge system

class ChallengeController {

    constructor() {import ChallengeView from '../views/challengeView.js';

        this.challengeView = new ChallengeView();

        this.challenges = this.getChallenges();

        this.current = 0;

        this.completed = [];class ChallengeController {

    }

    constructor() {import ChallengeView from '../views/challengeView.js';import ChallengeView from '../Views/challengeView.js';

    getChallenges() {

        return [        this.challengeView = new ChallengeView();

            {

                id: 1,        this.challenges = this.getChallenges();

                question: 'Decode this base64 string: ZG9nc291bGRldg==',

                answer: 'dogsouldev',        this.current = 0;

                hint: 'Try using the terminal: echo ZG9nc291bGRldg== | base64 -d',

            },        this.completed = [];class ChallengeController {class ChallengeController {

            {

                id: 2,    }

                question: 'What port does HTTPS use by default?',

                answer: '443',    constructor() {    constructor() {

                hint: 'Think about secure web traffic.',

            },    getChallenges() {

            {

                id: 3,        return [        this.challengeView = new ChallengeView();        this.challengeView = new ChallengeView();

                question: 'Find the hidden flag in the terminal (try the easteregg command).',

                answer: 'flag',            {

                hint: 'Use your hacker intuition!',

            },                id: 1,        this.challenges = this.getChallenges();        this.challenges = this.getChallenges();

        ];

    }                question: 'Decode this base64 string: ZG9nc291bGRldg==',



    startChallenge() {                answer: 'dogsouldev',        this.current = 0;        this.current = 0;

        this.current = 0;

        this.completed = [];                hint: 'Try using the terminal: echo ZG9nc291bGRldg== | base64 -d',

        this.challengeView.showChallenge(this.challenges[this.current]);

    }            },        this.completed = [];        this.completed = [];



    submitAnswer(answer) {            {

        const challenge = this.challenges[this.current];

        if (answer.trim().toLowerCase() === challenge.answer) {                id: 2,    }    }

            this.completed.push(challenge.id);

            this.challengeView.showSuccess(challenge);                question: 'What port does HTTPS use by default?',

            this.current++;

            if (this.current < this.challenges.length) {                answer: '443',

                setTimeout(() => this.challengeView.showChallenge(this.challenges[this.current]), 1200);

            } else {                hint: 'Think about secure web traffic.',

                setTimeout(() => this.challengeView.showCompletion(this.completed.length), 1200);

            }            },    getChallenges() {    getChallenges() {

        } else {

            this.challengeView.showError('Incorrect answer. Try again!');            {

        }

    }                id: 3,        return [        return [



    showHint() {                question: 'Find the hidden flag in the terminal (try the easteregg command).',

        const challenge = this.challenges[this.current];

        this.challengeView.showHint(challenge.hint);                answer: 'flag',            {            {

    }

}                hint: 'Use your hacker intuition!',



export default ChallengeController;            },                id: 1,                id: 1,


        ];

    }                question: 'Decode this base64 string: ZG9nc291bGRldg==',                question: 'Decode this base64 string: ZG9nc291bGRldg==',



    startChallenge() {                answer: 'dogsouldev',                answer: 'dogsouldev',

        this.current = 0;

        this.completed = [];                hint: 'Try using the terminal: echo ZG9nc291bGRldg== | base64 -d',                hint: 'Try using the terminal: echo ZG9nc291bGRldg== | base64 -d',

        this.challengeView.showChallenge(this.challenges[this.current]);

    }            },            },



    submitAnswer(answer) {            {            {

        const challenge = this.challenges[this.current];

        if (answer.trim().toLowerCase() === challenge.answer) {                id: 2,                id: 2,

            this.completed.push(challenge.id);

            this.challengeView.showSuccess(challenge);                question: 'What port does HTTPS use by default?',                question: 'What port does HTTPS use by default?',

            this.current++;

            if (this.current < this.challenges.length) {                answer: '443',                answer: '443',

                setTimeout(() => this.challengeView.showChallenge(this.challenges[this.current]), 1200);

            } else {                hint: 'Think about secure web traffic.',                hint: 'Think about secure web traffic.',

                setTimeout(() => this.challengeView.showCompletion(this.completed.length), 1200);

            }            },            },

        } else {

            this.challengeView.showError('Incorrect answer. Try again!');            {            {

        }

    }                id: 3,                id: 3,



    showHint() {                question: 'Find the hidden flag in the terminal (try the easteregg command).',                question: 'Find the hidden flag in the terminal (try the easteregg command).',

        const challenge = this.challenges[this.current];

        this.challengeView.showHint(challenge.hint);                answer: 'flag',                answer: 'flag',

    }

}                hint: 'Use your hacker intuition!',                hint: 'Use your hacker intuition!',



export default ChallengeController;            },            },


        ];        ];

    }    }



    startChallenge() {    startChallenge() {

        this.current = 0;        this.current = 0;

        this.completed = [];        this.completed = [];

        this.challengeView.showChallenge(this.challenges[this.current]);        this.challengeView.showChallenge(this.challenges[this.current]);

    }    }



    submitAnswer(answer) {    submitAnswer(answer) {

        const challenge = this.challenges[this.current];        const challenge = this.challenges[this.current];

        if (answer.trim().toLowerCase() === challenge.answer) {        if (answer.trim().toLowerCase() === challenge.answer) {

            this.completed.push(challenge.id);            this.completed.push(challenge.id);

            this.challengeView.showSuccess(challenge);            this.challengeView.showSuccess(challenge);

            this.current++;            this.current++;

            if (this.current < this.challenges.length) {            if (this.current < this.challenges.length) {

                setTimeout(() => this.challengeView.showChallenge(this.challenges[this.current]), 1200);                setTimeout(() => this.challengeView.showChallenge(this.challenges[this.current]), 1200);

            } else {            } else {

                setTimeout(() => this.challengeView.showCompletion(this.completed.length), 1200);                setTimeout(() => this.challengeView.showCompletion(this.completed.length), 1200);

            }            }

        } else {        } else {

            this.challengeView.showError('Incorrect answer. Try again!');            this.challengeView.showError('Incorrect answer. Try again!');

        }        }

    }    }



    showHint() {    showHint() {

        const challenge = this.challenges[this.current];        const challenge = this.challenges[this.current];

        this.challengeView.showHint(challenge.hint);        this.challengeView.showHint(challenge.hint);

    }    }

}}



export default ChallengeController;export default ChallengeController;

