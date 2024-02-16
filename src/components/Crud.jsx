// import React, { useEffect, useState } from "react";
// import { db } from "../Firebase";
// import { collection,addDoc,getDocs,onSnapshot,doc,deleteDoc, getDoc, updateDoc} from "firebase/firestore";


// const Crud = () => {
  
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')

//     const [data,setData] = useState([]);


//     const [updatedData, setUpdatedData] = useState({})

//     const [id, setId] = useState('')
    
  


//     const collectionRef = collection(db,'crud')



// const handleSubmit = async (e) => {
//     e.preventDefault()

//     if(id===''){
//       await addDoc(collectionRef, { name, email })
//       console.log("form submitted");
  
//       setName('')
//       setEmail('')

//     }else{
//       const updateData = doc(db,'crud',id);
//       updateDoc(updateData, {name,email})
//       setName('')
//       setEmail('')
//       setId("");
//     }

//   }



//   useEffect(() => {
    
//     // const fetchData = async () =>{
//       //   const fetch  = await getDocs(collectionRef)
//       //   setData(fetch.docs.map((doc)=>({
//         //     ...doc.data(), id:doc.id
//         //   })))
//         // }

        
        
//         const fetchData = async () => {
//           onSnapshot(collectionRef, (snapshot) => {
//             setData(snapshot.docs.map((doc) => ({
//           ...doc.data(), id: doc.id
//         })))
//       })
//     }
//     fetchData();
    
    
//     setName(updatedData.name)
//     setEmail(updatedData.email)
    
//     console.log("useEffect is running");
    
//   }, [updatedData])



//   const handleDelete = (id) =>{
//     const deleteData = doc(db,'crud',id);
//     deleteDoc(deleteData);
//    }


//    const handleUpdate = (id) =>{
//     setId(id)
//    const updateData = doc(db,'crud',id);
//     getDoc(updateData).then((doc)=>setUpdatedData(doc.data()));
//   }



//   return (
//     <>
//       <div className="App">
//         <h1>Firebase Crud</h1>

//         <form onSubmit={handleSubmit}>
//           name :-{" "}
//           <input
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//             type="text"
//           />
//           <br />
//           <br />
//           email :-{" "}
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//           />
//           <br />
//           <br />
//           <input type="submit" />
//         </form>
//       </div>


//       <div className="App">
//         {
//             data.map((d)=>{
//                 return(
//                     <>
//                     <h1>{d.name} {d.email} {d.pincode} {" "} 
//                     <button onClick={()=>handleDelete(d.id)}>Delete</button> {" "} 
//                     <button onClick={()=>handleUpdate(d.id)}>Update</button> {" "} 

//                     </h1>
//                     </>
//                 )
//             })
//         }
//       </div>
//     </>
//   );
// };

// export default Crud;



import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const Crud = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const [updatedData, setUpdatedData] = useState({});
  const [id, setId] = useState("");
  const [checkedItems, setCheckedItems] = useState({});

  const collectionRef = collection(db, "crud");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id === "") {
      await addDoc(collectionRef, { name, email });
      console.log("form submitted");

      setName("");
      setEmail("");
    } else {
      const updateData = doc(db, "crud", id);
      updateDoc(updateData, { name, email });
      setName("");
      setEmail("");
      setId("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      onSnapshot(collectionRef, (snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };
    fetchData();

    setName(updatedData.name);
    setEmail(updatedData.email);

    console.log("useEffect is running");
  }, [updatedData, checkedItems]);

  const handleDelete = (id) => {
    const deleteData = doc(db, "crud", id);
    deleteDoc(deleteData);
  };

  const handleUpdate = (id) => {
    setId(id);
    const updateData = doc(db, "crud", id);
    getDoc(updateData).then((doc) => setUpdatedData(doc.data()));
  };

  const handleCheckboxChange = async (id) => {
    setCheckedItems({ ...checkedItems, [id]: !checkedItems[id] });
    // If checked, send data to the database
    if (!checkedItems[id]) {
      const selectedData = data.find((item) => item.id === id);
      if (selectedData) {
        await addDoc(collectionRef, selectedData);
        console.log("Data added to the database:", selectedData);
      }
    }
  };

  return (
    <>
      <div className="App">
        <h1>Firebase Crud</h1>

        <form onSubmit={handleSubmit}>
          name :-{" "}
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
          />
          <br />
          <br />
          email :-{" "}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>

      <div className="App">
        {data.map((d) => {
          return (
            <>
            
              <h1>
              <input
                key={d.id}
                type="checkbox"
                checked={checkedItems[d.id]}
                onChange={() => handleCheckboxChange(d.id)}
              />{" "}
                {d.name} {d.email} {d.pincode}{" "}
                <button onClick={() => handleDelete(d.id)}>Delete</button>{" "}
                <button onClick={() => handleUpdate(d.id)}>Update</button>{" "}
              </h1>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Crud;
