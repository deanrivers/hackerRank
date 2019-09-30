const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your name? `, (name) => {
    console.log(`Hi ${name}!`)
    readline.question(`How was your day?(good/bad) ` , (day) =>{


        if(`${day}` == 'good'){
            console.log(`I'm glad your day was ${day} `);
        } else{
            console.log("I am sorry your day was bad =/. Can we talk about it?")
        }
        

        readline.question(`Also...guess who misses you... ` , (misses) =>{

            if(`${misses}` == 'Dean' || `${misses}` == 'dean'){
                console.log(`Yes! ${misses} misses you a lot.`);
                readline.close();
            } else{
                console.log(`Dean misses you a lot.`);
                readline.close();
            }
        })
    })
  })

