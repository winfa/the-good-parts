import './styles.css';
import { getResult } from './result.js';

document.getElementById('app').innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  ${getResult()}
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
