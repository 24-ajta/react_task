import  { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/getdetails")
      .then(data =>setData( data.data))
      .catch(error=>console.log(error));
  }, []);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <h1 className="App-title">Welcome to React</h1>
  //     </header>
  //     <p className="App-intro">
  //       {data.map(item => (
  //         <div key={item.id}>{item.value}</div>
  //       ))}
  //     </p>
  //   </div>
  // );

  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
        </thead>
        <tbody>
          {
            data.map(user=>{
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;