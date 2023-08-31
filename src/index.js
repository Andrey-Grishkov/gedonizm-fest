import {Form} from './scripts/Form.js';

import './pages/index.scss';

const formContainer = document.querySelector('.form');

if(formContainer) {
  const form = new Form();
  form.setEventListener();
}
// let forms = new Form(['cafe', 'lekture', 'party', 'other']);
