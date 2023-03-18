import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Stack } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import validationSchema from '../validators/createUser';

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  line_one: '',
  line_two: '',
  city: '',
  state: '',
  zip_code: ''
};

function NewUserForm () {
    
    const handleSubmit = async (values, { setSubmitting, resetForm, setErrors }, history) => {
        console.log(values);
        try {
            console.log("In try")
            const response = await fetch('/user/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
            credentials: "same-origin"
        });
        console.log(values);
        console.log("hello im waiting");
        const data = await response.json();
            console.log('Response data:', data);

            // Parse the response data
            //const parsedData = JSON.parse(data);
    
            //console.log('Parsed data:', parsedData);

            //Clear form and show successful creation message
            resetForm();
            setStatus(data);
        } catch (error) {
            console.error(error);
            setSubmitting(false);
            setErrors({ submit: error.message });
        }
    };

  return (
    <Box maxW={{ sm: '90%', md: '80%', lg: '50%' }} mx="auto" my='8'>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
          <Form>
            <Stack spacing={3}>
            <FormControl isInvalid={errors.first_name && touched.first_name}>
                <FormLabel htmlFor="first_name">First Name:</FormLabel>
                <Input id="first_name" name="first_name" type="text" value={values.first_name} onChange={handleChange} onBlur={handleBlur} />
                <FormErrorMessage>{errors.first_name}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.last_name && touched.last_name}>
                <FormLabel htmlFor="last_name">Last Name:</FormLabel>
                <Input id="last_name" name="last_name" type="text" value={values.last_name} onChange={handleChange} onBlur={handleBlur} />
                <FormErrorMessage>{errors.last_name}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email && touched.email}>
                <FormLabel htmlFor="email">Email:</FormLabel>
                <Input id="email" name="email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password && touched.password}>
                <FormLabel htmlFor="password">Password:</FormLabel>
                <Input id="password" name="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.line_one && touched.line_one}>
                <FormLabel htmlFor="line_one">Address Line 1:</FormLabel>
                <Input id="line_one" name="line_one" type="text" value={values.line_one} onChange={handleChange} onBlur={handleBlur} />
                <FormErrorMessage>{errors.line_one}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.line_two && touched.line_two}>
                <FormLabel htmlFor="line_two">Address Line 2:</FormLabel>
                <Input id="line_two" name="line_two" type="text" value={values.line_two} onChange={handleChange} onBlur={handleBlur} />
                <FormErrorMessage>{errors.line_two}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.city && touched.city}>
                <FormLabel htmlFor="city">City:</FormLabel>
                <Input id="city" name="city" type="text" value={values.city} onChange={handleChange} onBlur={handleBlur} />
                <FormErrorMessage>{errors.city}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.state && touched.state}>
                <FormLabel htmlFor="state">State:</FormLabel>
                <Input id="state" name="state" type="text" value={values.state} onChange={handleChange} onBlur={handleBlur} />
                <FormErrorMessage>{errors.state}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.zip_code && touched.zip_code}>
                <FormLabel htmlFor="zip_code">Zip Code:</FormLabel>
                <Input id="zip_code" name="zip_code" type="text" value={values.zip_code} onChange={handleChange} onBlur={handleBlur} />
                <FormErrorMessage>{errors.zip_code}</FormErrorMessage>
            </FormControl>
            <Button mt={4} colorScheme="blue" isLoading={isSubmitting} type="submit">Submit</Button>
                </Stack>
                </Form>
                )}
                </Formik>
                </Box>
)};
const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <ChakraProvider>
      <NewUserForm />
  </ChakraProvider>
);