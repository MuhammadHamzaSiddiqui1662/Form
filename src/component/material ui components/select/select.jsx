import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const Select = props => (
    <FormControl>
        <InputLabel>{props.lable}</InputLabel>
        <Select
          id={props.id}
          value={props.value}
          onChange={props.onChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </FormControl>
)
export default Select;