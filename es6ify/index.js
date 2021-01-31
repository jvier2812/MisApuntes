const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
let startScript = 'nodemon --exec babel-node index.js'  
let command = 'npm install --save-dev @babel/core @babel/node @babel/preset-env nodemon'

const packageLocation = path.join(process.env.PWD, 'package.json')
const getFile = (location) => JSON.parse(fs.readFileSync(location))
const setFile = (file, location) => fs.writeFileSync(
	location, 
	JSON.stringify(file, null, 4)
    )
let packageJson = {}
try{
    packageJson = getFile(packageLocation)
    packageJson.scripts.start = startScript 
    setFile(packageJson, packageLocation)
}
catch (error) {
    console.log('No Package.json, creating one...')
    setFile(require('./src/defaultPackage.json') , packageLocation)
    packageJson = getFile(packageLocation) 
}

setFile(require('./src/babel.config.json'),path.join(process.env.PWD, 'babel.config.json' ))
console.log(packageJson)

console.log('Installing dev deps, this may take a while...')
exec(command, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

console.log('Finish! Just run: npm start')
