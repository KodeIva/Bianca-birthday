
function App() {
 const birthday = new Date("Jun 14, 2023 10:15").getTime()
 console.log(birthday);


  return (
    <div className="flex flex-col justify-center items-center text-orange-400 font-bold w-full h-screen bg-pink-200">
     <h2>Bianca's Birthday</h2>
    </div>
  );
}

export default App;
