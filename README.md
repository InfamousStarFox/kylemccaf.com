## Setup

To get started, you will need:
* [Node.js](https://nodejs.org/en/download/)
* [Git](https://git-scm.com/downloads)

In a terminal run:
```shell
git clone https://github.com/InfamousStarFox/kylemccaf.com.git
cd kylemccaf.com
git worktree add public gh-pages
npm install
```

## Develop
```
npm run develop
```
The site is now running at http://localhost:8000

## Deploy
To deploy via git worktree:
```
npm run build
```
Navigate into the auto-generated folder `public`, and commit the changes
Note: `public/.git` may need to be temporarily removed for the build to succeed