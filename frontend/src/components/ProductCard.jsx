const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-white text-4xl font-bold">{product.name[0]}</span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
          {product.category && (
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {product.category}
            </span>
          )}
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
        {product.websiteUrl && (
          <a
            href={product.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
