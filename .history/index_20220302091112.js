const express = require('express');
const axios = require('axios');
const router = express.Router();
var bodyParser = require('body-parser');  

const app = express();
const port = 3000;

// support parsing of application/json type post data
// app.use(bodyParser.json());
 
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//tell express what to do when the /about route is requested
app.post('/form', function(req, res){
    res.setHeader('Content-Type', 'application/json');
 
    //mimic a slow network connection
    setTimeout(function(){
 
        res.send(JSON.stringify({
            firstName: req.body.firstName || null,
            lastName: req.body.lastName || null
        }));
 
    }, 1000)
 
    //debugging output for the terminal
    // console.log('you posted: First Name: ' + req.body.firstName + ', Last Name: ' + req.body.lastName);
});

router.post('/post_salary_data', (request, response) => {
    console.log('request.body: ', response.body);
    response.send('test');

})

router.get('/', (request, response) => {
    response.send('Hello World!')
})

app.post('/post_test_data', (req,res) => {
    console.log('**req: ', req);
    var stKode = req.body.stKode_value;
    var lt = req.body.lt_value;
    var krTillegg = req.body.krTillegg_value;
    var arslonn = req.body.arslonn_value;
    var endringsBelop = req.body.endringsBelop_value;
    var changedFieldName = req.body.changedFieldName;
    var data = { // for testing and debugging purposes
        stKode: stKode,
        lt: lt,
        krTillegg: krTillegg,
        arslonn: arslonn,
        endringsBelop: endringsBelop,
        changedFieldName: changedFieldName
    }
    res.setHeader('Content-Type', 'application/json');

    //mimic a slow network connection
    setTimeout(function(){
 
        res.send(JSON.stringify({
            stKode: data || null,
            lt: req.body.lt_value || null,
            krTilleg: req.body.krTillegg_value || null,
            arslonn: req.body.arslonn_value || null,
            endringsBelop: req.body.endringsBelop_value || null,
            changedFieldName: req.body.changedFieldName_value || null
        }));
 
    }, 1000)
 
    //debugging output for the terminal
    console.log('you posted: stKode: ' + req.body.stKode_value + ', krTillegg: ' + req.body.krTilleg_value);

    
    // console.log('data: ', data);

    // connection.query("SELECT * from login WHERE email=? and password=? LIMIT 1",[email,pass],function(err, rows, fields){
    //     if(rows.length != 0){
    //         data["Data"] = "Successfully logged in..";
    //         res.json(data);
    //     }else{
    //         data["Data"] = "Email or password is incorrect.";
    //         res.json(data);
    //     }
    // });
});

function calc_pay_API(  stKode_value, 
                        lt_value, 
                        krTilleg_value, 
                        arslonn_value, 
                        endringsBelop_value,
                        changedFieldName
                        ) {

}

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use('/', router);
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});