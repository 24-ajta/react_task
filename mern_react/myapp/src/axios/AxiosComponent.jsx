// import  { useState, useEffect } from "react";
// import axios from "axios";

// const AxiosComponent = () => {
//   // State to store the fetched data
//   const [data, setData] = useState([]);


//   // Function to fetch data using Axios
//   const fetchData = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // Call fetchData on component mount
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
    
//     <div >
//       <h1 style={{textAlign:"center",color:"black",fontSize:"40px"}}>Todos</h1>
//      {data.map((todo)=>{
//          return (
//           <div key={todo.id} style={{textAlign:"center",backgroundColor:"grey",color:"white",margin:"3rem",padding:"3rem",fontSize:"36px"}}>
//             <h2>{todo.title}</h2>
            
//           </div>
//          )
//      })}

//     </div>
    
//   );
// };

// export default AxiosComponent;


// import  { useState, useEffect } from "react";
// import axios from "axios";

// function AxiosComponent() {
//   const url = "https://jsonplaceholder.typicode.com/users";
//   const [data, setData] = useState([]);

//   const fetchInfo = () => {
//     return axios.get(url)
//     .then((res) => 
//     setData(res.data));
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   return (
//     <div className="App">
//       <h1 style={{ color: "green" }}>using Axios Library to Fetch Data</h1>
//       <center>
//         {data.map((dataObj) => {
//           return (
//             <div key={dataObj.id}
//               style={{
//                 width: "10em",
//                 backgroundColor: "yellow",
//                 padding: 2,
//                 borderRadius: 10,
//                 marginBlock: 10,
//               }}
//             >
//               <p style={{ fontSize: 20, color: 'red' }}>{dataObj.name}</p>
//             </div>
//           );
//         })}
//       </center>
//     </div>
//   );
// }

// export default AxiosComponent;

import { useState } from "react";
import axios from "axios";

export default function AxiosComponent(){

  const [data, setData] = useState([]);
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      setData(response.data);
        console.log("Get Response :",response.data);
    })
    .catch((error)=>{
        console.log("Get error :",error.message?error.message:error);
    });

    // const postData={
    //     "id":11,
    //     "name":"Sample name",
    //     "username":"Bret",
    //     "email":"Sincere@april.biz"
    // }


axios
    .post('https://jsonplaceholder.typicode.com/users',data)
    .then((response)=>{
        console.log("Post Response :",response.data);
    })
    .catch((error)=>{
        console.log("Post Error:",error.message?error.message:error);
    });
    return (
      <div><h1>Axios</h1>
      
         {data.map((dataObj) => {
          return (
            <div key={dataObj.id}
              style={{
                width: "10em",
                backgroundColor: "yellow",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'red' }}>{dataObj.name}</p>
            </div>
          );
        })}
      
      </div>
    )
}