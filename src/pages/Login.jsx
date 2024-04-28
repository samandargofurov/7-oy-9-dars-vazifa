import { IoReturnUpBackSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container w-3/5 mx-auto">
        <NavLink to='/' className="flex justify-start text-3xl mt-10"><IoReturnUpBackSharp></IoReturnUpBackSharp></NavLink>
        <div className="w-[385px] shadow-xl mx-auto mt-8 p-8 rounded-2xl">
          <h2 className="text-center font-bold text-3xl pb-6">Login</h2>
          <div className="flex flex-col gap-7">
            <label htmlFor="email" className="text-xs">
              <span className="pl-2">Email</span>
              <input
                type="email"
                className="input input-bordered mt-2 w-full max-w-xs"
                id="email"
              />
            </label>

            <label htmlFor="password" className="text-xs">
              <span className="pl-2">Password</span>
              <input
                type="password"
                className="input input-bordered mt-1 w-full max-w-xs"
                id="password"
              />
            </label>
            <div className="flex flex-col gap-4 mt-2">
              <button className="btn btn-info text-white ">LOGIN</button>
              <button className="btn btn-primary">GUST USER</button>
            </div>
          </div>
            <div className="flex gap-3 items-center justify-center mt-5">
              <p className="text-sm">Not a member yet?</p>
              <NavLink to='/register' className='text-info text-sm hover:underline'>Register</NavLink>
            </div>
        </div>
      </div>
    </>
  );
}

export default Login;
