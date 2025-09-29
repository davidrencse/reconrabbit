const ProductsPage = () => {
    return (
      <div className="min-h-screen bg-black text-white p-10 font-sans">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Company</h1>
          <p className="text-lg leading-relaxed text-gray-300">
            Linear is bringing magic back to software. What started as a simple
            issue tracker has evolved into a powerful platform used by startups
            and public companies alike. Our mission is to build tools that help
            teams focus on creating great products, not fighting their tools.
          </p>
  
          <div className="mt-8">
            <img
              src="https://linear.app/_next/image?url=%2Fimages%2Ffounders.jpg&w=640&q=75"
              alt="Linear Founders"
              className="rounded-xl shadow-lg"
            />
            <p className="text-sm text-gray-500 mt-2">
              Linear co-founders: Jori Lallo, Karri Saarinen, and Tuomas Artman
            </p>
          </div>
        </section>
      </div>
    );
  };
  
  export default ProductsPage;
  