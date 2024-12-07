function NavBar() {
  return (
    <nav className="py-[20px] px-[30px] bg-[#ffffff7c] shadow-sm">
      <div className="grad-text flex justify-center items-center uppercase max-w-max gap-5 font-semibold text-lg">
        <button className="text-teal px-[7px] py-[14px] bg-white rounded-[10px] ">
          LOGO
        </button>
        <p className="text-grad  leading-5">Project Dashboard</p>
      </div>
    </nav>
  );
}

export default NavBar;
