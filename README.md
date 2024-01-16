# back-torneos
## Wolf Devs Esport Tournament

<p align="justify">
CRUD esta verificado.

## rutas:

### login: 

Post => https://back-torneos.vercel.app/auth/login
en el body, usar json o raw, un ejemplo de estructura seria:

{
  "_id": "654134ccb2647a3ae2184f7d",
  "password": "mysecretpassword"
}

### torneo:

#### Atención, esta ruta requiere de web token de "login", "Authorization: bearer token"
Get all => https://back-torneos.vercel.app/torneo
Ejemplo con "curl": curl https://back-torneos.vercel.app/torneo -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm..."

Get => https://back-torneos.vercel.app/torneo/:id

Post => https://back-torneos.vercel.app/torneo/

Put =>  https://back-torneos.vercel.app/torneo/:id

Delete => https://back-torneos.vercel.app/torneo/:id

### user:

find all => https://back-torneos.vercel.app/user

find one => https://back-torneos.vercel.app/user/654134c5b2647a3ae2184f79 (user/id)

Post => https://back-torneos.vercel.app/user
en el body, usar json o raw, un ejemplo de estructura seria:

ejemplo 1 - 

{
  "name": "Jane Smith",
  "password": "password456",
  "email": "jane.smith@example.com",
  "birth": "1995-05-15",
  "profiles": [
    {
      "userName": "janesmith",
      "description": "I love hiking and photography.",
      "avatar": "https://example.com/avatar.jpg",
      "favorites": ["Game 3", "Game 4"],
      "socialNetworks": [
        {
          "name": "Instagram",
          "url": "https://instagram.com/janesmith"
        },
        {
          "name": "Facebook",
          "url": "https://facebook.com/janesmith"
        }
      ]
    }
  ]
}

ejemplo 2 -

{
  "name": "Robert Johnson",
  "password": "password789",
  "email": "robert.johnson@example.com",
  "birth": "1985-08-10",
  "profiles": [
    {
      "userName": "robertjohnson",
      "description": "I'm a music enthusiast.",
      "avatar": "https://example.com/avatar.jpg",
      "favorites": ["Game 5", "Game 6"],
      "socialNetworks": [
        {
          "name": "YouTube",
          "url": "https://youtube.com/robertjohnson"
        },
        {
          "name": "SoundCloud",
          "url": "https://soundcloud.com/robertjohnson"
        }
      ]
    }
  ]
}

ejemplo 3 -

{
  "name": "Emily Davis",
  "password": "passwordabc",
  "email": "emily.davis@example.com",
  "birth": "1992-12-20",
  "profiles": [
    {
      "userName": "emilydavis",
      "description": "I'm a travel blogger.",
      "avatar": "https://example.com/avatar.jpg",
      "favorites": ["Game 7", "Game 8"],
      "socialNetworks": [
        {
          "name": "Blog",
          "url": "https://emilydavis.com/"
        },
        {
          "name": "Instagram",
          "url": "https://instagram.com/emilydavis"
        }
      ]
    }
  ]
}

Delete => https://test-back-torneo-1.onrender.com/user/654134c5b2647a3ae2184f79 (user/id)

Put => https://test-back-torneo-1.onrender.com/user/654134ccb2647a3ae2184f7d user/id y en el body usar json o raw, luego colocar el atributo que deseamos cambiar, un ejemplo seria:

{
"name": "Jonny 100"
}

el formato de ruta se repite con torneo, game y historia, la estrura de los datos para la creacion y la modificacion, la pueden ver en los schemas.
</p>

<p align="justify">
En el proyecto se instaló mongodb para operar con la base de datos y class-transformer, para la conexión y uso de ValidationPipe en crud.
</p>

<p align="justify">
Se creó carpeta application/torneo, para alojar torneo.controller.ts, torneo.module.ts, torneo.service.ts, con el fin de operar crud. (creo que ese seria el orden de carpetas en hexa, pero no estoy seguro)
</p>

<p align="justify">
En app.module.ts, se importa TorneoModule desde torneo.module.ts y se opera en las importaciones de @Module (linea 9), 
</p>

<p align="justify">
En torneo.module.ts se enlaza 3 componentes (schema, servicio y controller) el schema de torneo se relaciona con MongooseModule (linea 8), accede a la base de datos a través de TorneoService (linea 12) y recibe las peticiones a través de TorneoController (linea 13) finalmente se exporta la clase TorneoModule que tomamos en app.module.ts.
</p>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
