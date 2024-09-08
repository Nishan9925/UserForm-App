import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the validation schema with Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please fill your Name"),
  surname: Yup.string().required("Please fill your Surname"),
  age: Yup.number()
    .typeError("Age must be a number")
    .required("Please fill your Age")
    .positive("Age must be a positive number")
    .integer("Age must be an integer"),
  email: Yup.string().email("Please enter a valid Email").required("Please fill your Email"),
  password: Yup.string()
    .required("Please fill your Password, minimum 8 characters")
    .min(8, "Password must be at least 8 characters long")
});

export const AddUser = ({ onAddUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const handleAdd = (data) => {
    onAddUser(data);
    reset();

    // Display success toast when user is added
    toast.success("User added successfully!", {
      position: "top-right", // Corrected string for position
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  return (
    <>
      <h3>Add User</h3>
      <form onSubmit={handleSubmit(handleAdd)}>
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        {errors.surname && <p style={{ color: "red" }}>{errors.surname.message}</p>}
        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

        <input {...register("name")} placeholder="Name" />
        <input {...register("surname")} placeholder="Surname" />
        <input {...register("age")} placeholder="Age" />
        <input {...register("email")} placeholder="Email" />
        <input {...register("password")} type="password" placeholder="Password" />
        
        <button type="submit">Add the User</button>
      </form>

      {/* ToastContainer for rendering Toastify notifications */}
      <ToastContainer />
    </>
  );
};
