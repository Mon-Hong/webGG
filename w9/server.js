const fs = require('fs');
const http = require('http');

var jsontext ;
const hostname = 'localhost';
const port = 3000;


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    //ทำการเรียกใช้ promise ในนี้นะ
    //แสดงผลของ json ใหม่ที่เพิ่มจำนวนเสื้อผ้าไปแล้วบน browser
    //ผล json ที่ได้บน browser จะไม่สวย ดังนั้นเราสามารถแก้ได้โดยกำหนด argument ใน JSON.stringify()
    // จะได้ JSON.stringify(<ชื่อตัวแปร JS object>, null, " ")  โดย json string ที่ได้จะมี การเว้นวรรคและบรรทัด
    res.write(jsontext);
    res.end();

  });

let readMsg = () => {
    // อ่านไฟล์ cloth1.json
    return new Promise((resolve,reject) => {
        fs.readFile('cloth1.json','utf8', (err, data) => {
            if (err) 
            {
                reject(err);
            }
            else
            {
                jsontext = data;
                resolve(data);
                
            }
                
        });
    })
}


// จำนวนเสื้อผ้าตามที่กำหนด
let editJson = (data) => { 
    return new Promise((resolve) => {const stock = 
    {
        item1: 2,
        item2: 3,
        item3: 5,
        item4: 2,
        item5: 5,
        item6: 8,
        item7: 1,
        item8: 9,
        item9: 0
    }
    var newData = 'n_stock';
    var jsonObjectData = JSON.parse(data)
    var keys = Object.keys(jsonObjectData)
    
        for (var i = 1; i <= keys.length; i++) 
        {
            var index = "item" + (i);
            jsonObjectData[index][newData] = stock[index];
        }
        resolve(JSON.stringify(jsonObjectData , null, " "));
    })
}




let writeMsg = (data) =>{
    //ทำการเขียนไฟล์ใหม่ขึ้นมา
    return new Promise((resolve, reject) => {
        fs.writeFile('new_cloth.json', JSON.stringify(data,null,"<br>"), (err) => {
            if (err) 
            {
                reject(err);
            }
            else
            {
                resolve(data);
            } 
        })
    })
}

server.listen(port, hostname, () => {
    readMsg().then(editJson).then(writeMsg).then((out) => console.log(out));
console.log(`Server running at   http://${hostname}:${port}/`);
});