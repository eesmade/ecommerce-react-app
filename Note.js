 

 {/*Category*/}
    						<Form.Group className="mb-3" controlId="formProductCategory">
    					        <Form.Label>Category</Form.Label>
    					        <Form.Select id="category" value = {category}
    					        	onClick = {event => setCategory(event.target.value)}
    					        	required>
    					                    <option>Shirt</option>
    					                    <option>Headwear</option>
    					                    <option>Stickers</option>
    					        </Form.Select>
    					      </Form.Group>