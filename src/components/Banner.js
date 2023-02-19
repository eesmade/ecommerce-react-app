import {Row, Col, Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {BsSearch} from "react-icons/bs";
import {Fragment} from 'react'

// Images
// import white from '../images/logo.png'
import l1 from '../images/models/l1.jpg'
import l2 from '../images/models/l2.jpg'
// import s1 from '../images/models/s1.jpg'
import p1 from '../images/models/p1.jpg'
import p2 from '../images/models/p2.jpg'
import m22 from '../images/models/22.jpg'
import m23 from '../images/models/23.jpg'
import m25 from '../images/models/25.jpg'



export default function Banner(){

	return(
	<Fragment>
		<Row className = "m-0 p-3">
		<h1 className ="text-center"> WHAT'S NEW? </h1>
				<Col className = "d-flex justify-content-center">
					<div className="col-5">
		              <div className="input-group">
		                <input
		                  type="text"
		                  className="form-control py-2"
		                  placeholder="Search Product Here..."
		                  aria-label="Search Product Here..."
		                  aria-describedby="basic-addon2"
		                />
		                <span className="input-group-text p-3" id="basic-addon2">
		                  <BsSearch className="fs-6" />
		                </span>
		              </div>
		            </div>

				</Col>
			</Row>

	{/*Tiles*/}

		<Container class1="home-wrapper-1 px-5 py-0 container-fluid">
			<Row className="row p-5">
	          <Col className="col col-5">
	              <img src= {l2} className="img-fluid rounded-3 main-banner" alt="main banner"/>
	           </Col>

	          <Col className="col">
	               <img src={p1} className="img-fluid rounded-3" alt="small banner"/>
	               <img src={m23} className="img-fluid rounded-3" alt="small banner"/>
	          </Col>

	          <Col className="col">
	               <img src={m25} className="img-fluid rounded-3" alt="small banner"/>
	               <img src={p2} className="img-fluid rounded-3" alt="small banner"/>
	           </Col>
	            
	        </Row>


		</Container>
	</Fragment>


		)
}