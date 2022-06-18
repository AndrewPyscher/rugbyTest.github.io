
// //                        from database
// // make images in format "(playerNumber)(Name).png"
// // so we can splice where its not a number anymore to return to front when done hovering

  const spot = document.querySelector('.spot');
  console.log(spot)
  for(let i=1; i<10; i++){ 
    const flipCard = document.createElement('div')
    flipCard.classList.add('flip-card');

    const inner = document.createElement('div')
    inner.classList.add('flip-card-inner')

    const front = document.createElement('div')
    front.classList.add('flip-card-front')

    const back = document.createElement('div')
    back.classList.add('flip-card-back')



    const newImgF = document.createElement('img');
    newImgF.src = "../assets/front.png";
    newImgF.classList.add('image1')
  
    const newImgP = document.createElement('img');
    newImgP.src = "../assets/player1.png";
    newImgP.classList.add('image2');
  
    const logo = document.createElement('img');
    logo.src = "../assets/logo.png";
    logo.classList.add('logo');
  
    const position = document.createElement('h3');
    // position.textContent = "IDK Positions";
    position.classList.add('positionOfPlayer');
  
    const name = document.createElement('h2');
    // name.textContent = 'Kanye West';
    name.classList.add('nameOfPlayer')

    front.appendChild(newImgF);
    front.appendChild(newImgP);
    front.appendChild(logo);
    front.appendChild(position);
    front.appendChild(name);

    inner.appendChild(front);


    const p = document.createElement('p');
    p.innerHTML = 'Kanye West';
    
    back.appendChild(p)

    inner.appendChild(front);
    inner.appendChild(back);

    flipCard.appendChild(inner);
    spot.appendChild(flipCard)


}
