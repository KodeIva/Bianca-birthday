import Countdown from "./component/Countdown";

function App() {
 const birthday = new Date("Jun 22, 2023 14:03").getTime()
 console.log(birthday);


  return (
    <div className="flex flex-col justify-center items-center text-lg text-orange-400 font-bold w-full h-screen bg-pink-200">
     <h2 className=" m-3">Bianca's Birthday</h2>
     <Countdown birthday={birthday} />
    </div>
  );
}

export default App;
