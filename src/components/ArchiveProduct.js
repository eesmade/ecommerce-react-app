import {useState, useEffect,Fragment} from 'react'
import {useParams, useNavigate,Navigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import {Button, Card, Container} from 'react-bootstrap';


export default function ArchiveProduct(){

// useState
	const [archive, setArchive] = useState()

// Hooks
	const navigate = useNavigate()
	const {productId, isActive} = useParams();

	
		fetch(`${process.env.REACT_APP_API_URL}/product/archive/${productId}`,{
			method: 'PATCH',
			headers:{
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
			
		})

	return(

		<Navigate to = "/admin/product"/>
		
	
		
		)
}
