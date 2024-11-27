# NestJS with GraphQL: A Step-by-Step Guide

This project demonstrates how to build a dynamic Node.js application using **NestJS** and **GraphQL**. It covers setting up a NestJS application, integrating GraphQL, and implementing essential components such as Object Types, Resolvers, Modules, a User Service, and Mutations.

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
- [NestJS with GraphQL Integration](#nestjs-with-graphql-integration)
  - [Object Types](#object-types)
  - [Resolver](#resolver)
  - [Module](#module)
  - [User Service](#user-service)
  - [Creating a Mutation](#creating-a-mutation)
- [Running the Application](#running-the-application)
- [License](#license)

---

## Introduction
**NestJS** is a progressive Node.js framework for building scalable and efficient server-side applications. **GraphQL** is a powerful query language for APIs, allowing clients to request only the data they need. Together, they enable the development of robust and flexible applications.

---

## Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v14 or later)
- **npm** or **yarn**
- **NestJS CLI**  
  Install using:  
  ```bash
  npm install -g @nestjs/cli
---


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Install GraphQL Dependencies
```bash
$ npm install @nestjs/graphql graphql-tools graphql apollo-server-express
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.


## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
