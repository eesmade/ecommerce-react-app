import {Fragment} from 'react';
import Banner from '../components/Banner.js'
import Highlights from '../components/Highlights.js'
import Shop from './Shop.js';


import bg from '../images/bg.png'


export default function Home(){


	return (
		<Fragment>
		<div className='bg' style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
		
			<Banner/>
			<Highlights/>
			<Shop/>
		</div>
		</Fragment>


		)
}