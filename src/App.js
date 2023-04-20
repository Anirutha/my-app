import logo from './logo.svg';
import './App.css';
import { Profiler } from 'react';

function App() {
  const data = [
    {
      image:
        "https://i.pinimg.com/originals/f4/ed/18/f4ed18e4f8c07a1688153de9daa5bd6c.jpg",
      name: "Jerry",
      batch: "B45WD"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHTnj8JJzOluz-hGYk_Xtamzb_ALB5e3hlzuvDzYGkcVaA2yBBHx1pG2Elcd-drYE9x8&usqp=CAU",
      name: "Tom",
      batch: "B45WD"
    },
    {
      image:
        "https://m.media-amazon.com/images/I/416K4jaHdbL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
      name: "Bheem",
      batch: "B45WD"
    }
  ];

   // data.map((value, index, accArr) => console.log(value, index, accArr))
  return (
    <div className="App">
      {data.map((profile, index) => (
        <Profile
          key={index}
          image={profile.image}
          name={profile.name}
          batch={profile.batch}
        />
      ))}
    </div>
  );
}

export default App;

// create a new component

function Profile({ image, name, batch }) {
  return (
    <div className="profile class-name">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{batch}</p>
    </div>
  );
}

// const props = {
//   image : "",
//   name : "",
//   batch : ""
// }

// const {image, name, batch} = props

// function getname(name){
//   return name
// }

// getname("sanjay")
// return React.createElement(
//   'div',
//   {className : "profile-name", id:"profile-id"},
//   React.createElement("h2", null, "Profile name")
// )
