const express = require('express');

const app = express();

const fs = require('fs');

app.get('/', (req, res)=>{

    const directoryPath = req.query.path;

    let count = 0;

    fs.readdir(directoryPath, (err, files) => {
        // handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        // listing all files using forEach
        files.forEach( (file) => {
            // Do whatever you want to do with the file

            if(file.endsWith('.gif')){
                count++;
            }
        });

        if(count > 0){
            res.status(201).send({"status":"FILE_FOUND","n":count})
        } else {
            res.status(400).send({"status":"FILE_NOT_FOUND","n":0})
        }
    });

});

app.listen('3000',  () => {
    console.log('listening to port 3000')
});