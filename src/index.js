import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';
import { alert, error as notifyError, info as notifyInfo } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

const input = document.getElementById('input');
const list = document.getElementById('list');
const country = document.getElementById('country');

input.addEventListener('input', debounce(onInputChange, 300));

function onInputChange(e) {
  e.preventDefault();

  const inputValue = e.target.value.trim();
  console.log(inputValue);
}
