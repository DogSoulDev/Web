// TerminalController.js// TerminalController.js// TerminalController.js// TerminalController.js

// Handles logic for the interactive terminal feature

// Handles logic for the interactive terminal feature

import TerminalView from '../views/terminalView.js';

import UserModel from '../models/userModel.js';// Handles logic for the interactive terminal feature// Handles logic for the interactive terminal feature



class TerminalController {import TerminalView from '../views/terminalView.js';

    constructor() {

        this.terminalView = new TerminalView();import UserModel from '../models/userModel.js';

        this.userModel = new UserModel();

        this.commands = this.getCommands();

    }

class TerminalController {import TerminalView from '../views/terminalView.js';import TerminalView from '../Views/terminalView.js';

    getCommands() {

        return {    constructor() {

            help: {

                description: 'List available commands',        this.terminalView = new TerminalView();import UserModel from '../models/userModel.js';import UserModel from '../Models/userModel.js';

                action: () => this.terminalView.printHelp(Object.keys(this.commands)),

            },        this.userModel = new UserModel();

            about: {

                description: 'Show information about the candidate',        this.commands = this.getCommands();

                action: () => this.terminalView.printAbout(this.userModel.getProfile()),

            },    }

            skills: {

                description: 'Show cybersecurity skills',class TerminalController {class TerminalController {

                action: () => this.terminalView.printSkills(this.userModel.getSkills()),

            },    getCommands() {

            experience: {

                description: 'Show professional experience',        return {    constructor() {    constructor() {

                action: () => this.terminalView.printExperience(this.userModel.getExperience()),

            },            help: {

            contact: {

                description: 'Show contact information',                description: 'List available commands',        this.terminalView = new TerminalView();        this.terminalView = new TerminalView();

                action: () => this.terminalView.printContact(this.userModel.getContact()),

            },                action: () => this.terminalView.printHelp(Object.keys(this.commands)),

            clear: {

                description: 'Clear terminal',            },        this.userModel = new UserModel();        this.userModel = new UserModel();

                action: () => this.terminalView.clear(),

            },            about: {

            easteregg: {

                description: 'Trigger a hidden surprise',                description: 'Show information about the candidate',        this.commands = this.getCommands();        this.commands = this.getCommands();

                action: () => this.terminalView.printEasterEgg(),

            },                action: () => this.terminalView.printAbout(this.userModel.getProfile()),

        };

    }            },    }    }



    handleCommand(input) {            skills: {

        const cmd = input.trim().toLowerCase();

        if (this.commands[cmd]) {                description: 'Show cybersecurity skills',

            this.commands[cmd].action();

        } else {                action: () => this.terminalView.printSkills(this.userModel.getSkills()),

            this.terminalView.printError(`Unknown command: ${cmd}`);

        }            },    getCommands() {    getCommands() {

    }

}            experience: {



export default TerminalController;                description: 'Show professional experience',        return {        return {


                action: () => this.terminalView.printExperience(this.userModel.getExperience()),

            },            help: {            help: {

            contact: {

                description: 'Show contact information',                description: 'List available commands',                description: 'List available commands',

                action: () => this.terminalView.printContact(this.userModel.getContact()),

            },                action: () => this.terminalView.printHelp(Object.keys(this.commands)),                action: () => this.terminalView.printHelp(Object.keys(this.commands)),

            clear: {

                description: 'Clear terminal',            },            },

                action: () => this.terminalView.clear(),

            },            about: {            about: {

            easteregg: {

                description: 'Trigger a hidden surprise',                description: 'Show information about the candidate',                description: 'Show information about the candidate',

                action: () => this.terminalView.printEasterEgg(),

            },                action: () => this.terminalView.printAbout(this.userModel.getProfile()),                action: () => this.terminalView.printAbout(this.userModel.getProfile()),

        };

    }            },            },



    handleCommand(input) {            skills: {            skills: {

        const cmd = input.trim().toLowerCase();

        if (this.commands[cmd]) {                description: 'Show cybersecurity skills',                description: 'Show cybersecurity skills',

            this.commands[cmd].action();

        } else {                action: () => this.terminalView.printSkills(this.userModel.getSkills()),                action: () => this.terminalView.printSkills(this.userModel.getSkills()),

            this.terminalView.printError(`Unknown command: ${cmd}`);

        }            },            },

    }

}            experience: {            experience: {



export default TerminalController;                description: 'Show professional experience',                description: 'Show professional experience',


                action: () => this.terminalView.printExperience(this.userModel.getExperience()),                action: () => this.terminalView.printExperience(this.userModel.getExperience()),

            },            },

            contact: {            contact: {

                description: 'Show contact information',                description: 'Show contact information',

                action: () => this.terminalView.printContact(this.userModel.getContact()),                action: () => this.terminalView.printContact(this.userModel.getContact()),

            },            },

            clear: {            clear: {

                description: 'Clear terminal',                description: 'Clear terminal',

                action: () => this.terminalView.clear(),                action: () => this.terminalView.clear(),

            },            },

            easteregg: {            easteregg: {

                description: 'Trigger a hidden surprise',                description: 'Trigger a hidden surprise',

                action: () => this.terminalView.printEasterEgg(),                action: () => this.terminalView.printEasterEgg(),

            },            },

        };        };

    }    }



    handleCommand(input) {    handleCommand(input) {

        const cmd = input.trim().toLowerCase();        const cmd = input.trim().toLowerCase();

        if (this.commands[cmd]) {        if (this.commands[cmd]) {

            this.commands[cmd].action();            this.commands[cmd].action();

        } else {        } else {

            this.terminalView.printError(`Unknown command: ${cmd}`);            this.terminalView.printError(`Unknown command: ${cmd}`);

        }        }

    }    }

}}



export default TerminalController;export default TerminalController;

