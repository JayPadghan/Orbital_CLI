#!/usr/bin/env node   

import dotenv from "dotenv";
import chalk from "chalk";
import figlet from "figlet";
import {Command} from "commander";
import { login } from "./commands/auth/login.js";

dotenv.config();

async function main() {
    // Display the banner
    console.log(
        chalk.cyanBright(
            figlet.textSync("Orbital CLI", {
                font: "Standard",
                horizontalLayout: "default",
            })
        )
    );
    console.log(chalk.gray("A Cli based AI tool \n"));

    const program = new Command("orbital");

    program
        .version("0.0.1")
        .description("Orbit CLI - Device Flow Authentication");


     // Add commands
    // program.addCommand(wakeUp);
    program.addCommand(login);
    // program.addCommand(logout);
    // program.addCommand(whoami);

    // Default action shows help
    program.action(() => {
        program.help();
    });

    program.parse();
}

main().catch((error) => {
  console.error(chalk.red("Error running Orbit CLI:"), error);
  process.exit(1);
});