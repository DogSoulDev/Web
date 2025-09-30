// TerminalController.js
// Handles logic for the interactive terminal feature

import TerminalView from '../Views/terminalView.js';
import UserModel from '../Models/userModel.js';

class TerminalController {
    constructor() {
        this.terminalView = new TerminalView();
        this.userModel = new UserModel();
        this.commands = this.getCommands();
    }

    getCommands() {
        return {
            help: {
                description: 'List available commands',
                action: () => this.terminalView.printHelp(Object.keys(this.commands)),
            },
            about: {
                description: 'Show information about the candidate',
                action: () => this.terminalView.printAbout(this.userModel.getProfile()),
            },
            skills: {
                description: 'Show cybersecurity skills',
                action: () => this.terminalView.printSkills(this.userModel.getSkills()),
            },
            experience: {
                description: 'Show professional experience',
                action: () => this.terminalView.printExperience(this.userModel.getExperience()),
            },
            contact: {
                description: 'Show contact information',
                action: () => this.terminalView.printContact(this.userModel.getContact()),
            },
            clear: {
                description: 'Clear terminal',
                action: () => this.terminalView.clear(),
            },
            easteregg: {
                description: 'Trigger a hidden surprise',
                action: () => this.terminalView.printEasterEgg(),
            },
        };
    }

    handleCommand(input) {
        const cmd = input.trim().toLowerCase();
        if (this.commands[cmd]) {
            this.commands[cmd].action();
        } else {
            this.terminalView.printError(`Unknown command: ${cmd}`);
        }
    }
}

export default TerminalController;
