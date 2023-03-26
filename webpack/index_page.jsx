import React from 'react';
import {createRoot} from 'react-dom/client';

import { categories } from '../public/categories'; // Import the categories array
import SearchTools from './SearchTools';

createRoot(document.getElementById('root')).render(<SearchTools categories={categories} />);

