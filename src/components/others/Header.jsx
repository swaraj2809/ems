const Header = ({ data }) => {
  return (
    <div className="flex items-end justify-between py-5 text-white">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {data.email === "admin@example.com" ? "Admin" : data.firstName}👀
        </span>
      </h1>
      <button className="bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium">
        Logout
      </button>
    </div>
  );
};

export default Header;
