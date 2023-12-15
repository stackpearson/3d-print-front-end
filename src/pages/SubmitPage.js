import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/Submit.css';
import axios from 'axios';
import { useState } from 'react';

function SubmitPage() {
    const [formData, setFormData] = useState({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        idea: ''
    })

    const [projectId, setProjectId] = useState(null);

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // console.log(formData)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('http://localhost:3000/project', formData);
        console.log('response data: ', response.data)
        const { _id } = response.data;
        console.log('_id: ', _id);
        setProjectId(_id);


        setFormData({
           customerName: '',
            customerEmail: '',
            customerPhone: '',
            idea: ''
        });
        } catch (error) {
            console.error('Error: ', error)
        } 
    };


    return (<>
      <div className="submit">
        {!projectId ? (<>
            <div className='form-container'>
            <h2>Send Us Your Ideas!</h2>
                <Form>
                <Form.Group className="mb-3" controlId="submitForm.name">
                    <Form.Label style={{textAlign: 'center'}}>Name</Form.Label>
                    <Form.Control 
                        style={{textAlign: 'center'}}
                        type="text"
                        name='customerName'
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleChanges}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="submitForm.email">
                    <Form.Label style={{textAlign: 'center'}}>Email address</Form.Label>
                    <Form.Control 
                        style={{textAlign: 'center'}}
                        type="email"
                        name='customerEmail'
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChanges}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="submitForm.phone">
                    <Form.Label style={{textAlign: 'center'}}>Phone Number</Form.Label>
                    <Form.Control
                        style={{textAlign: 'center'}}
                        type="text"
                        name='customerPhone'
                        placeholder="100-123-1234"
                        value={formData.phone}
                        onChange={handleChanges}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="submitForm.idea">
                    <Form.Label>Your Idea:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name='idea'
                        value={formData.idea}
                        onChange={handleChanges}
                    />
                </Form.Group>
                <Button variant='primary' type='submit' onClick={handleSubmit}>Submit</Button>
                </Form>
            </div>
            
        </>) : (<>
            <div className='res-container'>
                <h2>Thank you for your submission!</h2>
                <p>One of our designers will reach out to you shortly using one of the contact methods you provided. If you need to contact us regarding your project, please use this reference number: {projectId}.</p>
            </div>

        </>)}
      </div>
  </>);
  }
  
  export default SubmitPage;