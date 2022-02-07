const fs = require('fs');
module.exports = function(app){

    app.route('/api/notes')
    .get(function(req, res){
       fs.readFile('./Develop/db/db.json', 'utf-8', (err, data) => {
           if (err) throw err;
           let db = JSON.parse(data);
           res.send(JSON.stringify(db))    
       })
        
    })
    .post(function(req, res){
        console.log(JSON.stringify(req.body));

       
        fs.readFile('./Develop/db/db.json', 'utf-8', (err, data) => {
            if (err) throw err;
            let db = JSON.parse(data);
            console.log('db', db);
            db.push(req.body);
             
            fs.writeFile('./Develop/db/db.json', JSON.stringify(db, null, 2), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
                res.send('It worked')
            });
        });
       
        
    });





}