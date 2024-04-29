function Cart() {

  return (
    <>
      <div className="container w-3/4 mx-auto">
        <div className="flex flex-col gap-5 ">
          <h1 className="text-netural opacity-80 mt-[55px] text-3xl">
            Shooping Cart
          </h1>
          <hr />
        </div>

        <div className="flex gap-6">
          <div className="porduct-info">
            <div className="flex justify-between bg-black">
              <img src="" alt="product info" />
              <div className="">
                <p className="title">chic chair</p>
                <p>Luxora</p>
                <p className="">Color: <span className=""></span></p>
              </div>
              <div>
                <select className="select border-b-2" name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                </select>
                <div>remove</div>
              </div>
              <p>$873874</p>
            </div>
          </div>

          <div className="total-price">
            <div>
              <div className="bg-blue-300 w-72 h-60">
                <p className="flex justify-between">sfdvo<span>325</span></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Cart;
