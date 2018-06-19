const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

let scrapeURL = 'https://www.jpl.nasa.gov/spaceimages/';


request(scrapeURL, (err, res, body) => {
    if (err) {
        console.log(err);
    } else {
        // console.log(body);
        var $ = cheerio.load(body);
        var spaceArr = []
        // console.log($('.attachment-thumbnail'))
        $('.thumb').each((i, data) => {
            var spaceObj = {};
            var imgSRC = 'https://www.jpl.nasa.gov/' + ($(data).attr('src'));
            var imgAlt = $(data).attr('alt');
            spaceObj['title'] = imgAlt;
            spaceObj['pic'] = imgSRC;
            spaceArr.push(spaceObj);
        })
        console.log(spaceArr)
        fs.writeFile('spacedata.txt', JSON.stringify(spaceArr),  (err) => {
            if (err) {
                console.log('Something went wront');
            }
        })
    }
})