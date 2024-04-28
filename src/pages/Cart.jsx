import { useNavigate } from "react-router-dom";

function Cart() {

  const navigate = useNavigate();

  function handleLogin() {
    navigate('/login')
  }

  return (
    <>
      <div className="container w-3/4 mx-auto">
        <div className="flex flex-col gap-5 ">
          <h1 className="text-netural opacity-80 mt-[55px] text-3xl">
            Shooping Cart
          </h1>
          <hr />
        </div>

        <div>
            <div className="flex">
              {/* card info */}
              <div className="flex justify-between">
                <div className="card-info flex gap-20">
                  <p className="w-36 h-36 rounded-2xl bg-gray-700"></p>
                  <div className="flex flex-col gap-4">
                    <p className="name font-bold opacity-75">Chic Chair</p>
                    <p className="type opacity-25 text-sm font-bold">Luxora</p>
                    <p className="flex items-center text-sm gap-2">
                      Color:
                      <span className="color w-4 h-4 rounded-full block bg-red-700"></span>
                    </p>
                  </div>
                </div>

                <div className="card-count flex flex-col gap-4">
                  <label htmlFor="amount" className="flex flex-col gap-2">
                    Amount
                    <select
                      className="select select-bordered text-black select-xs"
                      id="amount"
                    >
                      <option value="1" selected>
                        1
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </select>
                  </label>
                  <div className="remove hover:underline text-info text-sm cursor-pointer">
                    remove
                  </div>
                </div>

                <p className="old-cost flex">$179.99</p>
              </div>
              {/* total cost card */}
              <div className="flex justify-end">
              <div className="flex flex-col gap-5">
              <div className="card-total-cost flex flex-col gap-5 w-[280px] bg-[#F0F6FF] rounded-xl p-7">
                <p className="flex justify-between text-xs border-b-[1px] pb-2">
                  Subtotal
                  <span>$959.96</span>
                </p>
                <p className="flex justify-between text-xs border-b-[1px] pb-2">
                  Shipping
                  <span>$5.00</span>
                </p>
                <p className="flex justify-between text-xs border-b-[1px] pb-2">
                  Tax
                  <span>$96.00</span>
                </p>
                <p className="flex justify-between text-sm pt-6">
                  Order Total
                  <span>$1,060.96</span>
                </p>
              </div>
              <button onClick={handleLogin} className="btn btn-info w-[280px] text-white">
                PLEASE LOGIN
              </button>
            </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Cart;
