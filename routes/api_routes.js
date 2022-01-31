const router = require('express').Router();
const db = require('../db/db.json')
//Manages files
const fs = require('fs');
//Node library that gives a set of functions
const util = require('util');
//Using a function from the util library and wraps the fs.readfile function to make asynchronous
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


//read the database
function retrieveDB() {
    return readFileAsync('db/db.json', 'utf-8')
}

//when the user adds something new to the database -> receive a 200 status reponse otherwise if unsucessfull recieve a 400 error
function postDB(notes) {   
    return writeFileAsync('db/db.json',JSON.stringify(notes))
}

router.get("/notes", async (req, res) => {
    const currentNotes = await retrieveDB();
    console.log('current notes', currentNotes);
    res.json(currentNotes).status(200);
})

router.post("/notes", async(req,res)=>{
    //request has 2 pieces of info -> req.body the title and the text
    //Add an id to the req.body info
    //retireve the current database -> currentNotes (is an array)
    //Add req.body data and the generated id via currentNotes.push(...)
    //the call postDB(currentNotes)
    //return res.status(201); 
})


module.exports = router