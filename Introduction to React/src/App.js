import logo from './logo.svg';
import './App.css';

function App() {
  const Operating = [
    {name : "Android"},
    {name : "Blackberry"},
    {name : "iphone"},
    {name : "Windows Phone"}
  ]

  const Manufacturer = [
    {name : "Samsung"},
    {name : "HTC"},
    {name : "Micromax"},
    {name : "Apple"}
  ]
  
  return (
    <div>
      <h1>Mobile Operating System</h1>
      <div>{Operating.map((elem) => mapOperating(elem))}</div>
      <h1>Mobile Manufacturer</h1>
      <div>{Manufacturer.map((elem) => MapManufacturer(elem))}</div>
    </div>
    )
}

function mapOperating(elem) {
  return (
    <div>
      <li>{elem.name}</li>
    </div>
  )
}

function MapManufacturer(elem) {
 if(elem.name === "Micromax"){
   return (
     <div>
        <li className="Micromax">{elem.name}</li>
   </div>
   )
 }
 if(elem.name === "Apple"){
  return (
    <div>
       <li className="Apple">{elem.name}</li>
  </div>
  )
}
 else{
     return (
       <div>
         <li>{elem.name}</li>
       </div>
     )

 }

}
export default App;









// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );