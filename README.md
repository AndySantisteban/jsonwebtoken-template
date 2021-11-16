# jsonwebtoken-template

Library that facilitates the use of jwt using reusable functions from Frontend with React.js

## Installation

```bash
npm i jsonwebtoken-template
```

## Usage

```javascript
const useJwt = require ('jsonwebtoken-template')

# Define Object
const user = {
   name : "Andy",
   password: "Santisteban"
}
# Define time expired
const expired={
    time:"1h"
}
# Define word secret
const varEnv="secret"

# Create Token
const toker = useJwt.signJwt(user,expired,varEnv)

console.log(toker)

# Decodificed Token
const decoded = useJwt.verifyJwt(toker,varEnv)

console.log(decoded)

```

If you want to add it to the browser's localStorage you can use the following example


```javascript

 sendTokenLocalStorage(key,token)

```

Si deseas agregarlo al sessionStorage del navegador puedes utilizar el siguiente ejemplo (no recomendable)

```javascript


 sendTokenSessionStorage(key,token)

```


## Version

1.0.6

## Author

Andy Santisteban

## License

[MIT](https://choosealicense.com/licenses/mit/)
