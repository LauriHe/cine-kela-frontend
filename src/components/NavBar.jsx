function NavBar() {
  return (
    <div className="w-full h-full bg-oc-pastel-blue flex justify-between">
      <div id="logo" className="h-full flex justify-center p-2 cursor-pointer">
        <img src="./logo.png" className="h-16"></img>
        <div className="w-fit -rotate-90 text-[.7rem] font-bold text-white">Cinéma Kéla</div>
      </div>
      <div className="hidden h-full md:flex items-center gap-10 pr-4 text-white">
        <button className="h-fit">Home</button>
        <button className="h-fit">Stream</button>
        <button className="h-fit">Calendar</button>

        <button className="h-fit">Archive</button>
        <button className="h-fit">Tickets</button>
        <button className="h-fit">Info</button>
      </div>
    </div>
  );
}

export default NavBar;
