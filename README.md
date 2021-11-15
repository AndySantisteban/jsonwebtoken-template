# jsonwebtoken-template

Library that facilitates the use of jwt using reusable functions

## Installation

```bash
npm i jsonwebtoken-template
```

## Usage

```python
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
const toker = tokenResource.signJwt(user,expired,varEnv)

console.log(toker)

# Decodificed Token
const decoded = tokenResource.verifyJwt(toker,varEnv)

console.log(decoded)

```

## Version

1.0.3

## Author

Andy Santisteban

## License

[MIT](https://choosealicense.com/licenses/mit/)
