import { useFormik } from "formik";
import * as yup from "yup";
import SubmitButton from "./../buttons/submit/SubmitButton";
import Input from "./../textarea/Textarea";
import { style } from "./Form.style.js";
import {
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  withStyles,
  FormHelperText,
  Typography,
} from "@material-ui/core";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter Your Firstname")
    .required("Firstname is required"),
  lastName: yup.string("Enter Your Lastname").required("Lastname is required"),
  phoneNumber: yup
    .number("Enter Your Phone number")
    .required("Email is required"),
  gender: yup.string("Enter Your Gender").required("Gender is required"),
  email: yup
    .string("Enter Your Name")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter Your Password")
    .min(8, "Password Should be of min length of 8")
    .required("Password is required"),
  address: yup.string("Enter Your Adderss").required("Adderss is required"),
});

const Form = ({ classes }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      gender: "",
      address: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <Grid className={classes.container} container sm={12} spacing={2}>
        <Grid item sm={12}>
          <Typography variant="h2" component="h2" color='primary'>
            Register
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Grid container sm={12} spacing={1}>
            <Grid item sm={12} md={6}>
              <Input
                id="firstName"
                name="firstName"
                label="Firstname"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <Input
                id="lastName"
                name="lastName"
                label="LastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={12}>
          <Grid container sm={12} spacing={1}>
            <Grid item sm={12} md={6}>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                type="number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="gender-select-label">Gender</InputLabel>
                <Select
                  labelId="gender-select-label"
                  id="gender"
                  name="gender"
                  label="Gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  error={formik.touched.gender && Boolean(formik.errors.gender)}
                  helperText={formik.touched.gender && formik.errors.gender}
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
                <FormHelperText>
                  {formik.touched.gender && formik.errors.gender}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={12}>
          <Grid container sm={12} spacing={1}>
            <Grid item sm={12} md={6}>
              <Input
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <Input
                id="password"
                name="password"
                type="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={12}>
          <Input
            id="address"
            name="address"
            label="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
        </Grid>
        <Grid item sm={12}>
          <SubmitButton fullWidth />
        </Grid>
      </Grid>
    </form>
  );
};
export default withStyles(style)(Form);
