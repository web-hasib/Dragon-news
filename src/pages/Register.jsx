import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
  const {createUser,setUser} =use(AuthContext)



  const handleRegister = (e)=>{
    e.preventDefault()
    const form= e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log('clicked',name,image,email,password);
    createUser(email,password).then((res)=>{
      // console.log(res.user);
      setUser(res.user)
    }).catch((error)=>{
      alert(error.message);
    })

  }
    return (
        <div className="flex justify-center min-h-10/12 items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-semibold text-2xl text-center py-5">
          Register your Account
        </h2>

        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Your Name"
              required
              />
              {/* img url  */}
            <label className="label">Photo URL</label>
            <input
              name="image"
              type="text"
              className="input"
              placeholder="Image URL"
              required
              />
              {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
          <p className="py-3 text-sm font-semibold text-accent text-center">
        Already have an account ?{" "}
            <Link to="/auth/login" className="text-blue-500 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
    );
};

export default Register;