 import {useState} from "react";
 import {Container, Row, Col, Button, Table} from "react-bootstrap";
 import {useContext, useEffect, Fragment} from "react";
 import UserContext from "../UserContext";
 import {Link} from "react-router-dom";

// import bg from '../images/bg2.jpg'
import edit from '../images/edit.png'
import disable from '../images/disable.png'
import enable from '../images/enable.png'

 export default function ProductTable() {

// useStates
    const [products,setProducts] = useState([])
    const [isActive, setIsActive] = useState('')

    const {user, setUser} = useContext(UserContext);



// useEffect

     useEffect(()=>{
         fetch(`${process.env.REACT_APP_API_URL}/product/all`,{
            headers: {
                'Content-Type':'application/json',
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
         })
         .then(result => result.json())
         .then(data =>{
            // console.log(data)
            setProducts(data)
         })
         
     },[])


   return (
    <Fragment>
     <Container className='text-center'>
       <Table>
         <thead>
             <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stocks</th>             
                {/*<th>IsActive</th>      */}
                <th>Actions</th>      
             </tr>
         </thead>
         {products.map(products => ( 
         <tbody key ={products._id}>
            <tr>
                <td>{products._id}</td>
                <td>{products.productName}</td>
                <td>{products.description}</td>
                <td>{products.category}</td>
                <td>{products.price}</td>
                <td>{products.stocks}</td>
                {/*<td>{products.isActive}</td>*/}
                <td>
                  <Button variant='none' className="mx-2"  as = {Link} to = {`/update/${products._id}`}><img className="edit-icon" src={edit}/></Button>
                      {
                         products.isActive ?                    
                          <Button variant='none' as = {Link} to = {`/archive/${products._id}`}>
                          <img className="disable-icon" src={disable}/>
                          </Button>
                          :
                          <Button variant='none' as = {Link} to = {`/archive/${products._id}`}>
                           <img className="enable-icon" src={enable}/>
                          </Button>
                      }
              
                    </td>
                </tr>
            </tbody>
        ))}


       </Table>
     </Container>
     
    </Fragment>
   );
 }
