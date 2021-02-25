const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {

    let body = '';

    resp.on('data', function (chunk) {
        body += chunk;
    });

    resp.on('end', function () {
        const finalData = JSON.parse(body);
        let count = 0;
        const jsonStr = '[{"' + finalData.data.replace(/,/g, '').replace(/ /g, '"},{"').replace(/=/g, '":"') + '"}]';

        let datajson = JSON.parse(jsonStr);
        for (let key in datajson) {
            let obj = datajson[key];
            for (let prop in obj) {
                if (prop === 'age') {
                    if (obj[prop] > 50) {
                        count++;
                    }
                }
            }
        }

        console.log(count)
    });

});