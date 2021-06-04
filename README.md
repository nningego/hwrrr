Inspired by https://futurama.fandom.com/wiki/Lrrr

# Setup API, DB with docker:
`docker-compose up -d --build`

`docker-compose -f docker-compose.yml logs -f`

`bin/rails db:create`

`bin/rails db:migrate`

`bin/rails db:seed`

`curl http://127.0.0.1:3000/articles/1`

# api

### Starting API only:
`docker-compose up -d --build db`

`cd api`

`bundle install`

`bin/rails db:create`

`bin/rails db:migrate`

`bin/rails db:seed`

`bin/rails server`

# ui

### Starting UI only:
`cd ui`

`npm i`

`npm start`

Open: `http://localhost:3001/` in browser