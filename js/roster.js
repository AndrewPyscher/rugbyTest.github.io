
array = []




let player ={
    firstName: 'Jasmine',
    lastName: 'Day',
    position : 'Coach',
    age : 23,
    height : "5'7",
    year : 'Coach',
    major : 'People Person',
    hometown : 'Saginaw'
}
array.push(player)

let player1 ={
  firstName: 'Steve',
  lastName: 'Jobs',
  position : 'Graveyard',
  age : 60,
  height : "6 feet under",
  year : 'dead',
  major : 'iPhone',
  hometown : 'The dirt'
}

let player2 ={
  firstName: 'Flynn',
  lastName: 'Cat',
  position : 'Window',
  age : 6,
  height : "1'",
  year : 'cat',
  major : 'sleeping',
  hometown : 'home'
}
let player3 ={
  firstName: 'Kanye',
  lastName: 'West',
  position : 'God Lover',
  age : 45,
  height : "6'",
  year : 'who knows',
  major : 'sleeping',
  hometown : 'God'
}

let player4 ={
  firstName: 'Liv',
  lastName: 'Coach',
  position : 'Coach',
  age : 22,
  height : "5'5",
  year : 'idk',
  major : 'idk',
  hometown : 'idk'
}


array.push(player1)
array.push(player2)
array.push(player3)
array.push(player4)



  const spot = document.querySelector('.spotPlayers');
  console.log(spot)
  for(let i=0; i<array.length; i++){ 
    const flipCard = document.createElement('div')
    flipCard.classList.add('flip-card');

    const inner = document.createElement('div')
    inner.classList.add('flip-card-inner')

    const front = document.createElement('div')
    front.classList.add('flip-card-front')

    const back = document.createElement('div')
    back.classList.add('flip-card-back')


    const newImgF = document.createElement('img');
    newImgF.src = `../assets/front.png`;
    console.log(`../assets/front.png`)
    newImgF.classList.add('image1')
  
    const newImgP = document.createElement('img');
    newImgP.src = `../assets/${array[i].firstName}${array[i].lastName}.png`;
    newImgP.classList.add('image2');
  
    const logo = document.createElement('img');
    logo.src = "../assets/test.png";
    logo.classList.add('logo');
  
    const position = document.createElement('h3');
    position.textContent = `${array[i].position}`;
    position.classList.add('positionOfPlayer');
  
    const name = document.createElement('h2');
    name.textContent = `${array[i].firstName} ${array[i].lastName}`;
    name.classList.add('nameOfPlayer')

    front.appendChild(newImgF);
    front.appendChild(newImgP);
    front.appendChild(position);
    front.appendChild(name);

    inner.appendChild(front);

    const newImgB = document.createElement('img');
    newImgB.src = "../assets/back.png";
    newImgP.classList.add('image2');

    back.appendChild(newImgB)

    const p = document.createElement('p');
    p.innerHTML = `<b>Name: ${array[i].firstName} ${array[i].lastName} <br><br>Age: ${array[i].age}<br><br>Height: ${array[i].height}<br><br>Class: ${array[i].year}<br><br>Position: ${array[i].position}<br><br>Major: ${array[i].major}<br><br>Hometown: ${array[i].hometown}</b>`;
    
    back.appendChild(p)

    inner.appendChild(front);
    inner.appendChild(back);

    flipCard.appendChild(inner);
    spot.appendChild(flipCard)


}


const spotC = document.querySelector('.spotCoaches');
  console.log(spot)
  for(let i=0; i<array.length; i++){ 
    const flipCard = document.createElement('div')
    flipCard.classList.add('flip-card');

    const inner = document.createElement('div')
    inner.classList.add('flip-card-inner')

    const front = document.createElement('div')
    front.classList.add('flip-card-front')

    const back = document.createElement('div')
    back.classList.add('flip-card-back')


    const newImgF = document.createElement('img');
    newImgF.src = `../assets/front.png`;
    console.log(`../assets/front.png`)
    newImgF.classList.add('image1')
  
    const newImgP = document.createElement('img');
    newImgP.src = `../assets/${array[i].firstName}${array[i].lastName}.png`;
    newImgP.classList.add('image2');
  
    const logo = document.createElement('img');
    logo.src = "../assets/logo.png";
    logo.classList.add('logo');
  
    const position = document.createElement('h3');
    position.textContent = `${array[i].position}`;
    position.classList.add('positionOfPlayer');
  
    const name = document.createElement('h2');
    name.textContent = `${array[i].firstName} ${array[i].lastName}`;
    name.classList.add('nameOfPlayer')

    front.appendChild(newImgF);
    front.appendChild(newImgP);
    front.appendChild(position);
    front.appendChild(name);

    inner.appendChild(front);

    const newImgB = document.createElement('img');
    newImgB.src = "../assets/back.png";
    newImgP.classList.add('image2');

    back.appendChild(newImgB)

    const p = document.createElement('p');
    p.innerHTML = `Name: ${array[i].firstName} ${array[i].lastName} <br><br>Age: ${array[i].age}<br><br>Height: ${array[i].height}<br><br>Year: ${array[i].year}<br><br>Position: ${array[i].position}<br><br>Major: ${array[i].major}<br><br>Hometown: ${array[i].hometown}`;
    
    back.appendChild(p)

    inner.appendChild(front);
    inner.appendChild(back);

    flipCard.appendChild(inner);
    spotC.appendChild(flipCard)


}



