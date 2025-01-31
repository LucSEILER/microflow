# microflow-cicd

## CI/CD Strategy

### Tools

#### Github

Usage of Github to manage the source code. 

* Allow to view, manage and share code, and collaborate with the other developers.
* Allow to create different branches corresponding to a feature, a fix, etc...
* Allow PR (Pull Requests) to validate the code with reviews

#### Github Actions

Udage of GA for the pipeline

#### Jira

Usage of the tool called Jira to manage all the backlog tasks. This tool has a good management system. We can create a task architecture like : 
* Project 
* Epic tasks (global task to complete the project/the sprint) 
* Tickets (all the tasks needed to complete an epic task)

This tool us fully adapted for an Agile working apporach, and allow to separate all the tasks in **Sprints** in the backlog

Also, Jira can be connected with other applications, like Github/Gitlab, Teams, etc...

Here, this repo is linked to the organization Jira board.

#### Teams

Usage of Teams to collaborate with others. It's a simple application to send message, create groups, making calls

#### Docker

Usage of Docker, a powerful tool for creating, deploying, and managing containerized applications.

Docker ensures consistency between various environments, to make the application working for every king of environment.

### Strategy

#### Github

The Github of the project will be separate in 3 repo :
* 1 backend repo -> manage the back
* 1 frontend repo -> manage the front
* 1 devops repo -> manage the CI/CD of the full project

Branch organization

The 2 principal branches :
* main -> containing the source code of the production application
* develop -> containing the new functionnalities for a new version of the app

! The main beanch should not be updated with atraditional push by anyone, but with a validated Pull Request coming from the develop branch !

Functionnal branches:
Other branches will be separate to have a better conprehension of what is in development, like :
* feature/name_of_my_feature
* fix/name_of_the_fix

=> Corresponding to the name of the Jira ticket
Ex: Jira ticket = Create user datamodel => feat/create_user_datamodel

Pull Requests (PR):
At least 1 reviewers required to validate a PR to develop, and at least 2 for the main branch.

Notification alerts

Enable alerts in Github to be informed to the potential vulnerabilities

#### Versionning/Release system

1.X.X = MAJOR Update
X.2.X = MINOR Update
X.X.3 = BUG Fixing

#### Jira

The Jira project board is created, and linked to the project repo. Jira enable to follow development steps


#### Release-it

https://www.npmjs.com/package/release-it

docker-compose up --build
