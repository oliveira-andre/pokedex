### example requests


get all pokemons

```
curl -X "GET" 'http://localhost:3333/pokemons' | jq
```

create a pokemon

```
curl -X "POST" --data-raw '{ "name": "charmander", "type": "dragon", "item": "nothing", "weakness": "water", "description": "selvagem" }' -H 'Content-Type: Application/json' 'http://localhost:3333/pokemons'
```

upload archive

```
curl -X "POST" -F 'avatar=@/Users/codeman/Downloads/memes/charmander.png' 'http://localhost:3333/upload' | jq
```
