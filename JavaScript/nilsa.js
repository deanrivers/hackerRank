const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your name?`, (name) => {
    console.log(`Hi ${name}!`)
    readline.question(`Who do you love?` , (love) =>{
        console.log(`${name} loves ${love}`);
        readline.question(`Is ${love} your baby mom?` , (babymom) =>{

            if(`${babymom}` == 'yes'){
                console.log(`${love} is your baby mom.`);
                readline.close();
            }
        })
    })
  })

