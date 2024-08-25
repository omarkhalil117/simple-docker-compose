import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';



function Form() {

  const isAdult = (num) => num > 18 ;

  const schema = Yup.object({
  firstName: Yup.string()
    .min(3, 'First Name must be at least 3 characters long.')
    .max(20, 'First Name can be at most 20 characters long.')
    .required('First Name is required.'),

  lastName: Yup.string()
    .min(3, 'First Name must be at least 3 characters long.')
    .max(20, 'First Name can be at most 20 characters long.')
    .required('First Name is required.'),

  email: Yup.string().email('Email is not valid').required(),

  age: Yup.number()
    .typeError('Age must be a number')
    .required('Please Enter your Age.')
    .positive('Age must be a positive number.')
    .integer('Age must be an integer.')
    .test('is-adult', 'Age must be older than 18' , val => isAdult(val))
  });


  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input {...register("firstName")} />
        <p className="text-danger">{errors.firstName?.message}</p>
      </div>

      <div>
        <label>Last Name</label>
        <input {...register("lastName")} />
        <p className="text-danger">{errors.lastName?.message}</p>
      </div>

      <div>
        <label>Email</label>
        <input {...register("email")} />
        <p className="text-danger">{errors.email?.message}</p>
      </div>

      <div>
        <label>Age</label>
        <input {...register("age")} />
        <p className="text-danger">{errors.age?.message}</p>
      </div>

      <button type="submit" >Submit</button>
    </form>
  );
}

export default Form;

