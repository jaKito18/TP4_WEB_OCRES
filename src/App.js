import './App.css';
import React from "react";


function Profilebutton(props){
  return(
    <button>{props.name}</button>
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
      <p>Prenom:</p> <p>Nom:</p> <p>Date de naissance:</p>
      <button>Change style</button>
    </div>
    
  )
}
}

function App() {
 let activeprofile =0;
  const profileinfo = [
    {
      prenom: "Pierre",
      nom: "Chartier",
      birth: "23.09.1998"
    },
    {
      prenom: "Martine",
      nom: "Matterell",
      birth: "23.09.1998"
    },
    {
      prenom: "Camille",
      nom: "Puissan",
      birth: "23.09.1998"
    }
  ];
  return (
    <div className="App">
      <header>
        {profileinfo.map((profil, index)=>
        <Profilebutton name={profil.prenom} key={index}></Profilebutton>)}
      </header>
      <body>
          <Profile prenom={profileinfo[activeprofile].prenom}></Profile>
          <Profile nom={profileinfo[activeprofile].nom}></Profile>
          <Profile birth={profileinfo[activeprofile].birth}></Profile>
      </body>
    </div>
  );
}


export default App;
