const express = require('express');
const axios = require('axios');
var bodyParser = require('body-parser');  

const app = express();
const port = 3000;

// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your route handlers!
app.use(express.json());

app.post('/postTest', (req, res) => {
    req.body; // JavaScript object containing the parse JSON
    res.json(req.body);
  });
const server = async () => {
    await app.listen(3000);
}
// Demo showing the server in action
// const axios = require('axios');
const res = async () => {
    await axios.post('http://localhost:3000/', {
answer: 42
}) }
console.log('res.data: ', res.data);
res.data; // `{ answer: 42 }`




// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
// app.use(express.static('public'));  
// app.get('/index.html', function (req, res) {  
//    res.sendFile( __dirname + "/" + "index.html" );  
// })  
// app.post('/post/calc_pay', urlencodedParser, (req, res) => {  
//    // Prepare output in JSON format  
//    response = {  
//         // stKode_value: req.body.stKode_value,
//         // lt_value: req.body.lt_value,
//         // krTilleg_value: req.body.krTilleg_value,
//         // arslonn_value: req.body.arslonn_value,
//         // endringsBelop_value: req.body.endringsBelop_value,
//         // changedFieldName: req.body.changedFieldName,
//         first_name:req.body.first_name,  
//         last_name:req.body.last_name  
//    };  
//    console.log(response);  
//    res.end(JSON.stringify(response));  
// })  

function calc_pay_API(  stKode_value, 
                        lt_value, 
                        krTilleg_value, 
                        arslonn_value, 
                        endringsBelop_value,
                        changedFieldName
                        ) {

}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.post()

app.get('/get/calc_pay', (req, res) => {
    res.json({
        stKode_value: '',
        lt_value: '',
        krTilleg_value: '',
        arslonn_value: '',
        endringsBelop_value: '',
        changedFieldName: ''
    })
})
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});