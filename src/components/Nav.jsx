import Mode from "./Mode";
function Nav() {
  return (
    <nav className="flex justify-between py-4 dark:bg-dark-blue px-8 bg-white shadow-md lg:px-16">
      <h1 className="text-xl sm:text-2xl font-semibold dar:text-gray-300">
        Where in the world?
      </h1>
      <Mode />
    </nav>
  );
}
export default Nav;
