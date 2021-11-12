## Requirements
To get started, you will need
* [Node.js](https://nodejs.org/en/download/)
* [Git](https://git-scm.com/downloads)

## Clone
Open a terminal and run:
* `git clone https://github.com/InfamousStarFox/kylemccaf.com.git`
* `cd kylemccaf.com`
* `git worktree add public gh-pages`
* `npm install`

## Develop
* `npm run develop`
The site is now running at http://localhost:8000

## Deploy
If git worktree is setup,
* `npm run build`
Then cd into the `public` folder, and push the changes