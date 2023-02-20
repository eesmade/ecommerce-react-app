 import {useState} from "react";
 import {Container, Row, Col, Button, Table} from "react-bootstrap";
 import {useContext, useEffect, Fragment} from "react";
 import UserContext from "../UserContext";
 import {Link} from "react-router-dom";


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
            console.log(data)
            setProducts(data)
         })
         
     },[])


   return (
    <Fragment>
     <Container>
       <Table>
         <thead>
             <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stocks</th>             
                <th>IsActive</th>      
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
                <td>{products.isActive}</td>
                <td>
                  <Button className="mx-2">Edit</Button>
                      {
                          isActive ?                    
                          <Button>
                          Disable
                          </Button>
                          :
                          <Button>
                          Enable
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

