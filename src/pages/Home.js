import {Fragment} from 'react';
import Banner from '../components/Banner.js'
import Highlights from '../components/Highlights.js'
// import CourseCard from '../components/CourseCard.js'

import bg from '../images/bg2.jpg'


export default function Home(){


	return (
		<Fragment>
		<div className='bg' style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
		
			<Banner/>
			<Highlights/>
		</div>
		</Fragment>


		)
}