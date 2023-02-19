import {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Container} from 'react-bootstrap'


export default function PageNotFound(){


	return(

		<Fragment>
			<Container className="text-center">
				<img className="img404" src = 'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000' height='400px' width='400px'/>
				<h1 className="mb-2">Sorry, the page cannot be found!</h1>
				<h5 className="mt-1">The link might be broken or the page has been removed.</h5>
				<p>Return to the <Link as = {Link} to = '/'> homepage.</Link></p>
			</Container>
		</Fragment>

		)
}