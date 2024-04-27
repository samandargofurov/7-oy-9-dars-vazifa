function Login() {
  return (
    <>
      <div className="container w-3/5 mx-auto">
        <div className="w-[384px] shadow-xl mx-auto mt-10 p-10">
          <h2 className="text-center font-bold text-4xl pb-10">Login</h2>
          <label htmlFor="email">
            Email
            <input type="email" placeholder="Type here" className="input input-bordered mt-1 w-full max-w-xs" id="email" />
          </label>
        </div>
      </div>
    </>
  )
}

export default Login