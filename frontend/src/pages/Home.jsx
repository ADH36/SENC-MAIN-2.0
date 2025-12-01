import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { productsAPI } from '../services/api';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await productsAPI.getAll();
      setFeaturedProducts(response.data.slice(0, 3));
    } catch (error) {
      console.error('Failed to load products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Particle animation component
  const Particles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        <Particles />
        
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-slide-up">
            {/* Glitch title effect */}
            <h1 className="font-gaming text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                SENC
              </span>
              <br />
              <span className="text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">ESPORTS, AI AND INNOVATION</span>
              </span>
            </h1>
          </div>
          
          <p className="animate-slide-up delay-200 text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Elevate your gaming experience with cutting-edge technology.
            <span className="text-cyan-400"> Power</span>,
            <span className="text-purple-400"> Performance</span>,
            <span className="text-pink-400"> Precision</span>.
          </p>
          
          <div className="animate-slide-up delay-300 flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/products"
              className="cyber-button px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-gaming font-semibold text-white uppercase tracking-wider hover:shadow-cyan-500/25 hover:shadow-2xl transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                Explore Products
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              to="/contact"
              className="cyber-button px-10 py-4 glass border border-cyan-500/50 rounded-lg font-gaming font-semibold text-cyan-400 uppercase tracking-wider hover:border-cyan-400 hover:shadow-cyan-500/25 hover:shadow-lg transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Grid lines decoration */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-gaming text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">SENC</span>?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: 'Single Sign-On',
                description: 'Unified authentication across our entire gaming ecosystem. One login, unlimited access.',
                color: 'cyan'
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                title: 'Unified Portfolio',
                description: 'Browse our complete suite of gaming and esports products in one centralized hub.',
                color: 'purple'
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Lightning Fast',
                description: 'Optimized performance with seamless integration. Built for speed, designed for gamers.',
                color: 'pink'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group glass card-hover p-8 rounded-2xl border border-white/5 text-center"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-xl bg-gradient-to-br from-${feature.color}-500/20 to-${feature.color}-500/5 border border-${feature.color}-500/30 flex items-center justify-center text-${feature.color}-400 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="font-gaming text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-1/2 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-purple-500/30 to-transparent"></div>
      </section>

      {/* Featured Products Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 glass rounded-full text-cyan-400 text-sm font-medium uppercase tracking-wider mb-6 border border-cyan-500/30">
              Our Arsenal
            </span>
            <h2 className="font-gaming text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Products
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Cutting-edge solutions trusted by gamers and esports professionals worldwide.
            </p>
          </div>
          
          {loading ? (
            <div className="text-center py-20">
              <div className="relative inline-block">
                <div className="w-16 h-16 rounded-full loader-cyber"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-cyan-400 text-xs font-gaming">LOADING</span>
                </div>
              </div>
            </div>
          ) : featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <div
                  key={product.uuid}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 glass rounded-2xl border border-white/5">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <p className="text-gray-400 text-lg">Products loading soon. Stay tuned!</p>
            </div>
          )}
          
          <div className="text-center mt-16">
            <Link
              to="/products"
              className="cyber-button inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 rounded-lg text-cyan-400 font-gaming font-semibold uppercase tracking-wider hover:border-cyan-400 hover:shadow-cyan-500/25 hover:shadow-lg transition-all duration-300"
            >
              View All Products
              <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl border border-white/5 p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '10K+', label: 'Active Users', color: 'cyan' },
                { value: '50+', label: 'Products', color: 'purple' },
                { value: '99.9%', label: 'Uptime', color: 'green' },
                { value: '24/7', label: 'Support', color: 'pink' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`font-gaming text-4xl md:text-5xl font-bold text-${stat.color}-400 mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 uppercase tracking-wider text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-gaming text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Level Up</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of gamers and esports professionals who trust SENC for their competitive edge.
          </p>
          <Link
            to="/register"
            className="cyber-button inline-flex items-center px-12 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-gaming font-bold text-lg text-white uppercase tracking-wider hover:shadow-cyan-500/30 hover:shadow-2xl transition-all duration-300 animate-pulse-glow"
          >
            <span>Create Free Account</span>
            <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

export default Home;
