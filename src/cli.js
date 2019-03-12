#!/usr/bin/env node

import { mdLinks } from './index.js';


mdLinks('./src', options).then(resp => console.log(resp));