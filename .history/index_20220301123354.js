const express = require('express');
var bodyParser = require('body-parser');  
const app = express();
const port = 3000;

// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
// app.use(express.static('public'));  
// app.get('/index.html', function (req, res) {  
//    res.sendFile( __dirname + "/" + "index.html" );  
// })  
app.post('/post/calc_pay', urlencodedParser, function (req, res) {  
   // Prepare output in JSON format  
   response = {  
        // stKode_value: req.body.stKode_value,
        // lt_value: req.body.lt_value,
        // krTilleg_value: req.body.krTilleg_value,
        // arslonn_value: req.body.arslonn_value,
        // endringsBelop_value: req.body.endringsBelop_value,
        // changedFieldName: req.body.changedFieldName,
        first_name:req.body.first_name,  
        last_name:req.body.last_name  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})  

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

// app.get('/get/calc_pay', (req, res) => {
//     res.json({
//         stKode_value: '',
//         lt_value: '',
//         krTilleg_value: '',
//         arslonn_value: '',
//         endringsBelop_value: '',
//         changedFieldName: ''
//     })
// })
var server = app.listen(8000, function () {  
    var host = server.address().address  
    var port = server.address().port  
    console.log(`Example app listening at http://%s:%s`, host, port)  
  })  
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });