import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, Box, Button, FormControl, FormHelperText, FormErrorMessage, FormLabel, Input, Stack, Select } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import toolSchema from '../validators/tool';

const ToolForm = ({tool, toolCategories, toolMakers}) => {
	const isEdit = !!tool;
	const [manualFile, setManualFile] = useState();
	const handleSubmit = async (values, { setSubmitting, resetForm, setErrors }, history) => {
		let formData = new FormData();
		for (const [k, v] of Object.entries(values)) {
			formData.append(k, v);
		}
		if (manualFile) {
			formData.append('manual', manualFile);
		}
		try {
			const {tool} = await fetch(isEdit ? `/api/tools/${tool.id}` : '/api/tools/new', {
				method: isEdit ? "PATCH" : 'POST',
				body: formData,
				credentials: "same-origin"
			}).then(x => x.json());

			window.location.href = `/tools/${tool.id}/edit`;
		} catch (error) {
			setSubmitting(false);
			setErrors({ submit: error.message });
		}
	};

	const manualURL = tool && tool.manual ? `/uploads/${tool.manual.path}` : null;
	const manualName = tool && tool.manual ? tool.manual.originalName : null;

	return (
	<Box maxW={{ sm: '90%', md: '80%', lg: '50%' }} mx="auto" my='8'>
		<Formik initialValues={tool ?? {}} validationSchema={toolSchema} onSubmit={handleSubmit}>
        	{({ values, errors, touched, setFieldValue, handleChange, handleBlur, isSubmitting }) => (
		<Form>
			<Stack spacing={3}>
				<FormControl isInvalid={errors.name}>
					<FormLabel>Name</FormLabel>
					<Input name="name" type="text" value={values.name} onChange={handleChange} onBlur={handleBlur} />
				</FormControl>
				<FormControl isInvalid={errors.description}>
					<FormLabel>Description</FormLabel>
					<Input name="description" type="text" value={values.description} onChange={handleChange} onBlur={handleBlur} />
				</FormControl>
				<FormControl>
					<Select placeholder="Select category" name="tool_category_id" value={values.tool_category_id} onChange={x => setSelectedCategory(x)}>
						{toolCategories.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</Select>
				</FormControl>
				<FormControl>
					<Select placeholder="Select maker" name="tool_maker_id" value={values.tool_maker_id} onChange={x => setSelectedCategory(x)}>
						{toolMakers.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</Select>
				</FormControl>
				<FormControl>
					<Input type="file" onChange={e => setManualFile(e.currentTarget.files[0])} />
					{manualURL && <FormHelperText>Currently uploaded: <a target="_blank" href={manualURL}>{manualName}</a></FormHelperText>}
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
      <ToolForm {...window._toolFormProps} />
  </ChakraProvider>
);