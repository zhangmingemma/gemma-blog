# Getting Started with xlab-cli

This project was bootstrapped with [xlab-cli](https://gitlab.pjlab.org.cn/openxlabs/xlab-web-cli/-/blob/main/README.md).

## Available Scripts

In the project directory, you can run:

`pnpm i`

Installs all the dependencies of the project.

`pnpm start`

Runs the app in the development mode.
The page will reload when you make changes.You may also see any lint errors in the console.

## Git Branch Rules

develop ====> development environment branch
release ====> staging environment branch
beta ===> beta environment branch
main ===> production environment branch

## About deploy

At first, you need to add CI/CD setting in gitlab repository:

Settings ==> CI/CD ==> set `deploy/.gitlab-ci.yml` to "CI/CD configuration file" column

Then, push code to the branch mentioned above can be deployed to the corresponding environment directly.
