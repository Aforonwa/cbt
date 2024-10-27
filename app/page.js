import Useraccess from "./components/Useraccess";
import Exampage from "./components/Exampage";

export default function Home() {
  return (
    <main className="h-[100vh] flex bg-slate-500">
      <div className="h-[100vh] w-[25vw]  bg-slate-100">
        <Useraccess />
      </div>
      <div className=" h-[100vh] w-[75vw] bg-blue-700">
        <Exampage />
      </div>
    </main>
  );
}
