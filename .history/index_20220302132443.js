const express = require('express');
const axios = require('axios');
const router = express.Router();
const bodyParser = require('body-parser');  

const app = express();
const port = 3000;

// support parsing of application/json type post data
// app.use(bodyParser.json());
 
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function calc_pay_API(  stKode_value, 
    lt_value, 
    krTilleg_value, 
    arslonn_value, 
    endringsBelop_value,
    changedFieldName,
    lt_data
    ) {
        // something here...
        current_lt_amount = lt_data[lt_value];
        next_lt_amount = lt_data.indexOf(lt_value) +1;
        console.log('next_lt_amount: ', next_lt_amount);
        console.log('current_lt_amount: ', current_lt_amount);
        parseInt(current_lt_amount) + krTilleg_value >= next_lt_amount
}

router.post('/post_salary_data', (request, response) => {
    // console.log('request.body: ', request.body);
    var stKode = req.body.stKode_value;
    var lt = req.body.lt_value;
    var krTillegg = req.body.krTillegg_value;
    var arslonn = req.body.arslonn_value;
    var endringsBelop = req.body.endringsBelop_value;
    var changedFieldName = req.body.changedFieldName;
    const call = new Promise((resolve, reject) => {
        // call macroservice to retrieve "lonnstrinn" data
        secret = "very_secret"
        lt_data = router.get('https://api.uaa.didev.dfo.no/api/lonnstrinn')
    })
    call.then(
        // call function for calculating salary data
        calc_pay_API(stKode, lt, krTillegg, arslonn, endringsBelop, changedFieldName, lt_data)
    )

})

router.get('/', (request, response) => {
    response.send('Hello World!')
})

app.post('/post_test_data', (req,res) => {
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

});


app.use('/', router);
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});