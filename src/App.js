import './App.css';
import React from "react";


function Profilebutton(props){
  return(
    <button>{props.name} </button>
  )
}

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
  return(
    <div>
      <div class="row">
        <div class="col-6">
            <p>Prenom: {this.props.prenom}</p>
        </div>
        <div class="col-6">
            <p>Nom: {this.props.nom}</p>
        </div>
      </div>
      <p>Date de naissance: {this.props.birth}</p>
      <button>Change style</button>
    </div>
  )
}
}

function App() {
 let activeprofile =2;
  const profileinfo = [
    {
      prenom: "Pierre",
      nom: "Chartier",
      birth: "23.09.1998"
    },
    {
      prenom: "Martine",
      nom: "Matterell",
      birth: "25.04.1992"
    },
    {
      prenom: "Camille",
      nom: "Puissan",
      birth: "11.12.1994"
    }
  ];
  const pic = [
    {
       link:"img/Pierre.jpg"
    },
    {
      link:"img/Martine.jpg"
    },
    {
      link:"img/Camille.jpg"
    }
  ];
  return (
    <div className="App">
      <header>
        {profileinfo.map((profil, index)=>
        <Profilebutton id={profil.prenom} {onclick=""} name={profil.prenom} key={index}></Profilebutton>)}
      </header>
      <body>
          <img src={pic[activeprofile].link} alt=""/>
          <Profile prenom={profileinfo[activeprofile].prenom} nom={profileinfo[activeprofile].nom} birth={profileinfo[activeprofile].birth}></Profile>
      </body>
    </div>
  );
}


export default App;
