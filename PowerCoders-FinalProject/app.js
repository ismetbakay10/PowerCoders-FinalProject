let aboutMe = document.getElementsByTagName("article")[0];

function aboutMeInformation() {
  aboutMe.innerHTML = `<summary><p>I was born in 1984 in Turkey.</p>
      </summary>
      <p>I graduated from university in 2008 as a mathematics teacher and did my job until I left my country, in 2016. I
        am married and have a 9 year-old son. I have been living in Geneva for 2 years. I got the B2 certificate in
        French and this year I followed the computer science courses at the University of Geneva as an audience student.
        I also followed the Fullstack Web Programming courses at HiCoders and I am a participant at Powercoders currently.</p>`;
}

function warning() {
  let message = window.alert("Sorry! The link will be activated very soon!");
  return message;
}

let paragraph = document.getElementById("detail");
function detail(index) {
  paragraph.innerHTML = IT[index].text;
}


const IT = [
  {
    skill: "HTML5",
    image: "html5.svg",
    level: "Advanced",
    text: "I learned HTML very well I learned HTML very well I learned HTML very well I learned HTML very well I learned HTML very well I learned HTML very well",
  },
  {
    skill: "CSS3",
    image: "css3-alt.svg",
    level: "Advanced",
    text: "I learned HTML very well",
  },
  {
    skill: "Bootstrap",
    image: "bootstrap.svg",
    level: "Advanced",
    text: "I learned HTML very well",
  },
  {
    skill: "Javascript",
    image: "square-js.svg",
    level: "Advanced",
    text: "I learned HTML very well",
  },

  {
    skill: "React",
    image: "react.svg",
    level: "Advanced",
    text: "I learned HTML very well",
  },
  {
    skill: "Github",
    image: "github.svg",
    level: "Advanced",
    text: "I learned HTML very well",
  },
  {
    skill: "Agile / Scrum",
    image: "Scrum.png",
    level: "Advanced",
    text: "I learned HTML very well",
  },
  {
    skill: "Jira Software",
    image: "jira.svg",
    level: "Advanced",
    text: "I learned HTML very well",
  },
  {
    skill: "NPM",
    image: "npm.svg",
    level: "Intermediate",
    text: "I learned HTML very well",
  },
  {
    skill: "Node.js",
    image: "node-js.svg",
    level: "Intermediate",
    text: "I learned HTML very well",
  },
  {
    skill: "MySQL",
    image: "MySQL.png",
    level: "Intermediate",
    text: "I learned HTML very well",
  },
  {
    skill: "Pyton",
    image: "python.svg",
    level: "Beginner",
    text: "I learned HTML very well",
  },
  {
    skill: "Angular",
    image: "angular.svg",
    level: "Beginner",
    text: "I learned HTML very well",
  },
];


{/* <div class="title">
  <h3>${member.skill}</h3>
</div>; */}

let sectionIT = document.getElementById("skill");
let ITCard = "";
//for (let index = 0; index < arrayTeam.length; index++) {
IT.forEach((member,index) => {
  ITCard += `
              <div class='card'  onclick="detail(${index})">
                <div class="title">
                    <h6>${member.skill}</h6>
                </div>
                <img src="./icon/${member.image}" alt="${member.alt}" width="40px" />
                <div class="title">
                    <h6>${member.level}</h6>
                </div>
              </div>`;
  sectionIT.innerHTML = ITCard;
});
// for (member of arrayTeam) {
//   teamCard += `<h4>TEACHING TEAM</h4>
//               <div class='card'>
//                 <div class="title">
//                     <h3>${member.personName}</h3>
//                 </div>
//                 <img src="./image/${member.image}" alt="${member.alt}" width="150px">
//               </div>`;
//   asideContainer.innerHTML = teamCard;
// }
