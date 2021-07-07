const fs = require('fs');
const readline = require('readline').createInterface({input: process.stdin,output: process.stdout});
var randomWords = require('random-words');
//let mails = []
let mails = "\n"

readline.question('merhaba_31_gmail', name => {
    let arr = []
    arr.push(name)
    let comm = arr.join(" ").split("_") //splitting the returned string that's in ^ that format.

    let mailName = comm[0]
    let mailCount = parseInt(comm [1])
    let mailDomain = comm[2]
    main(mailName, mailCount, mailDomain)
    readline.close();
});


function main(mailName, mailCount, maildDomain){
    let d = 0
    while (d < mailCount){
        let towrite = (`${mailName}+${randomWords()}@${maildDomain}.com\n`)
       // console.log(towrite)
        //mails.push(towrite)
        mails = mails + towrite
        //write(towrite)
        d = d+1
    }
    write(mails)
}

function write(mail) {
    fs.appendFile('MAILS.txt', `${mail}\n`, function (err) { if (err) throw err; });
  }