import React, {useState} from 'react';
import {createRoot} from 'react-dom';
import { ChakraProvider, Box, Button, FormControl, FormHelperText,
	 FormErrorMessage, FormLabel, Input, Stack, Select, Card, CardHeader,
	 CardBody, Heading, Summary, Text, StackDivider, Divider } from '@chakra-ui/react';
import { Formik, Form, useFormikContext } from 'formik';
import * as Yup from 'yup';
import toolSchema from '../validators/tool';
import listingSchema from '../validators/listing';
import {billingIntervals} from '../constants';

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

const ListingForm = ({listing: _listing, toolId, onDelete}) => {
	const [listing, setListing] = useState(_listing);
	const isEdit = !!listing.id;
	const handleSubmit = async (values, { setSubmitting, resetForm, setErrors }, history) => {
		setSubmitting(true);
		try {
			const {listing: l} = await fetch(isEdit ? `/api/listings/${listing.id}` : '/api/listings/new', {
				method: isEdit ? "PUT" : 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({...values, toolId}),
				credentials: "same-origin"
			}).then(x => x.json());

			setManualFile(null);
			setListing(l);
			resetForm(l);
		} catch (error) {
			setErrors({ submit: error.message });
		} finally {
			setSubmitting(false);
		}
	};

	const handleDelete = () => {
		// TODO: handle deleting things.
	};

	return (
      		<Card p="5">
	<Formik enableReinitialize initialValues={listing ?? {}} onSubmit={handleSubmit}>
        {({ values, errors, touched, setFieldValue, handleChange, handleBlur, handleSubmit: hs, isSubmitting }) => (
		<Form>
			<FormControl isInvalid={errors.active}>
				<FormLabel>Active</FormLabel>
			</FormControl>
			<FormControl isInvalid={errors.price}>
				<FormLabel>Price</FormLabel>
				<Input name="price" type="number" value={values.price} onChange={handleChange} onBlur={handleBlur} />
			</FormControl>
			<FormControl isInvalid={errors.maxBillingIntervals}>
				<FormLabel>Max # of billing intervals</FormLabel>
				<Input name="maxBillingIntervals" type="number" step="1" value={values.maxBillingIntervals} onChange={handleChange} onBlur={handleBlur} />
			</FormControl>
			<FormControl>
				<FormLabel>Billing Interval</FormLabel>
				<Select placeholder="Select billing interval" name="billingInterval" value={values.billingInterval}>
					{billingIntervals.map(x => <option key={x} value={x}>{capitalize(x)}</option>)}
				</Select>
			</FormControl>
			<Button mt={4} onSubmit={(e) => { e.preventDefault(); hs(e)}} colorScheme="blue" isLoading={isSubmitting} type="submit">{isEdit ? "Save" : "Create"}</Button>
		</Form>
	)}
	</Formik>

		</Card>
	);
};

const ToolForm = ({tool: _tool, listings: _listings, toolCategories, toolMakers}) => {
	const [tool, setTool] = useState(_tool);
	const [listings, setListings] = useState(_listings);
	const isEdit = !!tool;
	const [manualFile, setManualFile] = useState();
	const handleSubmit = async (values, { setSubmitting, resetForm, setErrors }, history) => {
		setSubmitting(true);
		let formData = new FormData();
		for (const [k, v] of Object.entries(values)) {
			formData.append(k, v);
		}
		if (manualFile) {
			formData.append('manual', manualFile);
		}
		try {
			const {tool: t} = await fetch(isEdit ? `/api/tools/${tool.id}` : '/api/tools/new', {
				method: isEdit ? "PATCH" : 'POST',
				body: formData,
				credentials: "same-origin"
			}).then(x => x.json());
			if (!isEdit) {
				window.history.pushState({}, undefined, `/tools/${t.id}/edit`);
			}

			setTool(t);
			setManualFile(null);

			setSubmitting(false);
			resetForm(t);
		} catch (error) {
			setSubmitting(false);
			setErrors({ submit: error.message });
		}
	};

	const onNewListing = () => {
		setListings([...listings, {}]);
	};

	const onListingDelete = l => {
		const idx = listings.indexOf(l);
		if (idx !== -1) {
			setListings([...listings].splice(idx, 1));
		}
	};

	const manualURL = tool && tool.manual ? `/uploads/${tool.manual.path}` : null;
	const manualName = tool && tool.manual ? tool.manual.originalName : null;

	return (
	<Box maxW={{ sm: '90%', md: '80%', lg: '50%' }} mx="auto" my='8'>
		<Card>
			<CardHeader>
			<Heading size="md">Tool Information</Heading>
			<br />
		<Formik enableReinitialize initialValues={tool ?? {}} validationSchema={toolSchema} onSubmit={handleSubmit}>
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
					<FormLabel>Category</FormLabel>
					<Select placeholder="Select category" name="tool_category_id" value={values.tool_category_id}>
						{toolCategories.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</Select>
				</FormControl>
				<FormControl>
					<FormLabel>Maker</FormLabel>
					<Select placeholder="Select maker" name="tool_maker_id" value={values.tool_maker_id}>
						{toolMakers.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</Select>
				</FormControl>
				<FormControl>
					<FormLabel>Manual</FormLabel>
					<Input padding="1" type="file" onChange={e => setManualFile(e.currentTarget.files[0])} />
					{manualURL && <FormHelperText>Currently uploaded: <a target="_blank" href={manualURL}>{manualName}</a></FormHelperText>}
				</FormControl>
				<Button mt={4} colorScheme="blue" isLoading={isSubmitting} type="submit">{isEdit ? "Save" : "Create"}</Button>
			</Stack>
			</Form>
		)}
		</Formik>
			</CardHeader>
			{isEdit && <Divider />}
			{isEdit && <CardBody>
				<Stack divider={<StackDivider />} spacing='4'>
					<Heading size='md'>Listings</Heading>
					{listings.map(l => <ListingForm toolId={tool.id} key={l.id} listing={l} onDelete={onListingDelete} />)}

					<Button mt={4} colorScheme="blue" onClick={onNewListing}>+ New Listing</Button>
				</Stack>
			</CardBody>}
		</Card>
	</Box>
)};

const root = document.getElementById('root');
createRoot(root).render(
  <ChakraProvider>
      <ToolForm {...window._toolFormProps} />
  </ChakraProvider>
);