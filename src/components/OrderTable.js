
import {useState} from "react";
import {Container, Row, Col, Button, Table} from "react-bootstrap";
import {useContext, useEffect, Fragment} from "react";
import UserContext from "../UserContext";
import {Link} from "react-router-dom";

export default function OrderTable(){


// useStates
		const [orders,setOrders] = useState([])

		const {user, setUser} = useContext(UserContext);


// useEffect

     useEffect(()=>{
         fetch(`${process.env.REACT_APP_API_URL}/order/all`,{
            headers: {
                'Content-Type':'application/json',
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
         })
         .then(result => result.json())
         .then(data =>{
            // console.log(data)
            setOrders(data)
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
		            <th>Quantity</th>
		            <th>Total Order</th>    
		         </tr>
		     </thead>
		     {orders.map(orders => ( 
		     <tbody key ={orders._id}>
		        <tr>
		            <td>{orders._id}</td>
		            <td>{orders.userId}</td>
		            <td>{orders.productName}</td>
		            <td>{orders.description}</td>
		            <td>{orders.purchasedOn}</td>
		            <td>{orders.quantity}</td>
		            <td>{orders.totalOrder}</td>
		            </tr>
		        </tbody>
		    ))}


		   </Table>
		 </Container>
		 
		</Fragment>




		)
}