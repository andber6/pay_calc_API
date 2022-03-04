const express = require('express');
const axios = require('axios');
const LinkedList = require('./linkedList').LinkedList;
const ListNode = require('./linkedList').ListNode;
const router = express.Router();
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
let lt_new;
 
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function get_correct_lt_based_on_additional_pay(amount, list, lt) {
    // console.log('true of false: ', amount >= parseInt(list.lt_salary(lt+1)))
    lt_new = lt
    if (amount >= parseInt(list.lt_salary(lt+1))){
        // next_lt = lt +1
        lt_salary_converted = list.lt_salary(lt+1).replace(/\s/g, ``)

        additional_pay = amount - parseInt(lt_salary_converted)

        // lt_salary_converted = list.lt_salary(next_lt).replace(/\s/g, ``)
        // console.log('lt_salary_converted: ', parseInt(lt_salary_converted))

        lt_next_salary_converted = list.lt_salary(lt+1).replace(/\s/g, ``)

        console.log('****parseInt(lt_next_salary_converted): ', parseInt(lt_next_salary_converted))

        if (additional_pay + parseInt(lt_salary_converted) > parseInt(lt_next_salary_converted)) {
            lt_new = lt +1
            get_correct_lt_based_on_additional_pay(amount, list, lt_new)
        } else {
            console.log('lt her: ', lt)
            return lt_new;
        }
    } else {
        console.log('lt her: ', lt)
        return lt_new;
    }
}

function calc_pay(  
    stKode_value, 
    lt_value, 
    krTilleg_value, 
    arslonn_value, 
    endringsBelop_value,
    changedFieldName,
    lt_data,
    list
    ) {
        // console.log(lt_data)
        // let new_node = new ListNode(lt_value);
        // let list = new LinkedList();
        // for(i=19; i<102; i++) {
        //     let cdata = lt_data[i]
        //     list.add(cdata);

        // }
        // var lt_test = 55;
        // console.log("lønn etter 55: ",list.lt_salary(lt_test +1));
        // console.log('number of nodes: ', list.size());
        // console.log('list: ', list);
        // arslonn_value = list.lt_salary(lt_value)
        
        // current_lt_amount = lt_data[lt_value];
        // next_lt_amount = lt_data.indexOf(lt_value) +1;
        // console.log('next_lt_amount: ', next_lt_amount);
        // console.log('current_lt_amount: ', current_lt_amount);
        // parseInt(current_lt_amount) + krTilleg_value >= next_lt_amount
}

router.post('/post_salary_data', (request, response) => {

    var stKode = request.body.stKode_value;
    var lt = request.body.lt_value;
    var krTillegg = request.body.krTillegg_value;
    var arslonn = request.body.arslonn_value;
    var endringsBelop = request.body.endringsBelop_value;
    var changedFieldName = request.body.changedFieldName;
    let list = new LinkedList();
    // hardcoded until DIFI's salary API is ready
    const lt_data = {
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
    for(i=19; i<102; i++) {
        let cdata = lt_data[i]
        list.add(cdata);

    }
    var secret = "very_secret"
    response.setHeader("secret", secret)
    // calc_pay(stKode, lt, krTillegg, arslonn, endringsBelop, changedFieldName, lt_data)
    const call = new Promise((resolve, reject) => 
        // call macroservice to retrieve "lonnstrinn" data
        
        // lt_data = router.get('https://api.uaa.didev.dfo.no/api/lonnstrinn')
    resolve( //() => {
        
        // if(calc_additional_pay(lt, krTillegg))  {

        //}}
    
    )
    )

    call.then(
        arslonn = list.lt_salary(lt),
        trimmed_arslonn = arslonn.replace(/\s/g, ``),
        console.log('Årslønn + kronetillegg: ', parseInt(trimmed_arslonn) + parseInt(krTillegg)),
        arslonn_plus_krTillegg = parseInt(trimmed_arslonn) + parseInt(krTillegg),
        // () => {
        //     if (arslonn_plus_krTillegg > list.lt_salary(lt+1)){
        //         additional_pay = arslonn_plus_krTillegg - parseInt(list.lt_salary(lt +1))
        //     }
        // },
        console.log('lt før func: ', lt),
        get_correct_lt_based_on_additional_pay(arslonn_plus_krTillegg, list, lt),
        console.log('lt_new etter func: ', lt_new),
        // call function for calculating salary data
        calc_pay(stKode, lt, krTillegg, arslonn, endringsBelop, changedFieldName, lt_data, list)
    )
    response.send('lønnen for lønnstrinn ' + lt + ' = ' + arslonn);

})

router.get('/', (request, response) => {
    response.send('Hello World!')
})

app.use('/', router);
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});