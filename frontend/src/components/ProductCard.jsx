const ProductCard = ({ product }) => {
  return (
    <div className="group glass card-hover rounded-2xl overflow-hidden border border-white/5">
      {/* Image/Header */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-gaming text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:neon-text transition-all duration-300">
              {product.name[0]}
            </span>
          </div>
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60"></div>
        
        {/* Scan line effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-pulse"></div>
        </div>
        
        {/* Corner decorations */}
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-cyan-500/50 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-purple-500/50 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="p-6 relative">
        {/* Category badge */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-gaming text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {product.name}
          </h3>
          {product.category && (
            <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full">
              {product.category}
            </span>
          )}
        </div>
        
        <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
          {product.description}
        </p>
        
        {product.websiteUrl && (
          <a
            href={product.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 rounded-lg text-cyan-400 font-medium text-sm uppercase tracking-wider hover:border-cyan-400 transition-all duration-300 group/btn"
          >
            <span>Launch</span>
            <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        )}
        
        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default ProductCard;
