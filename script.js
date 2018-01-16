const BoJackSays = ["He’s so stupid he doesn’t realize how miserable he should be. I envy that.",
"I don’t understand how people… live. It’s amazing to me that people wake up every morning and say: ‘Yeah, another day, let’s do it.’ How do people do it? I don’t know how.",
"What's great about Los Angeles is nobody cares where you're from or who you are. It's a superficial town where you can worry about stupid shit like keeping your pool clean, and what artisanal nuts to put on your salad.",
"Nothing on the outside, nothing on the inside.",
"Life is a series of closing doors, isn't it?",
"One day you're going to realize that everybody loves you... but nobody likes you... and that is the loneliest feeling in the world",
"Settle. Because otherwise you’re just gonna get older and harder, and more alone. And you’re gonna do everything you can to fill that hole, with friends, and your career, and meaningless sex, but the hole doesn’t get filled."];
let index,prevIndex = 10;

function QuoteMachine(index){
  document.querySelector('#quoteAutomator').innerHTML = BoJackSays[index]
}

function randomizer(){
    index = Math.floor(Math.random() *(BoJackSays.length));
    if(index == prevIndex){
      randomizer();
    }
    else {
      QuoteMachine(index)
      prevIndex = index;
    }
}
