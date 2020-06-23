### example requests


get all pokemons

```
curl -X "GET" 'http://localhost:3333/pokemons' | jq
```

create a pokemon

```
curl -X "POST" --data-raw '{ "name": "charmander", "type": "dragon", "item": "nothing", "weakness": "water", "description": "selvagem" }' -H 'Content-Type: Application/json' 'http://localhost:3333/pokemons'
```

upload avatar file

```
curl -X "POST" -F 'avatar=@/Users/codeman/Downloads/memes/charmander.png' 'http://localhost:3333/upload' | jq
```

associate avatar with pokemon

```
curl -X "PUT" -d '{ "avatar_id": "8" }' -H 'Content-Type: Application/json' 'http://localhost:3333/pokemons/1' | jq
```

find file by id

```
curl -X "GET" -H 'Content-Type: Application/json' 'http://localhost:3333/file/2' | jq
```
