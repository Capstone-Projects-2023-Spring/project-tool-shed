import React, {useState} from 'react';
import { Box, Button, FormControl, FormHelperText,
	 FormErrorMessage, FormLabel, Input, Stack, Select, Card, CardHeader,
	 CardBody, Heading, Summary, Text, StackDivider, Divider,
	 Link, Switch } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useFormik, useFormikContext, FormikProvider } from 'formik';

import { AsyncCreatableSelect } from "chakra-react-select";

import renderComponent from './util/renderComponent';

import toolSchema from '../validators/tool';
import listingSchema from '../validators/listing';
import {billingIntervals, billingIntervalNouns} from '../constants';

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

async function apiCreate(collection, name) {
	return await fetch(`/api/create/${collection}`, {
		method: "POST",
		headers: {
			'Content-Type': "application/json"
		},
		body: JSON.stringify({name}),
		credentials: "same-origin"
	}).then(x => x.json());
}

const SearchDropdown = ({name, collection}) => {
	const [isLoading, setLoading] = useState(false);
	const {values, setFieldValue, handleBlur, handleChange} = useFormikContext();
	const [refreshToken, setRefreshToken] = useState(Math.random());

	const handleCreate = inputValue => {
		setLoading(true);
		apiCreate(collection, inputValue).then(newOption => {
			setLoading(false);
			setRefreshToken(Math.random());
			setFieldValue(name, newOption);
		});
	};

	const searchCollection = s => fetch(`/api/search/${collection}?q=${encodeURIComponent(s)}`, {
		method: "GET",
		credentials: "same-origin"
	}).then(x => x.json()).then(x => x.results);

	return (
		<AsyncCreatableSelect
			key={refreshToken}
			isDisabled={isLoading}
			isLoading={isLoading}
			defaultOptions
			isClearable
			value={values[name]}
			onChange={o => setFieldValue(name, o)}
			onBlur={handleBlur}
			name={name}
			getOptionLabel={e => e.__isNew__ ? e.label : e.name}
			getOptionValue={e => e.__isNew__ ? undefined : e.id}
			loadOptions={searchCollection}
			onCreateOption={handleCreate} />
	);
};

const ListingForm = ({listing: _listing, toolId, onDelete}) => {
	const [listing, setListing] = useState(_listing);
	const isEdit = !!listing.id;

	const formik = useFormik({
		enableReinitialize: true,
		validateOnBlur: true,
		initialValues: listing ?? {},
		onSubmit: async values => {
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

				setListing(l);
				resetForm(l);
			} catch (error) {
				setErrors({ submit: error.message });
			} finally {
				setSubmitting(false);
			}

		}
	});

	const {values, handleSubmit, handleBlur, handleChange, errors, setSubmitting, isSubmitting} = formik;

	const handleDelete = () => {
		// TODO: handle deleting things.
	};

	return (
		<FormikProvider value={formik}>
      			<Card p="5">
				<Stack spacing={3}>
					<FormControl isInvalid={errors.active}>
						<FormLabel>Active</FormLabel>
						<Switch name="active" isChecked={values.active ?? true} onChange={handleChange} />
					</FormControl>
					<FormControl isInvalid={errors.price}>
						<FormLabel>Price</FormLabel>
						<Input name="price" type="number" value={values.price} onChange={handleChange} onBlur={handleBlur} />
					</FormControl>
					<FormControl isInvalid={errors.maxBillingIntervals}>
						<FormLabel>Max # of billing intervals</FormLabel>
						<Input name="maxBillingIntervals" value={values.maxBillingIntervals} type="number" step="1" onChange={handleChange} onBlur={handleBlur} />
					</FormControl>
					<FormControl>
						<FormLabel>Billing Interval</FormLabel>
						<Select value={values.billingInterval} onChange={handleChange} placeholder="Select billing interval" name="billingInterval">
							{billingIntervals.map(x => <option key={x} value={x}>{capitalize(x)}</option>)}
						</Select>
					</FormControl>
					<Button mt={4} onClick={(e) => { e.preventDefault(); handleSubmit(e)}} colorScheme="blue" isLoading={isSubmitting}>{isEdit ? "Save" : "Create"}</Button>
				</Stack>
			</Card>
		</FormikProvider>
	);
};

const ToolForm = ({tool: _tool, listings: _listings=[], toolCategories, toolMakers}) => {
	const [tool, setTool] = useState(_tool);
	const [listings, setListings] = useState(_listings);
	const isEdit = !!tool;
	const [manualFile, setManualFile] = useState();
	const [photoFile, setPhotoFile] = useState();

	const onNewListing = () => setListings([...listings, {}]);

	const onListingDelete = l => {
		const idx = listings.indexOf(l);
		if (idx !== -1) {
			setListings([...listings].splice(idx, 1));
		}
	};

	const manualURL = tool && tool.manual ? `/uploads/${tool.manual.path}` : null;
	const manualName = tool && tool.manual ? tool.manual.originalName : null;

	const formik = useFormik({
		enableReinitialize: true,
		validateOnBlur: true,
		initialValues: tool ?? {},
		onSubmit: async _values => {
			setSubmitting(true);
			let formData = new FormData();

			const {maker, category, tool_maker_id, tool_category_id, ...values} = _values;

			for (const [k, v] of Object.entries(values)) {
				formData.set(k, v ?? '');
			}

			let maker_id = maker ? maker.id : undefined;
			if (maker && maker_id < 0) { // we have a new maker
				const newMaker = await apiCreate('maker', maker.name);
				maker_id = newMaker.id;
			}


			let cat_id = category ? category.id : undefined;
			if (category && cat_id < 0) { // we have a new maker
				const newCat = await apiCreate('category', category.name);
				cat_id = newCat.id;
			}

			formData.set('tool_maker_id', maker_id ?? '');
			formData.set('tool_category_id', cat_id ?? '');

			if (manualFile) {
				formData.set('manual', manualFile);
			}

			if (photoFile) {
				formData.set('photo', photoFile);
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

				setManualFile(null);
				setPhotoFile(null);
				setSubmitting(false);
				setTool(t);
				resetForm({values: t});
			} catch (error) {
				setSubmitting(false);
				setErrors({ submit: error.message });
			}
		}
	});
	const {values, errors, touched, setFieldValue, handleChange, handleSubmit, handleBlur, isSubmitting, setSubmitting, setErrors, resetForm} = formik;

	const photoURL = tool && tool.photo ? `/uploads/${tool.photo.path}` : null;
	const photoName = tool && tool.photo ? tool.photo.originalName : null;

	return (
		<Card>
			<CardHeader>
				<FormikProvider value={formik}>
					<Heading size="md">Tool Information</Heading>
					<br />
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
							<SearchDropdown collection="category" name="category" />
						</FormControl>
						<FormControl>
							<FormLabel>Maker</FormLabel>
							<SearchDropdown collection="maker" name="maker" />
						</FormControl>
						<FormControl>
							<FormLabel>YouTube Video</FormLabel>
							<Input name="video" type="url" value={values.video} onChange={handleChange} onBlur={handleBlur} />
						</FormControl>
						<FormControl>
							<FormLabel>Manual</FormLabel>
							<Input border={0} pb={0} mb={0} height="auto" padding="1" type="file" onChange={e => setManualFile(e.currentTarget.files[0])} />
							{manualURL && <FormHelperText>Currently uploaded: <Link color='teal.500' isExternal href={manualURL}>{manualName} <ExternalLinkIcon mx='2px' /></Link></FormHelperText>}
						</FormControl>
						<FormControl>
							<FormLabel>Photo</FormLabel>
							<Input border={0} pb={0} mb={0} height="auto" padding="1" type="file" onChange={e => setPhotoFile(e.currentTarget.files[0])} />
							{photoURL && <FormHelperText>Currently uploaded: <Link color='teal.500' isExternal href={photoURL}>{photoName} <ExternalLinkIcon mx='2px' /></Link></FormHelperText>}
						</FormControl>
						<Button onClick={handleSubmit} mt={4} colorScheme="blue" isLoading={isSubmitting} type="submit">{isEdit ? "Save" : "Create"}</Button>
					</Stack>
				</FormikProvider>

			</CardHeader>
			{isEdit && <Divider />}
			{isEdit && <CardBody>
				<Stack divider={<StackDivider />} spacing={3}>
					<Heading size='md'>Listings</Heading>
					{listings.map(l => <ListingForm toolId={tool.id} key={l.id} listing={l} onDelete={onListingDelete} />)}
					{listings.length == 0 && <Text>You need to create a listing for your tool to be visible to the public.</Text>}
					<Button mt={4} colorScheme="blue" onClick={onNewListing}>+ New Listing</Button>
				</Stack>
			</CardBody>}
		</Card>
	);
};

renderComponent("#root", <ToolForm {...window._toolFormProps} />);

