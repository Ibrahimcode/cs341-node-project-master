const path = require('path')
const fs = require('fs')

const p = path.join(__dirname, '..', 'data', 'product.json')

module.exports  = class product{
    static fetchAll(cb){
        fs.readFile(p, (err, fileContent )=>{
            let items;
            if(err){
                items = [];
            }else{
                items = json.parse(fileContent)
            }
            cb(items);
        })
    }
}