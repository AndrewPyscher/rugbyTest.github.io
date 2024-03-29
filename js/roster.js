

class Player{
  constructor(firstName, lastName, position, age, height, standing, major, home){
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.age = age;
    this.height = height;
    this.year = standing;
    this.major = major;
    this.hometown = home;
  }
}

array = []
let info = "Bailey#Kosaski#Inside Center#21#5'6#Senior#Biochemistry#Ortonville, MI^Betsy#Nieman#Inside Center#20#5'1#Sophomore#English Education#Dundee, MI^Lily#Harris#Wing#20#5'6#Junior#Occupational Therapy#Flat Rock, MI^Danielle#Schafer#Wing#21#5'6#Senior#Social Work#Hubbardston, MI^Kayla#Hendrickson#Full Back#20#5'7#Junior#Biology#Essexville, MI^Elivia#Hearns#Flank#21#5'6#Senior#Business Management#Ortonville, MI^Maddi (Mule)#Threet#8 Man#21#5'8#Senior#Nursing#Burton, MI^Jackie#Gilbert#8 Man#20#5'2#Sophomore#Secondary Education English#Linden, MI^Makayla#Ford#Flank#20#5'4#Junior#Rehabilitation Medicine#Waterford, MI^Jade#Jarskey#Prop#19#5'7#Sophomore#Undecided#Marine City, MI^Makyia#Ford#Flank#20#5'4#Junior#Exercise Science#Waterford, MI^Drew#Horton#Lock#21#5'5#Senior#Health & Physical Education#AuGres, MI^Rebekah#Williams#Hooker#22#5'4#Senior#Professional & Technical Education#Millington, MI^Bailey (Boz)#Bosler#Fly Half#22#5'5#Junior#Secondary History Education#Oscoda, MI^Madison#Kell#Scrum Half#21#5'5#Senior#Computer Science#Trenton, MI^Grace#Cain#Inside Center#22#5'2#Senior#Education#Cadillac, MI^Lindsey#Somero#Wing#20#5'4#Junior#Social Studies Secondary Education#Northport, MI^Rosa#Accardo#Wing#19#5'7#Sophomore#Elementary Education#Richmond, MI^Elizabeth#Ledyard#Prop#23#5'9#Junior#Upper Elementary Special Education#Jonesville, MI^Shalyn#Neal#Lock#20#5'5#Junior#Occupational Therapy#Waterford, MI^Madelyn#Anschuetz#Inside Center#18#5'3#Freshman#Medical Laboratory Science#Tawas, MI^Molly#Hamilton#Prop#18#5'6#Sophomore#Accounting#Freeland, MI^Anna#Palmiter#Fly Half#19#5'6#Sophomore#Music Education#Ortonville, MI^Lilly#Wilson#Prop#20#5'4#Junior#Criminal Justice#Marlette, MI^Hailie#Austin#Outside Center#19#5'3#Freshman#Communications and Theatre#Capac, MI^Sam#Reed#Full Back#18#5'3#Freshman#Biology#Sterling, MI^Danielle#DiGirolamo#Prop#20#5'7#Junior#Criminal Justice#Sterling Heights, MI"
const indivudal = info.split(`^`);

for(let i=0; i<indivudal.length; i++){
  const playerInfo = indivudal[i].split("#"); 
  array.push(new Player(playerInfo[0], playerInfo[1], playerInfo[2], playerInfo[3], playerInfo[4], playerInfo[5], playerInfo[6], playerInfo[7]));
}
jQuery('#query').on('input', function() {
  let searchFor = document.getElementById("query").value;
  removeChildren()
  searchedPlayers =[]
  
  for(let i=0; i<array.length; i++){
    console.log(searchFor)
    lastName = array[i].lastName.toUpperCase();
    name = array[i].firstName.toUpperCase() + " "+ lastName;
    
    if(name.includes(searchFor.toUpperCase())){
      searchedPlayers.push(array[i])
    }
  }
  add(searchedPlayers)
});

function removeChildren(){
 let parent = document.querySelector('#remove')
  while(parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
}

window.onload = add(array);


function add(array){
  array.sort( compare )
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

    try{
     newImgP.src = `../assets/Headshots/${array[i].firstName}${array[i].lastName}.jpg`;}
     catch(error){
    newImgP.src = `../assets/Headshots/nopfp.png`;
     }
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


// const spotC = document.querySelector('.spotCoaches');
//   for(let i=0; i<array.length; i++){ 
//     const flipCard = document.createElement('div')
//     flipCard.classList.add('flip-card');
//     const inner = document.createElement('div')
//     inner.classList.add('flip-card-inner')
//     const front = document.createElement('div')
//     front.classList.add('flip-card-front')
//     const back = document.createElement('div')
//     back.classList.add('flip-card-back')

//     const newImgF = document.createElement('img');
//     newImgF.src = `../assets/front.png`;
//     console.log(`../assets/front.png`)
//     newImgF.classList.add('image1')
  
//     const newImgP = document.createElement('img');
//     newImgP.src = `../assets/${array[i].firstName}${array[i].lastName}.png`;
//     newImgP.classList.add('image2');
//     const logo = document.createElement('img');
//     logo.src = "../assets/logo.png";
//     logo.classList.add('logo');
//     const position = document.createElement('h3');
//     position.textContent = `${array[i].position}`;
//     position.classList.add('positionOfPlayer');
//     const name = document.createElement('h2');
//     name.textContent = `${array[i].firstName} ${array[i].lastName}`;
//     name.classList.add('nameOfPlayer')

//     front.appendChild(newImgF);
//     front.appendChild(newImgP);
//     front.appendChild(position);
//     front.appendChild(name);
//     inner.appendChild(front);

//     const newImgB = document.createElement('img');
//     newImgB.src = "../assets/back.png";
//     newImgP.classList.add('image2');
//     back.appendChild(newImgB)

//     const p = document.createElement('p');
//     p.innerHTML = `Name: ${array[i].firstName} ${array[i].lastName} <br><br>Age: ${array[i].age}<br><br>Height: ${array[i].height}<br><br>Year: ${array[i].year}<br><br>Position: ${array[i].position}<br><br>Major: ${array[i].major}<br><br>Hometown: ${array[i].hometown}`;
//     back.appendChild(p)
//     inner.appendChild(front);
//     inner.appendChild(back);
//     flipCard.appendChild(inner);
//     spotC.appendChild(flipCard)

// }
}


function compare( a, b ) {
  if ( a.lastName < b.lastName ){
    return -1;
  }
  if ( a.lastName > b.lastName ){
    return 1;
  }
  return 0;
}

