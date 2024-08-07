#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgCyanBright.blueBright.bold(`\n ===== Adventure Game ===== \n`));

class khilari{
    name : string
    fuel :number = 100
    constructor(nam : string){
        this.name = nam
    }

    fuelDecrease(){
        let Fuel = this.fuel - 25
        this.fuel = Fuel
    }

    fuelIncrease(){
        this.fuel = 100
    }
}

class opponent{
    name : string
    fuel :number = 100
    constructor(nam : string){
        this.name = nam
    }

    fuelDecrease(){
        let Fuel = this.fuel - 25
        this.fuel = Fuel
    }
}

let player = await inquirer.prompt(
    [
        {
            name : "name",
            type : "input",
            message :chalk.blueBright.bold("please Enter your Name:")
        }
    ]
)

let Opponent = await inquirer.prompt(
    [
        {
            name : "select",
            type : "list",
            message : chalk.blueBright.bold("please select your oponent:"),
            choices: ["Dracula" , "Monster" , "Zombie"]
        }
    ]
)

let p1 = new khilari(player.name)
let o1 = new opponent(Opponent.select)

do{
    // ==Dracula==
    if(Opponent.select == "Dracula"){
        let ask = await inquirer.prompt(
            [
                {
                    name : "opt",
                    type: "list",
                    message: chalk.blueBright.bold("Select your action:"),
                    choices: ["Attack" , "Drinking" , "Run away"]
                }
            ]
        );
        if(ask.opt == "Attack"){
            let  numb = Math.floor(Math.random() * 2 )
            if(numb > 0){
                p1.fuelDecrease()
                console.log(chalk.greenBright.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.yellowBright.bold(`${o1.name} fuel is ${o1.fuel}`));
                if(p1.fuel <= 0){
                    console.log(chalk.redBright.bold("you loose, better luck next Time"));
                    process.exit()
                }
            }
            if(numb <= 0){
                o1.fuelDecrease()
                    console.log(chalk.greenBright.bold(`${p1.name} fuel is ${p1.fuel}`));
                    console.log(chalk.yellowBright.bold(`${o1.name} fuel is ${o1.fuel}`));
                    if(o1.fuel <= 0){
                        console.log(chalk.cyan.bold("You win:)"));
                        process.exit()
                    }
            }
        }
        if(ask.opt == "Drinking"){
            p1.fuelIncrease()
            console.log(chalk.magenta.bold(`you Drink Health portion your fuel is ${p1.fuel}`))
        }
        if(ask.opt == "Run away"){
            console.log(chalk.redBright.bold("you loose, better luck next Time"));
            process.exit()
        }
    }

    // ==Monster==
    if(Opponent.select == "Monster"){
        let ask = await inquirer.prompt(
            [
                {
                    name : "opt",
                    type: "list",
                    message: chalk.blueBright.bold("Select your action:"),
                    choices: ["Attack" , "Drinking" , "Run away"]
                }
            ]
        );
        if(ask.opt == "Attack"){
            let  numb = Math.floor(Math.random() * 2 )
            if(numb > 0){
                p1.fuelDecrease()
                console.log(chalk.greenBright.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.yellowBright.bold(`${o1.name} fuel is ${o1.fuel}`));
                if(p1.fuel <= 0){
                    console.log(chalk.redBright.bold("you loose, better luck next Time"));
                    process.exit()
                }
            }
            if(numb <= 0){
                o1.fuelDecrease()
                    console.log(chalk.greenBright.bold(`${p1.name} fuel is ${p1.fuel}`));
                    console.log(chalk.yellowBright.bold(`${o1.name} fuel is ${o1.fuel}`));
                    if(o1.fuel <= 0){
                        console.log(chalk.cyanBright.bold("You win:)"));
                        process.exit()
                    }
            }
        }
        if(ask.opt == "Drinking"){
            p1.fuelIncrease()
            console.log(chalk.magenta.bold(`you Drink Health portion your fuel is ${p1.fuel}`))
        }
        if(ask.opt == "Run away"){
            console.log(chalk.redBright.bold("you loose, better luck next Time"));
            process.exit()
        }
    }

    // ==Zombie==

    if(Opponent.select == "Zombie"){
        let ask = await inquirer.prompt(
            [
                {
                    name : "opt",
                    type: "list",
                    message: chalk.blueBright.bold("Select your action:"),
                    choices: ["Attack" , "Drinking" , "Run away"]
                }
            ]
        );
        if(ask.opt == "Attack"){
            let  numb = Math.floor(Math.random() * 2 )
            if(numb > 0){
                p1.fuelDecrease()
                console.log(chalk.greenBright.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.yellowBright.bold(`${o1.name} fuel is ${o1.fuel}`));
                if(p1.fuel <= 0){
                    console.log(chalk.redBright.bold("you loose, better luck next Time"));
                    process.exit()
                }
            }
            if(numb <= 0){
                o1.fuelDecrease()
                    console.log(chalk.greenBright.bold(`${p1.name} fuel is ${p1.fuel}`));
                    console.log(chalk.yellowBright.bold(`${o1.name} fuel is ${o1.fuel}`));
                    if(o1.fuel <= 0){
                        console.log(chalk.cyanBright.bold("You win:)"));
                        process.exit()
                    }
            }
        }
        if(ask.opt == "Drinking"){
            p1.fuelIncrease()
            console.log(chalk.magenta.bold(`you Drink Health portion your fuel is ${p1.fuel}`))
        }
        if(ask.opt == "Run away"){
            console.log(chalk.redBright.bold("you loose, better luck next Time"));
            process.exit()
        }
    }
}           
while(true)
