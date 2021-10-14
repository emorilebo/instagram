function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px] mt-14 ml-10"
        src="emori.jpeg"
        alt=""
      />
      <div>
        <h2>Emori</h2>
        <h3>Welcome to Instagram</h3>
      </div>
      <button>Sign Out</button>
    </div>
  );
}

export default MiniProfile;
