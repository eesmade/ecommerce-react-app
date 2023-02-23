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
		.then(result => result.json())
        .then(data => {
					// console.log(data)

					if(data==false){
				// Error Alert Message
						Swal.fire({
							title: 'Unauthorized!',
                            icon: 'error',
                            text: 'You do not have permission to perform this action.'
						})
					}else{
				// Success Alert Message
						Swal.fire({
							title: 'Updated Successfully!',
							icon: 'success',
							text: 'The item has been updated!'
						})

						navigate('/admin/product');
					}
				})
        // .catch(error => console.log(error))
        

	return(

		<Navigate to = "/admin/product"/>
		
	
		
		)
}
