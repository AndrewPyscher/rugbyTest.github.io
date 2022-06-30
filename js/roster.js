
players = []



for(let i=0; i<10; i++){ 
  let player ={
    firstName: 'Kanye',
    lastName: 'West',
    position : 'IDK Positions',
    age : 21,
    height : "5'6",
    year : 'sophomore',
    major : 'Computer Science',
    hometown : 'Saginaw'
}

players.push(player)

}


  const spot = document.querySelector('.spotPlayers');
  console.log(spot)
  for(let i=0; i<10; i++){ 
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
    newImgP.src = `../assets/${players[i].firstName}${players[i].lastName}.png`;
    newImgP.classList.add('image2');
  
    const logo = document.createElement('img');
    logo.src = "../assets/logo.png";
    logo.classList.add('logo');
  
    const position = document.createElement('h3');
    position.textContent = `${players[i].position}`;
    position.classList.add('positionOfPlayer');
  
    const name = document.createElement('h2');
    name.textContent = `${players[i].firstName} ${players[i].lastName}`;
    name.classList.add('nameOfPlayer')

    front.appendChild(newImgF);
    front.appendChild(newImgP);
    front.appendChild(logo);
    front.appendChild(position);
    front.appendChild(name);

    inner.appendChild(front);

    const newImgB = document.createElement('img');
    newImgB.src = "../assets/back.png";
    newImgP.classList.add('image2');

    back.appendChild(newImgB)

    const p = document.createElement('p');
    p.innerHTML = `Name: ${players[i].firstName} ${players[i].lastName} <br><br>Age: ${players[i].age}<br><br>Height: ${players[i].height}<br><br>Class: ${players[i].year}<br><br>Position: ${players[i].position}<br><br>Major: ${players[i].major}<br><br>Hometown: ${players[i].hometown}`;
    
    back.appendChild(p)

    inner.appendChild(front);
    inner.appendChild(back);

    flipCard.appendChild(inner);
    spot.appendChild(flipCard)


}


const spotC = document.querySelector('.spotCoaches');
  console.log(spot)
  for(let i=0; i<5; i++){ 
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
    newImgP.src = `../assets/${players[i].firstName}${players[i].lastName}.png`;
    newImgP.classList.add('image2');
  
    const logo = document.createElement('img');
    logo.src = "../assets/logo.png";
    logo.classList.add('logo');
  
    const position = document.createElement('h3');
    position.textContent = `${players[i].position}`;
    position.classList.add('positionOfPlayer');
  
    const name = document.createElement('h2');
    name.textContent = `${players[i].firstName} ${players[i].lastName}`;
    name.classList.add('nameOfPlayer')

    front.appendChild(newImgF);
    front.appendChild(newImgP);
    front.appendChild(logo);
    front.appendChild(position);
    front.appendChild(name);

    inner.appendChild(front);

    const newImgB = document.createElement('img');
    newImgB.src = "../assets/back.png";
    newImgP.classList.add('image2');

    back.appendChild(newImgB)

    const p = document.createElement('p');
    p.innerHTML = `Name: ${players[i].firstName} ${players[i].lastName} <br><br>Age: ${players[i].age}<br><br>Height: ${players[i].height}<br><br>Year: ${players[i].year}<br><br>Position: ${players[i].position}<br><br>Major: ${players[i].major}<br><br>Hometown: ${players[i].hometown}`;
    
    back.appendChild(p)

    inner.appendChild(front);
    inner.appendChild(back);

    flipCard.appendChild(inner);
    spotC.appendChild(flipCard)


}



