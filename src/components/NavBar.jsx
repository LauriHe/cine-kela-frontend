function NavBar() {
  return (
    <div className="w-full h-full bg-oc-pastel-blue flex justify-between">
      <div id="logo" className="h-full flex justify-center p-2 cursor-pointer">
        <img src="./Caplamme.png" className="h-16"></img>
        <div className="w-fit -rotate-90 text-[.7rem] font-bold text-white">Cinéma blué</div>
      </div>
      <div className="hidden h-full md:flex items-center gap-10 pr-4 text-white">
        <button className="h-fit">Stream</button>
        <button className="h-fit">Calendar</button>
        <button className="h-fit">Page3</button>
        <button className="h-fit">Page4</button>
        <button className="h-fit">Page5</button>
        <button className="h-fit">Page6</button>
      </div>
    </div>
  );
}

export default NavBar;
