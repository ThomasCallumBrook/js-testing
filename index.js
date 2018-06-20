 module.exports = Phrase;
// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Returns the two parts of an email address
function emailSplit(email) {
  let processedContent = email.toLowerCase();
  let emailParts = processedContent.split("@");
  return emailParts;
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;
  // Returns the letters in the content.
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
  }

  this.processor = function(string) {
    return string.toLowerCase();
  }
  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.letters());
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
  // Makes the phrase LOUDER.
  this.louder = function() {
    return this.content.toUpperCase();
  };
}
