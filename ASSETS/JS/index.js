function getQuote() {
    var randNum = Math.floor(Math.random() * 8) + 1;
    document.getElementById('quote').innerHTML = quotes[randNum];
  }
//   quotes
var quotes = ["Blank", "\" For things to reveal themselves to us, we need to be ready to abandon our views about them. -Thich Nhat Hanh\"",
"\"Because you are alive, everything is possible. -Thich Nhat Hanh\"", 
"\"“Hope is important because it can make the present moment less difficult to bear. If we believe that tomorrow will be better, we can bear a hardship today.” -Thich Nhat Hanh\"",
"\" Happiness is a journey, not a destination!\"", 
"\" Be yourself, everyone else is already taken. -Oscar Wilde\"",
"\" I feed my spirit. I train my body. I focus my mind. It’s my time.\"",
"\" I am independent and self-sufficient.\"",
"\" As long as you have breathe. You have options. -HH\"",];
