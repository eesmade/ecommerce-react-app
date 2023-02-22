import {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Container} from 'react-bootstrap'

import err from '../images/err.jpg'


export default function PageNotFound(){


	return(

		<Fragment>
			<Container className="text-center">
				<div><img className="err-icon mt-3" src={err}/></div>
				<h1 className="mb-2">Sorry, the page cannot be found!</h1>
				<h5 className="mt-1">The link might be broken or the page has been removed.</h5>
				<p>Return to the <Link as = {Link} to = '/'> homepage.</Link></p>
			</Container>
		</Fragment>

		)
}