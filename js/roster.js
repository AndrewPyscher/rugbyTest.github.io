array = []

let BaileyKosaski ={
    firstName: 'Bailey',
    lastName: 'Kosaski',
    position : 'Inside Center',
    age : 21,
    height : "5'6",
    year : 'Senior',
    major : 'Biochemistry',
    hometown : 'Ortonville, MI'
}

let BetsyNieman ={
  firstName: 'Betsy',
  lastName: 'Nieman',
  position : 'Inside Center',
  age : 20,
  height : "5'1",
  year : 'Sophomore',
  major : 'English Education',
  hometown : 'Dundee, MI'
}

let LilyHarris ={
  firstName: 'Lily',
  lastName: 'Harris',
  position : 'Wing',
  age : 20,
  height : "5'6",
  year : 'Junior',
  major : 'Occupational Therapy',
  hometown : 'Flat Rock, MI'
}
let DanielleSchafer ={
  firstName: 'Danielle',
  lastName: 'Schafer',
  position : 'Wing',
  age : 21,
  height : "5'6",
  year : 'Senior',
  major : 'Social Work',
  hometown : "Hubbardston, MI"
}

let KaylaHendrickson ={
  firstName: 'Kayla',
  lastName: 'Hendrickson',
  position : 'Full Back',
  age : 20,
  height : "5'7",
  year : 'Junior',
  major : 'Biology',
  hometown : 'Essexville, MI'
}
let EliviaHearns ={
  firstName: 'Elivia',
  lastName: 'Hearns',
  position : 'Outside Center',
  age : 21,
  height : "5'6",
  year : 'Senior',
  major : 'Business Management',
  hometown : 'Ortonville, MI'
}

let MaddiThreet ={
  firstName: 'Maddi (Mule)',
  lastName: 'Threet',
  position : '8 Man',
  age :21,
  height : "5'8",
  year : 'Senior',
  major : 'Nursing',
  hometown : 'Burton, MI'
}

let JackieGilbert ={
  firstName: 'Jackie',
  lastName: 'Gilbert',
  position : '8 Man',
  age : 20,
  height : "5'2",
  year : 'Sophomore',
  major : 'Secondary Education English',
  hometown : 'Linden, MI'
}

let MakaylaFord ={
  firstName: 'Makayla',
  lastName: 'Ford',
  position : 'Flank',
  age : 20,
  height : "5'4",
  year : 'Junior',
  major : 'Rehabilitation Medicine',
  hometown : 'Waterford, MI'
}

let JadeJarskey ={
  firstName: 'Jade',
  lastName: 'Jarskey',
  position : 'Prop',
  age : 20,
  height : "5'7",
  year : 'Sophomore',
  major : 'Undecided',
  hometown : 'Marine City, MI'
}

let MakyiaFord ={
  firstName: 'Makyia',
  lastName: 'Ford',
  position : 'Flank',
  age : 20,
  height : "5'4",
  year : 'Junior',
  major : 'Exercise Science',
  hometown : 'Waterford, MI'
}


let DrewHorton ={
  firstName: 'Drew',
  lastName: 'Horton',
  position : 'Lock',
  age : 21,
  height : "5'5",
  year : 'Senior',
  major : 'Health & Physical Education',
  hometown : 'AuGres, MI'
}

let RebekahWilliams ={
  firstName: 'Rebekah',
  lastName: 'Williams',
  position : 'Hooker',
  age : 22,
  height : "5'4",
  year : 'Senior',
  major : 'Professional & Technical Education',
  hometown : 'Millington, MI'
}

let BaileyBosler ={
  firstName: 'Bailey (Boz)',
  lastName: 'Bosler',
  position : 'Fly Half',
  age : 22,
  height : "5'5",
  year : 'Junior',
  major : 'Secondary History Education',
  hometown : 'Oscode, MI'
}
let MadisonKell ={
  firstName: 'Madison',
  lastName: 'Kell',
  position : 'Scrum Half',
  age : 21,
  height : "5'5",
  year : 'Senior',
  major : 'Computer Science',
  hometown : 'Trenton, MI'
}
let GraceCain ={
  firstName: 'Grace',
  lastName: 'Cain',
  position : 'Inside Center',
  age : 22,
  height : "5'2",
  year : 'Senior',
  major : 'Education',
  hometown : 'Cadillac, MI'
}
let LindseySomero ={
  firstName: 'Lindsey',
  lastName: 'Somero',
  position : 'Wing',
  age : 20,
  height : "5'4",
  year : 'Junior',
  major : 'Social Studies Secondary Education',
  hometown : 'Northport, MI'
}

let RosaAccardo ={
  firstName: 'Rosa',
  lastName: 'Accardo',
  position : 'Wing',
  age : 19,
  height : "5'7",
  year : 'Sophomore',
  major : 'Elementary Education',
  hometown : 'Richmond, MI'
}

let ElizabethLedyard ={
  firstName: 'Elizabeth',
  lastName: 'Ledyard',
  position : 'Prop',
  age : 23,
  height : "5'9",
  year : 'Junior',
  major : 'Upper Elementary Special Education',
  hometown : 'Jonesville, MI'
}

let ShalynNeal ={
  firstName: 'Shalyn',
  lastName: 'Neal',
  position : 'Lock',
  age : 20,
  height : "5'5",
  year : 'Junior',
  major : 'Occupational Therapy',
  hometown : 'Waterford, MI'
}


array.push(BaileyKosaski)
array.push(BetsyNieman)
array.push(LilyHarris)
array.push(DanielleSchafer)
array.push(KaylaHendrickson)
array.push(EliviaHearns)
array.push(MaddiThreet)
array.push(JackieGilbert)
array.push(MakaylaFord)
array.push(JadeJarskey)
array.push(MakyiaFord)
array.push(DrewHorton)
array.push(RebekahWilliams)
array.push(BaileyBosler)
array.push(MadisonKell)
array.push(GraceCain)
array.push(LindseySomero)
array.push(RosaAccardo)
array.push(ElizabethLedyard)
array.push(ShalynNeal)

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
    // newImgP.src = `../assets/${array[i].firstName}${array[i].lastName}.png`;
    newImgP.src = `../assets/Headshots/nopfp.jpg`;
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



