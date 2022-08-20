const fs = require('fs');
array = []
fs.readFile('test.txt', 'utf8', (err, data) => {
  if(err){
    console.error(err);
    return;
  }

  var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('test.txt')
  });
  
  lineReader.on('line', function (line) {
    let info = line;
    const playerInfo = info.split(`#`);

    array.push(new Player(playerInfo[0], playerInfo[1], playerInfo[2], playerInfo[3], playerInfo[4], playerInfo[5], playerInfo[6], playerInfo[7]));
    console.log(array.length)
  });
  
})


class Player{
  constructor(firstName, lastName, position, age, height, standing, major, home){
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.age = age;
    this.height = height;
    this.standing = standing;
    this.major = major;
    this.home = home;
  }
}