const messages = {
    luckyNumbers: [1,2,3,4,5,6,7,8,9,10],
    luckyLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    songsOfTheDay: [{
        title: "Don't Stop Believin'",
        artist: "Journey"
    },
    {
        title: "Ring of Fire",
        artist: "Johnny Cash"
    },
    {
        title: "Eye of The Tiger",
        artist: "Survivor"
    },
    {
        title: "Hall of fame",
        artist: "The Script"
    },
    {
        title: "Remember the Name",
        artist: "Fort Minor"
    },
    {
        title: "9 to 5",
        artist: "Dolly Parton"
    },
    {
        title: "The champion",
        artist: "Carrie Underwood"
    },
    {
        title: "Free and Easy (Down The Road I Go)",
        artist: "Dierks Bentley"
    },
    {
        title: "It's Five O'Clock Somewhere",
        artist: "Alan Jackson and Jimmy Buffet"
    },
    {
        title: "I like it, I love it",
        artist: "Tim McGraw"
    },
    {
        title: "I had some help",
        artist: "Post Malone & Morgan Wallen"
    },
    {
        title: "Up Down",
        artist: "Morgan Wallen & Florida Georgia Line"
    },
    {
        title: "Drink in My Hand",
        artist: "Eric Church"
    },
    {
        title: "One Margarita",
        artist: "Luke Bryan"
    },
    {
        title: "Dixieland Delight",
        artist: "Alabama"
    },
    {
        title: "All Summer Long",
        artist: "Kid Rock"
    },
    {
        title: "Fancy Like",
        artist: "Walker Hayes"
    },
    {
        title: "Cruise",
        artist: "Florida Georgia Line & Nelly"
    }],

    //randomly pick a number from the luckyNumbers array
    pickNumber() {
        let luckyNumber = Math.floor(Math.random() * this.luckyNumbers.length);
        return luckyNumber;
    },

    //randomly pick a letter from the luckyLetters array
    pickLetter() {
        let i = Math.floor(Math.random() * this.luckyLetters.length);
        let luckyLetter = this.luckyLetters[i];
        return luckyLetter;
    },

    //randomly pick a song from the songsOfTheDay array
    pickSongOTD() {
        let i = Math.floor(Math.random() * this.songsOfTheDay.length);
        let title = this.songsOfTheDay[i].title;
        let artist = this.songsOfTheDay[i].artist;
        return `${title} by ${artist}`;
    }
}


// console.log(messages.pickNumber());
// console.log(messages.pickLetter());
// console.log(messages.pickSongOTD());

//final output
console.log(`Your lucky number is ${messages.pickNumber()}, your lucky letter is ${messages.pickLetter()}. \nYour song of the day is ${messages.pickSongOTD()}.`);