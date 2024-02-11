import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL

const ContactForm = () => {
    const formik = useFormik({
    initialValues: {
        email: "",
        message: "",
        name: "",
       
    },
     validationSchema: Yup.object({
        email: Yup.string().email("Invalid email").max(50, "Max 50 characters").required("Required"),
        message: Yup.string().required("Required").max(200, "Max 200 characters"),
        name: Yup.string().required("Required").min(4, "At least 4 characters").max(30, "Max 30 characters"),
    }),
    onSubmit: async (values) => {
      console.log(values)
      const dto = {
        email:values.email,
        name:values.name,
        message:values.message,
      }
      try {
        const response = await axios.post(`${BASE_URL}/project/shopping-cart`, dto)
        alert (JSON.stringify(response.data) );
      } catch (error) {
        alert("Error")
        
      }
    }
    })
  return (
    <Container>
        <Form>
            <FormGroup onSubmit={formik.handleSubmit}>
                <FormLabel>Name</FormLabel>
                <FormControl type='text' placeholder='Entry name'
                {...formik.getFieldProps("name")}

                />
       {formik.errors.name && formik.touched.name && <p className='text-danger'> {formik.errors.name} </p>}
            </FormGroup>

           <FormGroup onSubmit={formik.handleSubmit}>
                <FormLabel>Email</FormLabel>
                <FormControl type='email' placeholder='Email'
                {...formik.getFieldProps("email")}

                />
      {formik.errors.email && formik.touched.email && <p className='text-danger'> {formik.errors.email} </p>}
            </FormGroup>

            <FormGroup onSubmit={formik.handleSubmit}>
                <FormLabel>Message</FormLabel>
                <FormControl type='text' placeholder='Entry message'
                {...formik.getFieldProps("message")}

                />
       {formik.errors.message && formik.touched.message && <p className='text-danger'> {formik.errors.message} </p>}
            </FormGroup>

            <Button variant="primary" className='w-100 mt-5 mb-5' type="submit">
        Send
      </Button>
        </Form>
    </Container>
  )
}

export default ContactForm