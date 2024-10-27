function Registration() {
  return (
    <section className="justify-center">
      <section className="gap-7 p-4 mb-7-">
        <p className="text-xl text-blue-800">Register Student</p>
        <p className="h-[10vh]">
          <label>Name:</label> <br />
          <input
            type="text"
            className="w-[220px] h-[16px] border-gray-700 border-2"
            placeholder="Enter Name"
          />
        </p>
        <p className="h-[10vh]">
          <label>Password:</label>
          <br />
          <input
            type="text"
            className="w-[220px] h-[16px] border-gray-700 border-2"
            placeholder="Enter Password"
          />
        </p>
        <p className="h-[10vh]">
          <label>Address:</label>
          <br />
          <input
            type="text"
            className="w-[220px] h-[16px] border-gray-700 border-2"
            placeholder="Enter Name"
          />
        </p>
        <p className="h-[10vh]">
          <label>Parent Phone Number:</label>
          <br />
          <input
            type="text"
            className="w-[220px] h-[16px] border-gray-700 border-2"
            placeholder="Enter Password"
          />
        </p>
        <button className="w-[70px] text-2xl bg-blue-800 rounded-3xl m-3 text-center text-neutral-50 border-gray-700 border-2 text-[14px]">
          Submit
        </button>
      </section>
    </section>
  );
}
export default Registration;
