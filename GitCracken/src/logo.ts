/*****************************************************************************
 * GitCracken - GitKraken utils for non-commercial use                       *
 * Copyright (C) 2017  https://github.com/KillWolfVlad                       *
 *                                                                           *
 * This file is part of GitCracken.                                          *
 *                                                                           *
 * GitCracken is free software: you can redistribute it and/or modify        *
 * it under the terms of the GNU General Public License as published by      *
 * the Free Software Foundation, either version 3 of the License, or         *
 * (at your option) any later version.                                       *
 *                                                                           *
 * GitCracken is distributed in the hope that it will be useful,             *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of            *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the             *
 * GNU General Public License for more details.                              *
 *                                                                           *
 * You should have received a copy of the GNU General Public License         *
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.     *
 *****************************************************************************/

/// <reference path='./types/figlet.d.ts' />

import chalk from 'chalk';
import * as figlet from 'figlet';

const packageJson = require('../package.json');

/**
 * Logo
 */
export class Logo {
    /**
     * Print logo
     * @param {string} text Main text
     */
    public static print(text = 'GitCracken') {
        console.log();
        console.log(figlet.textSync(text, 'ANSI Shadow'));
        console.log(`${chalk.bold('• Description')}: ${packageJson.description}`);
        console.log(`${chalk.bold('• Version')}: ${packageJson.version}`);
        console.log(`${chalk.bold('• Author')}: ${packageJson.author.name || packageJson.author}`);
        console.log(`${chalk.bold('• License')}: ${packageJson.license}`);
        console.log(`${chalk.bold('• Home Page')}: ${packageJson.homepage}`);
        console.log();
    }
}
