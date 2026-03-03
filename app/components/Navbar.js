export default function Navbar() {
  return (
    <nav className="bg-gray-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold">Mani Parts</h1>
        <ul className="flex space-x-6 text-sm md:text-base">
          <li className="hover:text-green-200 cursor-pointer">Home</li>
          <li className="hover:text-green-200 cursor-pointer">Products</li>
          <li className="hover:text-green-200 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  )
}