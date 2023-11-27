import  { useState } from "react";
// import './styles.css';
import axios from "axios";

const FormComponents = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password:"",
    address:""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
      [e.target.email]:value,
      [e.target.password]:value,
      [e.target.address]:value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: state.name,
      email: state.email,
      password:state.password,
      address:state.address
    };
    axios.post(`https://656327c1ee04015769a6d9e8.mockapi.io/api/users/fakeData`, userData)
    .then((response) => {
      console.log(response.status, response.data);
    });
  };

  return (
    <>
    <div>
      <h1>Register or Create new account</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="address">
          Address
          <input
            type="text"
            name="address"
            value={state.address}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  
    <div>
       <table>
       <th>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </th>
        {/* <tbody>
          {state.map((data)=>{
            return (
                <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.job}</td>
                </tr>
            )
          })}
        </tbody> */}
       </table>
    </div>
    </>
  );
}

export default FormComponents;










// import  { useState } from 'react';
// import axios from 'axios';

// export default function FormComponent() {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
      // const [state, setState] = useState({
      //   name: "",
      //   email: "",
      //   password:"",
      //   address:"",
      //   
      // });
//     const postData = () => {
//               axios.post(`https://656327c1ee04015769a6d9e8.mockapi.io/api/users/fakeData`, {
//             name,
//             email,
//             password,
//             address
//     })

//     }
//     return (
//         <div>
//             <form className="create-form">
                
//                     <label>First Name</label>
//                     <input placeholder='name' onChange={(e) => setState(e.target.value)}/>
              
//                     <label>Last Name</label>
//                     <input placeholder='email' onChange={(e) => setState(e.target.value)}/>
                
                
//                 <button onClick={postData} type='submit'>Submit</button>
//             </form>
//         </div>
//     )
// }