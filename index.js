function shout(string) {
  return string.toUpperCase();
}
shout("Hello");

function whisper(string) {
  return string.toLowerCase();
}
whisper("Hello");

function logShout(string){
  console.log(string.toUpperCase());
}
logShout("hello");

function logWhisper(string){
  console.log(string.toLowerCase());
}
logWhisper("HELLO");

function sayHiToGrandma(string) {
  if ( string === "I love you, Grandma.") {
    return "I love you, too."
  } else if (string.toLowerCase() === string) {
    return "I can\'t hear you!"
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }
}
sayHiToGrandma("HI");
