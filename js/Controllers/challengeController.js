// challengeController.js
// Handles logic for the gamified CTF challenge system

import ChallengeView from '../Views/challengeView.js';

class ChallengeController {
    constructor() {
        this.challengeView = new ChallengeView();
        this.challenges = this.getChallenges();
        this.current = 0;
        this.completed = [];
    }

    getChallenges() {
        return [
            {
                id: 1,
                question: 'Decode this base64 string: ZG9nc291bGRldg==',
                answer: 'dogsouldev',
                hint: 'Try using the terminal: echo ZG9nc291bGRldg== | base64 -d',
            },
            {
                id: 2,
                question: 'What port does HTTPS use by default?',
                answer: '443',
                hint: 'Think about secure web traffic.',
            },
            {
                id: 3,
                question: 'Find the hidden flag in the terminal (try the easteregg command).',
                answer: 'flag',
                hint: 'Use your hacker intuition!',
            },
        ];
    }

    startChallenge() {
        this.current = 0;
        this.completed = [];
        this.challengeView.showChallenge(this.challenges[this.current]);
    }

    submitAnswer(answer) {
        const challenge = this.challenges[this.current];
        if (answer.trim().toLowerCase() === challenge.answer) {
            this.completed.push(challenge.id);
            this.challengeView.showSuccess(challenge);
            this.current++;
            if (this.current < this.challenges.length) {
                setTimeout(() => this.challengeView.showChallenge(this.challenges[this.current]), 1200);
            } else {
                setTimeout(() => this.challengeView.showCompletion(this.completed.length), 1200);
            }
        } else {
            this.challengeView.showError('Incorrect answer. Try again!');
        }
    }

    showHint() {
        const challenge = this.challenges[this.current];
        this.challengeView.showHint(challenge.hint);
    }
}

export default ChallengeController;
