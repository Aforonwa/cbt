function Questions() {
  return (
    <div className="w-full">
      <label className="ml-7 mt-7 text-white">SET EXAM</label>
      <section className="w-full m-[24px]">
        <textarea className="h-[40vh] w-[80vh]"></textarea>
      </section>
      <section className="ml-7 mt-7">
        <h3>Select correct option</h3>
        <p>
          <input type="radio" name="topping" value="Regular" id="regular" />
          <label htmlFor="regular" className="p-2">
            A
          </label>
          <input type="text" className="h-[20px] w-[800px] pr-10" />
        </p>
        <p className="mt-4">
          <input type="radio" name="topping" value="Medium" id="medium" />
          <label htmlFor="medium" className="p-2">
            B
          </label>
          <input type="text" className="h-[20px] w-[800px] pr-10" />
        </p>
        <p className="mt-4">
          <input type="radio" name="topping" value="Large" id="large" />
          <label htmlFor="large" className="p-2">
            C
          </label>
          <input type="text" className="h-[20px] w-[800px] pr-10" />
        </p>

        <p className="mt-4">
          <input type="radio" name="topping" value="xLarge" id="xlarge" />
          <label htmlFor="large" className="p-2">
            D
          </label>
          <input type="text" className="h-[20px] w-[800px] pr-10" />
        </p>
      </section>
      <section className="flex justify-between m-2">
        <button className="w-[70px] text-2xl bg-slate-400 rounded-3xl m-3 text-center border-gray-700 border-2 text-[14px]">
          previous
        </button>
        <button className="w-[70px] text-2xl bg-slate-400 rounded-3xl m-3 text-center border-gray-700 border-2 text-[14px]">
          Next
        </button>
        <button className="w-[70px] text-2xl bg-slate-400 rounded-3xl m-3 text-center border-gray-700 border-2 text-[14px]">
          Submit
        </button>
      </section>
    </div>
  );
}
export default Questions;
