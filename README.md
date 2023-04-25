# Toolshed
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/Capstone-Projects-2023-Spring/project-tool-shed/actions/workflows/deploy.yml/badge.svg)](https://github.com/Capstone-Projects-2023-Spring/project-tool-shed/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://capstone-projects-2023-spring.github.io/project-tool-shed/)



</div>

## Running Production Website
Simply visit this link:<a href="http://toolshed.symer.io:5000//"> Toolshed Website</a>. Happy tool hunting!

## Running Locally

	npm install
	npm run local

## Code Tree

    ./
    |   index.js # project entry point
    |   boilerplate.js # Core webserver stuff
    |   models.js # where Sequelize models are defined
    |   routes.js # where routes are defined.
    |   webpack.config.js # webpack config file
    |   webpack/ # frontend code that gets bundled via webpack
    |   public/ # gets served raw under <scheme>://<hostname>:<port>/public/
    |   scripts/ # devops scripts
    |   data/ # data you can use, not explicity used by app
    |   validators/ # code for validating input
    +-- templates/
    |   |  base.html # base template file
    |   |  ... more .html files that extend base.html

## Generating documentation

To generate up-to-date documentation, run `npm run docs`. This will create the necessary .md file for the documentation site.

## Keywords

Section 704, JavaScript, Google Maps API, Node, NodeJS, Database, Buy, Sell, Trade, Tool Shed, Web-based Application

## Project Abstract

This document proposes a web-based application that will allow its users to share, buy, sell, and trade tools of all kinds. Once users are registered with Tool Shed accounts, they can list their own tools and equipment available to the community. Users will also be able to see what tools are available from members of the surrounding community. Tool Shed is meant to be a low-cost solution for high-cost tools making them available at a fraction of the cost set by the owner. 

## High Level Requirement

Users will begin by registering online accounts using the Create Account option. After accounts are created, the user will manage tools they own and want to make available to the public, setting a daily rate, and availability. Users will also be able to search the local community using keywords like, “Table saw,” or “Miter Saw,” and view low cost locally owned tools available. Once a tool is selected for either buy, rent, or sell, the users will be able to make a request with the owner of the tool and agree on a data range and price. Users will be prompted to return the tool within an agreed window set by both users. 

## Conceptual Design

This application will be programmed purely in javacript (frontend and backend). Postgres will be the database, and web browsers will request pages and data from the backend (that queries the database) that are rendered via frontend code.

## Background

With many employees working from home and setting up home offices, Do It Yourself (DIY) projects are at an all-time high. With internet resources and basic knowledge, you can get a significant amount of work done without hiring an expensive professional to complete the job. The alternative to purchasing an expensive tool for a few days of use could be renting the tool from someone in the local community that has the tool available and not in use. Users will profit from what is sitting in their tool shed while the items are not being used. This will help keep the cost low for DIY projects. 

## Required Resources

This is a purely JavaScript web application project. To run locally (or ill-advisedly in production ;p), all you need is to install Docker and NodeJS >=v19. If you're running the server in production, you only need NodeJS should stop using the dockerized postgres and use a real postgres. You can configure how the server connects to the database via [PostgreSQL env vars](https://www.postgresql.org/docs/current/libpq-envars.html).. 

To run this project, you'll also need to run [this geocoder](https://github.com/natesymer/gubmint).

## Collaborators

<table>
<tr>
    <td align="center">
        <a href="https://github.com/aaronthom123">
            <img src="https://avatars.githubusercontent.com/u/89527047?v=4" width="100;" alt="aaronthom123"/>
            <br />
            <sub><b>Aaron Thomas</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Camsera">
            <img src="https://avatars.githubusercontent.com/u/42791434?v=4" width="100;" alt="Camsera"/>
            <br />
            <sub><b>Cameron Metzinger</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/lokyen">
            <img src="https://avatars.githubusercontent.com/u/39927582?v=4" width="100;" alt="lokyen"/>
            <br />
            <sub><b>Destinee Sheung</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/JustinG512">
            <img src="https://avatars.githubusercontent.com/u/59921901?v=4" width="100;" alt="JustinG512"/>
            <br />
            <sub><b>Justin Gallagher</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/zktejaka">
            <img src="https://avatars.githubusercontent.com/u/45180475?v=4" width="100;" alt="zktejaka"/>
            <br />
            <sub><b>Kat Tejada</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/natesymer">
            <img src="https://avatars.githubusercontent.com/u/889384?v=4" width="100;" alt="natesymer"/>
            <br />
            <sub><b>Nathaniel Symer</b></sub>
        </a>
    </td>
</tr>
</table>

