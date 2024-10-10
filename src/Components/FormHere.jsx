import {
  Alert,
  Button,
  Input,
  Option,
  Radio,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const signUpSchema = Yup.object({
  name: Yup.string().min(3).max(20).required("Name is Required"),
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Email is Required"),
  password: Yup.string()
    .min(6, "Minimum password should be of 6 characters")
    .max(20)
    .required("Password is required"),
  cpassword: Yup.string()
    .required("Confirm Pasword is also required")
    .oneOf([Yup.ref("password"), null], "Password don't match"),
  gender: Yup.string().required("Gender is required"),
  country: Yup.string().required("Country is required"),
});

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 
          2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 
          2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const FormHere = () => {
  const [isSubmitted, setisSubmitted] = useState(false);
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          cpassword: "",
          country: "",
          gender: "",
          comments: "",
        }}
        validationSchema={signUpSchema}
        onSubmit={(value, action) => {
          console.log(value);

          action.resetForm();
          setisSubmitted(true);
          setTimeout(() => setisSubmitted(false), 3000);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          setFieldValue,
          touched,
          errors,
        }) => {
          return (
            <form
              className="mt-4 space-y-5 w-[740px] sm:w-[440px]"
              onSubmit={handleSubmit}
              action=""
            >
              <div>
                {isSubmitted && (
                  <Alert
                    icon={<Icon />}
                    className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 
                  font-medium text-[#2ec946]"
                  >
                    Successfully registered
                  </Alert>
                )}
              </div>

              <div className="space-y-3 bg-white border rounded-md border-x-red-700 border-y-deep-orange-700 p-7">
                <div>
                  <Typography
                    variant="h3"
                    className="m-2 text-2xl text-center "
                  >
                    Register Here
                  </Typography>

                  <Input
                    label="Name"
                    name="name"
                    placeholder="Enter Your Name"
                    onChange={handleChange}
                    value={values.name}
                  />
                  {errors.name && touched.name && (
                    <p className="text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Input
                    label="Email"
                    name="email"
                    placeholder="Enter Your Email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="password"
                    label="Password"
                    name="password"
                    placeholder="Enter Your Password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <p className="text-red-400">{errors.password}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="password"
                    label="Confirm Password"
                    name="cpassword"
                    placeholder="Enter Your Confirm Password"
                    onChange={handleChange}
                    value={values.cpassword}
                  />
                  {errors.cpassword && touched.cpassword && (
                    <p className="text-red-400">{errors.cpassword}</p>
                  )}
                </div>

                <div>
                  <Radio
                    name="gender"
                    onChange={handleChange}
                    label="Male"
                    value="Male"
                    checked={values.gender === "Male"}
                  />
                  <Radio
                    name="gender"
                    onChange={handleChange}
                    label="Female"
                    value="Female"
                    checked={values.gender === "Female"}
                  />
                  <Radio
                    name="gender"
                    onChange={handleChange}
                    label="Others"
                    value="Others"
                    checked={values.gender === "Others"}
                  />
                  {errors.gender && touched.gender && (
                    <p className="text-red-400">{errors.gender}</p>
                  )}
                </div>

                <div>
                  <Select
                    label="Select Country"
                    name="country"
                    value={values.country}
                    onChange={(e) => setFieldValue("country", e)}
                  >
                    <Option value="Nepal">Nepal</Option>
                    <Option value="India">India</Option>
                    <Option value="China">China</Option>
                  </Select>
                  {errors.country && touched.country && (
                    <p className="text-red-400">{errors.country}</p>
                  )}
                </div>

                <div>
                  <Textarea
                    label="Your Comments"
                    name="comments"
                    value={values.comments}
                    onChange={handleChange}
                    rows={8}
                  />
                </div>

                <div className="flex justify-center ">
                  <Button className="w-[700px]  md:w-96" type="submit">
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormHere;
