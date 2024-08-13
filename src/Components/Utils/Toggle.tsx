const Toggle = () => {
  const toggleMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <label className="mt-2 ml-2 relative w-12 h-6 inline-block bg-slate-500 dark:bg-slate-300 rounded-2xl text-xl">
      <input
        type="checkbox"
        className="opacity-0 absolute checked:bg-blue-200"
        onClick={toggleMode}
      />
      <div className="h-6 w-6 rounded-full bg-stone-100 dark:bg-black transition-all duration-300"></div>
    </label>
  );
};

export default Toggle;
