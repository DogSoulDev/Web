// challengeView.js// challengeView.js// challengeView.js// challengeView.js

// View rendering for gamified CTF challenge system

// View rendering for gamified CTF challenge system

class ChallengeView {

    constructor() {// View rendering for gamified CTF challenge system// View rendering for gamified CTF challenge system

        this.container = document.getElementById('challenge-overlay');

        if (!this.container) {class ChallengeView {

            this.container = document.createElement('div');

            this.container.id = 'challenge-overlay';    constructor() {

            document.body.appendChild(this.container);

        }        this.container = document.getElementById('challenge-overlay');

        this.container.className = 'challenge-window';

        this.container.style.display = 'block';        if (!this.container) {class ChallengeView {class ChallengeView {

        this.container.innerHTML = '';

    }            this.container = document.createElement('div');



    showChallenge(challenge) {            this.container.id = 'challenge-overlay';    constructor() {    constructor() {

        this.container.innerHTML = `

            <div class=\"challenge-question\">${challenge.question}</div>            document.body.appendChild(this.container);

            <input id=\"challenge-answer\" type=\"text\" placeholder=\"Your answer...\" style=\"width: 300px; padding: 8px; margin-top: 10px; background: #222; color: #39ff14; border: 1px solid #39ff14; border-radius: 6px; font-family: Fira Mono, Consolas, monospace;\">

            <button id=\"challenge-submit\" style=\"margin-left: 10px; padding: 8px 16px; background: #39ff14; color: #222; border: none; border-radius: 6px; font-weight: bold;\">Submit</button>        }        this.container = document.getElementById('challenge-overlay');        this.container = document.getElementById('challenge-overlay');

            <button id=\"challenge-hint\" style=\"margin-left: 10px; padding: 8px 16px; background: #222; color: #39ff14; border: 1px solid #39ff14; border-radius: 6px;\">Hint</button>

            <div id=\"challenge-feedback\" style=\"margin-top: 10px;\"></div>        this.container.className = 'challenge-window';

        `;

        document.getElementById('challenge-submit').onclick = () => {        this.container.style.display = 'block';        if (!this.container) {        if (!this.container) {

            const answer = document.getElementById('challenge-answer').value;

            window.challengeController.submitAnswer(answer);        this.container.innerHTML = '';

        };

        document.getElementById('challenge-hint').onclick = () => {    }            this.container = document.createElement('div');            this.container = document.createElement('div');

            window.challengeController.showHint();

        };

    }

    showChallenge(challenge) {            this.container.id = 'challenge-overlay';            this.container.id = 'challenge-overlay';

    showSuccess(challenge) {

        document.getElementById('challenge-feedback').innerHTML = `<span style=\"color:#39ff14\">Correct! Challenge ${challenge.id} solved.</span>`;        this.container.innerHTML = `

    }

            <div class=\"challenge-question\">${challenge.question}</div>            document.body.appendChild(this.container);            document.body.appendChild(this.container);

    showError(msg) {

        document.getElementById('challenge-feedback').innerHTML = `<span style=\"color:#ff3939\">${msg}</span>`;            <input id=\"challenge-answer\" type=\"text\" placeholder=\"Your answer...\" style=\"width: 300px; padding: 8px; margin-top: 10px; background: #222; color: #39ff14; border: 1px solid #39ff14; border-radius: 6px; font-family: Fira Mono, Consolas, monospace;\">

    }

            <button id=\"challenge-submit\" style=\"margin-left: 10px; padding: 8px 16px; background: #39ff14; color: #222; border: none; border-radius: 6px; font-weight: bold;\">Submit</button>        }        }

    showHint(hint) {

        document.getElementById('challenge-feedback').innerHTML = `<span style=\"color:#39ff14\">Hint: ${hint}</span>`;            <button id=\"challenge-hint\" style=\"margin-left: 10px; padding: 8px 16px; background: #222; color: #39ff14; border: 1px solid #39ff14; border-radius: 6px;\">Hint</button>

    }

            <div id=\"challenge-feedback\" style=\"margin-top: 10px;\"></div>        this.container.className = 'challenge-window';        this.container.className = 'challenge-window';

    showCompletion(count) {

        this.container.innerHTML = `<div class=\"challenge-complete\">All challenges solved! You are a true hacker. (${count} challenges completed)</div>`;        `;

    }

}        document.getElementById('challenge-submit').onclick = () => {        this.container.style.display = 'block';        this.container.style.display = 'block';



export default ChallengeView;            const answer = document.getElementById('challenge-answer').value;


            window.challengeController.submitAnswer(answer);        this.container.innerHTML = '';        this.container.innerHTML = '';

        };

        document.getElementById('challenge-hint').onclick = () => {    }    }

            window.challengeController.showHint();

        };

    }

    showChallenge(challenge) {    showChallenge(challenge) {

    showSuccess(challenge) {

        document.getElementById('challenge-feedback').innerHTML = `<span style=\"color:#39ff14\">Correct! Challenge ${challenge.id} solved.</span>`;        this.container.innerHTML = `        this.container.innerHTML = `

    }

            <div class=\"challenge-question\">${challenge.question}</div>            <div class="challenge-question">${challenge.question}</div>

    showError(msg) {

        document.getElementById('challenge-feedback').innerHTML = `<span style=\"color:#ff3939\">${msg}</span>`;            <input id=\"challenge-answer\" type=\"text\" placeholder=\"Your answer...\" style=\"width: 300px; padding: 8px; margin-top: 10px; background: #222; color: #39ff14; border: 1px solid #39ff14; border-radius: 6px; font-family: Fira Mono, Consolas, monospace;\">            <input id="challenge-answer" type="text" placeholder="Your answer..." style="width: 300px; padding: 8px; margin-top: 10px; background: #222; color: #39ff14; border: 1px solid #39ff14; border-radius: 6px; font-family: Fira Mono, Consolas, monospace;">

    }

            <button id=\"challenge-submit\" style=\"margin-left: 10px; padding: 8px 16px; background: #39ff14; color: #222; border: none; border-radius: 6px; font-weight: bold;\">Submit</button>            <button id="challenge-submit" style="margin-left: 10px; padding: 8px 16px; background: #39ff14; color: #222; border: none; border-radius: 6px; font-weight: bold;">Submit</button>

    showHint(hint) {

        document.getElementById('challenge-feedback').innerHTML = `<span style=\"color:#39ff14\">Hint: ${hint}</span>`;            <button id=\"challenge-hint\" style=\"margin-left: 10px; padding: 8px 16px; background: #222; color: #39ff14; border: 1px solid #39ff14; border-radius: 6px;\">Hint</button>            <button id="challenge-hint" style="margin-left: 10px; padding: 8px 16px; background: #222; color: #39ff14; border: 1px solid #39ff14; border-radius: 6px;">Hint</button>

    }

            <div id=\"challenge-feedback\" style=\"margin-top: 10px;\"></div>            <div id="challenge-feedback" style="margin-top: 10px;"></div>

    showCompletion(count) {

        this.container.innerHTML = `<div class=\"challenge-complete\">All challenges solved! You are a true hacker. (${count} challenges completed)</div>`;        `;        `;

    }

}        document.getElementById('challenge-submit').onclick = () => {        document.getElementById('challenge-submit').onclick = () => {



export default ChallengeView;            const answer = document.getElementById('challenge-answer').value;            const answer = document.getElementById('challenge-answer').value;


            window.challengeController.submitAnswer(answer);            window.challengeController.submitAnswer(answer);

        };        };

        document.getElementById('challenge-hint').onclick = () => {        document.getElementById('challenge-hint').onclick = () => {

            window.challengeController.showHint();            window.challengeController.showHint();

        };        };

    }    }



    showSuccess(challenge) {    showSuccess(challenge) {

        document.getElementById('challenge-feedback').innerHTML = `<span style=\"color:#39ff14\">Correct! Challenge ${challenge.id} solved.</span>`;        document.getElementById('challenge-feedback').innerHTML = `<span style="color:#39ff14">Correct! Challenge ${challenge.id} solved.</span>`;

    }    }



    showError(msg) {    showError(msg) {

        document.getElementById('challenge-feedback').innerHTML = `<span style=\"color:#ff3939\">${msg}</span>`;        document.getElementById('challenge-feedback').innerHTML = `<span style="color:#ff3939">${msg}</span>`;

    }    }



    showHint(hint) {    showHint(hint) {

        document.getElementById('challenge-feedback').innerHTML = `<span style=\"color:#39ff14\">Hint: ${hint}</span>`;        document.getElementById('challenge-feedback').innerHTML = `<span style="color:#39ff14">Hint: ${hint}</span>`;

    }    }



    showCompletion(count) {    showCompletion(count) {

        this.container.innerHTML = `<div class=\"challenge-complete\">All challenges solved! You are a true hacker. (${count} challenges completed)</div>`;        this.container.innerHTML = `<div class="challenge-complete">All challenges solved! You are a true hacker. (${count} challenges completed)</div>`;

    }    }

}}



export default ChallengeView;export default ChallengeView;

