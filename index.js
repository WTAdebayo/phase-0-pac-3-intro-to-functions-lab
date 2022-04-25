function shout(string) {
    return string.toUpperCase();
  }


function whisper(string) {
    return string.toLowerCase();
}


function logShout(string) {
    console.log('HELLO');
}

function logWhisper(string) {
    console.log('hello');
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return sayHiToHeadphonedRoommate = 'I can\'t hear you!';
    }
    else if (string === string.toUpperCase()) {
        return sayHiToHeadphonedRoommate = 'YES INDEED!';
    }
    else if (string === 'Let\'s have dinner together!') {
        return sayHiToHeadphonedRoommate = 'I would love to!';
    }
}