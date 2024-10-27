import Link from "next/link";
function Useraccess() {
  return (
    <section className="justify-center">
      <section className="gap-7 p-4 mb-7-">
        <nav>
          <Link href="about">About</Link>
        </nav>
        <h3>Staff Login</h3>
        <p>
          <label>Name:</label>
          <input
            type="text"
            className="w-[220px] h-[16px] border-gray-700 border-2"
            placeholder="Enter Name"
          />
        </p>
        <p>
          <label>Password:</label>
          <input
            type="text"
            className="w-[200px] h-[16px] border-gray-700 border-2"
            placeholder="Enter Password"
          />
        </p>
        <button className="w-[70px] text-2xl bg-blue-800 rounded-3xl m-3 text-center text-neutral-50 border-gray-700 border-2 text-[14px]">
          Login
        </button>
      </section>
      <section className="gap-7 p-4 mb-7-">
        <h3>Student Login</h3>
        <p>
          <label>Name:</label>
          <input
            type="text"
            className="w-[220px] h-[16px] border-gray-700 border-2"
            placeholder="Enter Name"
          />
        </p>
        <p>
          <label>Password:</label>
          <input
            type="text"
            className="w-[200px] h-[16px] border-gray-700 border-2"
            placeholder="Enter Password"
          />
        </p>
        <button className="w-[70px] text-2xl bg-blue-800 rounded-3xl m-3 text-center text-neutral-50 border-gray-700 border-2 text-[14px]">
          Login
        </button>
      </section>
    </section>
  );
}
export default Useraccess;
