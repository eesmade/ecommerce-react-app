
import {useState} from "react";
import {Container, Row, Col, Button, Table} from "react-bootstrap";
import {useContext, useEffect, Fragment} from "react";
import UserContext from "../UserContext";
import {Link} from "react-router-dom";

export default function MyOrderDetails(){


// useStates
		const [order,setOrder] = useState([])

		const {user, setUser} = useContext(UserContext);


// useEffect

     useEffect(()=>{
         fetch(`${process.env.REACT_APP_API_URL}/order/details/:orderId`,{
            headers: {
                'Content-Type':'application/json',
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
         })
         .then(result => result.json())
         .then(data =>{
            // console.log(data)
            setOrder(data)
         })
         
     },[])

	return(

		<Fragment>
		 <Container className='text-center'>
		   <Table>
		     <thead>
		         <tr>
		            <th>Order ID</th>
		            <th>User ID</th>
		            <th>Product Name</th>
		            <th>Description</th>
		            <th>Purchase Details</th>
		            <th>Total Order</th>    
		         </tr>
		     </thead>
		     {order.map(order => ( 
		     <tbody key ={order._id}>
		        <tr>
		            <td>{order._id}</td>
		            <td>{order.userId}</td>
		            <td>{order.productName}</td>
		            <td>{order.description}</td>
		            <td>{order.purchasedOn}</td>
		            <td>{order.totalOrder}</td>
		            </tr>
		        </tbody>
		    ))}


		   </Table>
		 </Container>
		 
		</Fragment>




		)
}