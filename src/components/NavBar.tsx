function NavBar() {
  return (
    <nav className="py-[20px] px-[30px] bg-[#ffffff7c] shadow-sm">
      <div className="flex items-center justify-center gap-5 text-lg font-semibold uppercase grad-text max-w-max">
        <button className="text-teal px-[15px] py-[10px] bg-white rounded-[10px] ">
          LOGO
        </button>
        <p className="leading-5 text-grad">MY Project Dashboard</p>
      </div>
    </nav>
  );
}

export default NavBar;
