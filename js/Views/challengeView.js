// challengeView.js
// View rendering for gamified CTF challenge system

class ChallengeView {
    constructor() {
        this.container = document.getElementById('challenge-overlay');
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.id = 'challenge-overlay';
            document.body.appendChild(this.container);
        }
        this.container.className = 'challenge-window';
        this.container.style.display = 'block';
        this.container.innerHTML = '';
    }

    showChallenge(challenge) {
        this.container.innerHTML = `
            <div class="challenge-question">${challenge.question}</div>
            <input id="challenge-answer" type="text" placeholder="Your answer..." style="width: 300px; padding: 8px; margin-top: 10px; background: #222; color: #39ff14; border: 1px solid #39ff14; border-radius: 6px; font-family: Fira Mono, Consolas, monospace;">
            <button id="challenge-submit" style="margin-left: 10px; padding: 8px 16px; background: #39ff14; color: #222; border: none; border-radius: 6px; font-weight: bold;">Submit</button>
            <button id="challenge-hint" style="margin-left: 10px; padding: 8px 16px; background: #222; color: #39ff14; border: 1px solid #39ff14; border-radius: 6px;">Hint</button>
            <div id="challenge-feedback" style="margin-top: 10px;"></div>
        `;
        document.getElementById('challenge-submit').onclick = () => {
            const answer = document.getElementById('challenge-answer').value;
            window.challengeController.submitAnswer(answer);
        };
        document.getElementById('challenge-hint').onclick = () => {
            window.challengeController.showHint();
        };
    }

    showSuccess(challenge) {
        document.getElementById('challenge-feedback').innerHTML = `<span style="color:#39ff14">Correct! Challenge ${challenge.id} solved.</span>`;
    }

    showError(msg) {
        document.getElementById('challenge-feedback').innerHTML = `<span style="color:#ff3939">${msg}</span>`;
    }

    showHint(hint) {
        document.getElementById('challenge-feedback').innerHTML = `<span style="color:#39ff14">Hint: ${hint}</span>`;
    }

    showCompletion(count) {
        this.container.innerHTML = `<div class="challenge-complete">All challenges solved! You are a true hacker. (${count} challenges completed)</div>`;
    }
}

export default ChallengeView;
