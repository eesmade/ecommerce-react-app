import {Fragment} from 'react';
import Banner from '../components/Banner.js'
import Highlights from '../components/Highlights.js'
import Shop from './Shop.js';


import bg from '../images/bg.png'


export default function Home(){


	return (
		<Fragment>
			<Banner/>
			<Highlights/>
			<Shop/>
		</Fragment>


		)
}