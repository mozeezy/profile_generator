const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :)', (answer) => {
  rl.question('What is an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer4) => {
        rl.question('What is your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`${answer} likes to ${answer2}. She listens to ${answer3} while they're doing that. Their favorite meal is ${answer4}, during which they love to eat ${answer5}. Also, they love sports and their favorite sport is ${answer6}. Their superpower is ${answer7} `);
              rl.close();
            });
          });
        });
      });
    });

  });

});