import React, { useState, useEffect ,useContext} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

 
//import { useHistory } from "react-router-dom";
 
const AddProduct = () => {
  const [addproduct, setAddproduct]= useState([]); 
  useEffect( ()=>{
      const getAddproduct= async()=>{
          const reqData= await axios("http://localhost:5000/api/user");
          const resData= await reqData.json();
          setAddproduct(resData);
         console.log(resData);
      }
      getAddproduct();
  },[]);
 
  const [file, setFile] = useState();
  

  // let history = useHistory(); // Use for Navigate on Previous
  const [users, setUsers] = useState({
    id: '',
    name: '',
    category: '',
    image: '',
    new_price: '',
    old_price: '',
  })
 
  const {id, name,category,image,new_price,old_price} =users;
  const onInputChange = (e) => {
    setUsers(prev=>({...prev, [e.target.name]: [e.target.value] }))
  }
   
  const onSubmit =(e)  => {
    e.preventDefault();
    axios.post('http://localhost:8081/addproduct',users);
    alert('Data Inserted');
    // history.push("/");
  }
  return (
    <div className="container bg-light mt-5">
      <div class="row">  
       <div className="col-sm-4 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Product</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product id"
              name="id"
              value={id}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Category"
              name="category"
              value={category}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="App">
            <h2>Add Image:</h2>
            <input type="file"  />
            <img src={file} />
        </div>
          
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter New Price"
              name="new_price"
              value={new_price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Old Price"
              name="old_price"
              value={old_price}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <button className="btn btn-primary btn-block">Add Product</button>
         
        </form>
      </div>
    </div>
    <table className="table table-bordered">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>category</th>
                    <th>image</th>
                    <th>New Price</th>
                    <th>Old Price</th>
                    <th>Action</th>
                </tr>
            </thead>
           
            <tbody>
              {addproduct.map( (addproduct,i)=>(

              <tr key={i}>
            <td> {addproduct.id}</td>
            <td>{addproduct.name} </td>
            <td> {addproduct.category}</td>
            <td> {addproduct.image}</td>
            <td> {addproduct.new_price}</td>
            <td> {addproduct.old_price}</td>
            <td>
            <Link to={"/editUser"} className="btn btn-success mx-2">Edit</Link>
             <Link to="/deleteUser" className="btn btn-danger">Delete</Link>
             </td>
               </tr>
               ))
}
              </tbody>
        </table>
  </div>  
  
  
  );
};
 
export default AddProduct;