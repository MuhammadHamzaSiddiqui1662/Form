import TextFeild from '@material-ui/core/TextField';
import { style } from './Textarea.style.js';
import { withStyles } from '@material-ui/core';

const Input = props => <TextFeild fullWidth {...props} id="filled-basic" variant="filled" />

export default Input;