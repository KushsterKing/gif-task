Install nvm and node v11.8 if not installed
```
nvm --version # to check if nvm is not installed
# if nvm is not installed run this else skip
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

nvm install 11.8
nvm use 11.8
npm install
```

To run the project and server <br>
```
node app.js
```

To see results hit the following api with two arguments, fancy and number. Fancy can have the values yes, in which case, the value of the second argument(number) should be a ten digit number between 1111111111 and 9999999999, and no, in which case you do not need to provide the second argument(number). 
```
http://localhost:3000/?path=<path>

Example:
http://localhost:3000/?path=/Users/kush/Downloads/songs

```
