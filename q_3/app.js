const readline = require('readline');
const chatbot = require('./chatbot');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getUserInput() {
  rl.question('You: ', (input) => {
    if (input.toLowerCase() === 'exit') {
      rl.close();
      return;
    }

    const response = chatbot(input);
    console.log(`Chatbot: ${response}`);

    getUserInput();
  });
}

console.log('Chatbot: Hello! How can I assist you today?');
getUserInput();
