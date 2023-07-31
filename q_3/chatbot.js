
function chatbot(input) {
    const lowerInput = input.toLowerCase();
  
    if (lowerInput.includes('hello')) {
      return 'Hello! How can I assist you today?';
    } else if (lowerInput.includes('help')) {
      return 'Sure, I can help you with that.';
    } else if (lowerInput.includes('bye')) {
      return 'Goodbye! Have a nice day!';
    } else {
      return 'I am sorry, I did not understand that.';
    }
  }
  
  module.exports = chatbot;
  