export default function Parts() {
  const computerParts = [
    {
      name: 'Intel Core i5-12400F',
      description: '6-core CPU perfect for gaming and office use.',
      image: '/images/MOM.png',
    },
    {
      name: 'NVIDIA RTX 3060',
      description: 'Powerful graphics card for smooth performance.',
      image: '/images/Style.png',
    },
    {
      name: 'ASUS TUF B660 Motherboard',
      description: 'Durable motherboard with great compatibility.',
image: '/images/ram.jpg',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {computerParts.map((part, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
          <img
            src={part.image}
            alt={part.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-lg font-semibold text-green-700 mt-3">{part.name}</h2>
          <p className="text-gray-700 text-sm mt-2">{part.description}</p>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}