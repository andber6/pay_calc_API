const express = require('express');
const axios = require('axios');
const LinkedList = require('./linkedList').LinkedList;
const ListNode = require('./linkedList').ListNode;
const router = express.Router();
const bodyParser = require('body-parser');
const lt_data = require('./lt_data');


const app = express();
const port = 3000;
let lt_new;
let additional_pay_res;
let salary_outside_range;
 
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function get_correct_lt_based_on_additional_pay(amount, list, lt) {
    lt_new = lt
    x = list.getFirst().data.replace(/\s/g, ``)

    salary_outside_range = false;
    // if not the last two salary steps then continue
    if(!(amount >= parseInt(x))) {
        if (amount >= parseInt(list.lt_salary(lt+1))){
            // next_lt = lt +1
            lt_salary_converted = list.lt_salary(lt).replace(/\s/g, ``)

            // Calculate additional pay and store the absolute value of it as a global variable to be used in the response
            additional_pay = amount - parseInt(lt_salary_converted)
            additional_pay < 0 ? additional_pay_res = additional_pay * (-1) : additional_pay_res = additional_pay

            lt_next_salary_converted = list.lt_salary(lt+1).replace(/\s/g, ``)

            if (additional_pay + parseInt(lt_salary_converted) > parseInt(lt_next_salary_converted)) {
                lt_new = lt +1
                get_correct_lt_based_on_additional_pay(amount, list, lt_new)
            } else {
                
                return lt_new;
            }
        } else {
            
            return lt_new;
        }
    } else {
        // salary step is already the last one
        if(list.lt_salary(lt) === list.getFirst().data) {

            lt_salary_converted = list.lt_salary(lt).replace(/\s/g, ``)

            additional_pay = amount - parseInt(lt_salary_converted)
            additional_pay < 0 ? additional_pay_res = additional_pay * (-1) : additional_pay_res = additional_pay

            return lt_new;
        }
        // salary step is the second last one

        // lt_next_salary_converted is the last salary step
        lt_next_salary_converted = list.lt_salary(lt+1).replace(/\s/g, ``)

        additional_pay = amount - parseInt(lt_next_salary_converted)
        additional_pay < 0 ? additional_pay_res = additional_pay * (-1) : additional_pay_res = additional_pay

        return lt_new;
    }
     
}

function formatSalaryData(totalSalary) {
    let formatted_salary_data;
    let firstPart;
    let secondPart;
    let thirdPart;

    function _debuggingLength(number) {
        console.log('total length is...: ', number);
    }
    switch(totalSalary.toString().length) {
        case 0:
            _debuggingLength(totalSalary.toString().length)
            break;
        case 1:
            _debuggingLength(totalSalary.toString().length)
            firstPart = totalSalary.toString().slice(0, 1);
            formatted_salary_data = firstPart.toString();
            break;
        case 2:
            _debuggingLength(totalSalary.toString().length)
            firstPart = totalSalary.toString().slice(0, 2);
            formatted_salary_data = firstPart.toString();
            break;
        case 3:
            _debuggingLength(totalSalary.toString().length)
            firstPart = totalSalary.toString().slice(0, 3);
            formatted_salary_data = firstPart.toString();
            break;
        case 4:
            _debuggingLength(totalSalary.toString().length)
            firstPart = totalSalary.toString().slice(0, 1);
            secondPart = totalSalary.toString().slice(1, 4);
            formatted_salary_data = firstPart + ' ' + secondPart
            formatted_salary_data.toString()
            break;
        case 5:
            _debuggingLength(totalSalary.toString().length)
            firstPart = totalSalary.toString().slice(0, 2);
            secondPart = totalSalary.toString().slice(2, 5);
            formatted_salary_data = firstPart + ' ' + secondPart
            formatted_salary_data.toString()
            break;
        case 6:
            _debuggingLength(totalSalary.toString().length)
            firstPart = totalSalary.toString().slice(0, 3);
            secondPart = totalSalary.toString().slice(3, 6);
            formatted_salary_data = firstPart + ' ' + secondPart
            formatted_salary_data.toString()
            break;
        case 7:
            _debuggingLength(totalSalary.toString().length)
            firstPart = totalSalary.toString().slice(0, 1);
            secondPart = totalSalary.toString().slice(1, 4);
            thirdPart = totalSalary.toString().slice(4, 7);
            formatted_salary_data = firstPart + ' ' + secondPart + ' ' + thirdPart
            formatted_salary_data.toString()
            break;
        case 8:
            _debuggingLength(totalSalary.toString().length)
            firstPart = totalSalary.toString().slice(0, 2);
            secondPart = totalSalary.toString().slice(2, 5);
            thirdPart = totalSalary.toString().slice(5, 8);
            formatted_salary_data = firstPart + ' ' + secondPart + ' ' + thirdPart
            formatted_salary_data.toString()
            break;
    }

    return formatted_salary_data;
}

router.post('/post_salary_data', (request, response) => {
    
    var stKode = request.body.stKode_value;
    var lt = request.body.lt_value;
    var krTillegg = request.body.krTillegg_value;
    var arslonn = request.body.arslonn_value;
    var endringsBelop = request.body.endringsBelop_value;
    var changedFieldName = request.body.changedFieldName_value;
    let list = new LinkedList();
    
    for(i=19; i<102; i++) {
        let cdata = lt_data.lt_data[i]
        list.add(cdata);

    }
    var secret = "very_secret"
    response.setHeader("secret", secret)

    function callbackFunction() {
        arslonn = list.lt_salary(lt)
        trimmed_arslonn = arslonn.replace(/\s/g, ``)
        console.log('Årslønn + kronetillegg: ', parseInt(trimmed_arslonn) + parseInt(krTillegg))
        arslonn_plus_krTillegg = parseInt(trimmed_arslonn) + parseInt(krTillegg)

        console.log('lt før func: ', lt)
        get_correct_lt_based_on_additional_pay(arslonn_plus_krTillegg, list, lt)
        console.log('lt_new etter func: ', lt_new)
    }

    const call = new Promise((resolve, reject) => 

    resolve(
        // call macroservice to retrieve "lonnstrinn" data
        // lt_data = router.get('https://api.uaa.didev.dfo.no/api/lonnstrinn')
    )
    )
    
    call.then(
        // if salary step is outside range then set salary_outside_range to true
        list.lt_salary(lt) === null ? salary_outside_range = true : 
        callbackFunction()
        
    )
    
    responseData = 
    salary_outside_range ? 'Lønnstrinn må være mellom 19 og 101' :
    {
        'stKode_value': stKode,
        'lt': formatSalaryData(lt_new),
        'krTillegg_value': formatSalaryData(additional_pay_res),
        'arslonn_value': formatSalaryData(arslonn_plus_krTillegg),
        'endringsBelop_value': endringsBelop,
        'changedFieldName_value': changedFieldName
    }
    response.send(responseData);
})

router.get('/', (request, response) => {
    response.send('Hello World!')
})

app.use('/', router);
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});