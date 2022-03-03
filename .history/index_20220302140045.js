const express = require('express');
const axios = require('axios');
const LinkedList = require('./linkedList');
const ListNode = require('./linkedList');
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
    var stKode = request.body.stKode_value;
    var lt = request.body.lt_value;
    var krTillegg = request.body.krTillegg_value;
    var arslonn = request.body.arslonn_value;
    var endringsBelop = request.body.endringsBelop_value;
    var changedFieldName = request.body.changedFieldName;
    const call = new Promise((resolve, reject) => {
        // call macroservice to retrieve "lonnstrinn" data
        var secret = "very_secret"
        // lt_data = router.get('https://api.uaa.didev.dfo.no/api/lonnstrinn')
        return lt_data = {
            19: "309 800",   20: "313 300",   21: "317 300",   22:  "320 900",   23:  "324 800",   24: "328 800", 
            25: "333 000",   26: "337 300",   27: "341 300",   28:  "345 300",   29:  "349 100",   30: "353 100",
            31: "356 700",   32: "360 900",   33: "364 800",   34:  "369 000",   35:  "373 200",   36: "377 500",
            37: "382 300",   38: "387 100",   39: "391 800",   40:  "396 900",   41:  "402 000",   42: "407 900",
            43: "413 500",   44: "419 600",   45: "425 600",   46:  "431 900",   47:  "439 900",   48: "446 800",
            49: "454 200",   50: "461 300",   51: "468 300",   52:  "475 800",   53:  "483 700",   54: "491 200",
            55: "499 500",   56: "507 600",   57: "516 100",   58:  "524 900",   59:  "534 400",   60: "543 500",
            61: "553 500",   62: "563 900",   63: "574 700",   64:  "583 500",   65:  "594 300",   66: "604 700",
            67: "615 800",   68: "626 100",   69: "637 900",   70:  "650 300",   71:  "665 700",   72: "677 600",
            73: "689 600",   74: "702 100",   75: "715 900",   76:  "734 400",   77:  "752 800",   78: "776 900",
            79: "801 300",   80: "825 900",   81: "850 000",   82:  "873 400",   83:  "896 500",   84: "919 700",
            85: "948 900",   86: "977 600",   87: "1 007 100", 88:  "1 030 100", 89:  "1 053 300", 90: "1 076 500",
            91: "1 100 000", 92: "1 123 000", 93: "1 146 300", 94:  "1 169 500", 95:  "1 192 900", 96: "1 215 600",
            97: "1 238 400", 98: "1 261 200", 99: "1 283 000", 100: "1 304 700", 101: "1 326 500"
    }
    let list = new LinkedList()
    for(i=19; i<102; i++) {
        let cdata = lt_data[i]
        let new_node = new ListNode(cdata);
        LinkedList(new_node);
        console.log('new_node: ', new_node);
    }
    console.log(list.head.next.data)
    })
    call.then(
        // call function for calculating salary data
        calc_pay_API(stKode, lt, krTillegg, arslonn, endringsBelop, changedFieldName, lt_data)
    )

})

router.get('/', (request, response) => {
    response.send('Hello World!')
})

app.use('/', router);
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});