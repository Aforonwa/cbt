import Questions from "./components/Questions";
import Registration from "./components/Registration";

export default function Home() {
  return (
    <main className="h-[100vh] w-[100vw] flex bg-slate-500">
      <div className="h-[100vh] w-[25vw]  bg-slate-100">
        <Registration />
      </div>
      <div className=" h-[100vh] w-[75vw] bg-blue-700">
        <Questions />
      </div>
    </main>
  );
}
