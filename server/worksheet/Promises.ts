import { readFile, readFileSync } from "fs";
import mongoose, { Schema } from "mongoose";


function readMyFile(path: string) {
    try {

        mongoose.connect('')
            .then(data => {

            })

            .catch(err => {
                throw new ErrorEvent('error')
            })
        const m = mongoose.model('model', new Schema({ name: { type: String } }))

        m.find({})
            .then(d => {
                throw new Error('FROM THE D.')
            })
            .catch(err => {
                console.log("Mongo ERror: " + err);
            })
    } catch (err) {
        console.log('some error happened');
    }
}

console.log('-----------')
readMyFile('somefile');
console.log('-----------')