import { useEffect, useRef, useState } from "react";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [ users, setUsers ] = useState([]);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let user = getUsers();
    setUsers(user);
  }, [])

  function validate(name, email, password){
    if (name.trim().length > 3) {
      alert('name has an error');
      console.log(name);
    }

    if (email.value.trim().length < 3) {
      alert('email has an error');
      return false;
    }
  
    if (password < 0 && password > 3) {
      alert('password has an error')
      return false
    }

    return true
  }

  function getUsers() {
    let users = [];

    if (localStorage.getItem(users)) {
      users = JSON.parse(localStorage.setItem('users'))
    }

    return users
}

   
  function handleClick(e) {
    e.preventDefault();
    const isValid = validate(name, password);

    if (isValid) {
      const user = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }

      let copied = JSON.parse(JSON.stringify(users))
      copied.push(user);
      localStorage.setItem('users', JSON.stringify(copied));
      setUsers(copied)
      navigate('/login')
    }
    setTimeout(() => {
        toast.success('Welcome guest user');
    }, 100);
    
    nameRef.current.value = null;
    emailRef.current.value = null;
    passwordRef.current.value = null;
  }

  return (
    <>
    <ToastContainer />
      <div className="container w-3/5 mx-auto">
        <NavLink to='/' className="flex justify-start text-3xl mt-8"><IoReturnUpBackSharp></IoReturnUpBackSharp></NavLink>
        <div className="w-[385px] shadow-xl mx-auto mt-8 p-8 rounded-2xl">
          <h2 className="text-center font-bold text-3xl pb-6">Register</h2>
          <div className="flex flex-col gap-7">
          <label htmlFor="name" className="text-xs">
              <span className="pl-2">Username</span>
              <input ref={nameRef}
                type="text"
                className="input input-bordered mt-2 w-full max-w-xs"
                id="name"
              />
            </label>

            <label htmlFor="email" className="text-xs">
              <span className="pl-2">Email</span>
              <input ref={emailRef}
                type="email"
                className="input input-bordered mt-2 w-full max-w-xs"
                id="email"
              />
            </label>

            <label htmlFor="password" className="text-xs">
              <span className="pl-2">Password</span>
              <input ref={passwordRef}
                type="password"
                className="input input-bordered mt-1 w-full max-w-xs"
                id="password"
              />
            </label>
            <div className="flex flex-col gap-4 mt-2">
              <button onClick={handleClick} className="btn btn-info text-white">REGISTER</button>
            </div>
          </div>
            <div className="flex gap-3 items-center justify-center mt-5">
              <p className="text-sm">Already a member?</p>
              <NavLink to='/login' className='text-info text-sm hover:underline'>Login</NavLink>
            </div>
        </div>
      </div>
    </>
  );
}

export default Register;
