import Image from "next/image";
import Parts from "./components/Parts";

export default function Home() {
  return (
    <div>
      {/* Header Section with Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-3 sm:mb-0">
          Welcome to Mani Computer Parts 💻
        </h1>

        {/* 👉 Button that links to your personal page */}
        <a
          href="https://basic-restroinvoice-git-main-m-ts-projects-aa32fb71.vercel.app/" // 👈 Replace this link
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-200"
        >
          Visit My Profile
        </a>
      </div>

      <p className="text-gray-700 mb-6">
        Explore our collection of high-quality computer components.
      </p>

      {/* Parts Cards Section */}
      <Parts />
    </div>
  )
}