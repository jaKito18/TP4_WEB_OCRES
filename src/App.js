import './App.css';
import React from "react";

const profileinfo = [
  {
    prenom: "Pierre",
    nom: "Chartier",
    birth: "23.09.1998",
    link:"img/Pierre.jpg",
    comment:"Hey yo man, quite a nice pic you posted last sunday, where was it?"
  },
  {
    prenom: "Martine",
    nom: "Matterell",
    birth: "25.04.1992",
    link:"img/Martine.jpg",
    comment: "Hey Martine comment vas-tu?"
  },
  {
    prenom: "Camille",
    nom: "Puis san",
    birth: "11.12.1994",
    link:"img/Camille.jpg",
    comment:"Ca parrait que tu aimes les moutons!"
  }
];


function Profilebutton(props){
  return(
    <button onClick={props.onclick} >{props.name} </button>
  )
}



class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      backgroundColour: this.getRandomColourString()
    }
    this.changeStyle = this.changeStyle.bind(this);
  }

  getRandomColourString() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgba(${red},${green},${blue}, 0.3)`;
  }

  changeStyle() {
    this.setState({
      backgroundColour: this.getRandomColourString(),
    })
  }

  render(){
    return(
      <div>
      <div className="borderstyle" style={{'background-color': this.state.backgroundColour}}>
        <img src={this.props.pic} alt="" height="200px" className="img"/>
        <div className="row margin">
          <div className="col-4 text-left">
              <p>Prenom: </p>
              <p>Date de naissance: </p>
          </div>
          <div className="col-3 text-left"> 
            <p>{this.props.prenom}</p>
            <p>{this.props.birth}</p>
          </div>
          <div className="col-2 text-left">
            <p>Nom: </p>
          </div>
          <div className="col-3 text-left">
              <p>{this.props.nom}</p>
          </div>
        </div>
        <div className="margin text-right">
          <button onClick={this.changeStyle}>Change style</button>
        </div>
      </div>
      <div className="borderstyle">
          <p class="text-left margin">"{this.props.comment}"</p>
      </div>
      </div>

    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeprofile: 2
    }
    this.handleclick = this.handleclick.bind(this);
  } 
  handleclick(index){
    console.log(index)
    this.setState({activeprofile:index})
  }
  render(){
  return (
    <div className="App">
      <header>
        {profileinfo.map((profil, index)=>
        <Profilebutton onclick={()=>this.handleclick(index)} name={profil.prenom} key={index}></Profilebutton>)}
      </header>
      <main className="container">
          
          <Profile prenom={profileinfo[this.state.activeprofile].prenom} 
          nom={profileinfo[this.state.activeprofile].nom} 
          birth={profileinfo[this.state.activeprofile].birth}
          pic={profileinfo[this.state.activeprofile].link}
          comment={profileinfo[this.state.activeprofile].comment}>
          </Profile>
      </main>
    </div>
  );
  }
}


export default App;
