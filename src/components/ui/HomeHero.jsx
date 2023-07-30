const HomeHero = () => {
  return (
    <div>
      <div
        className="hero h-screen"
        style={{
          height: "44vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1618764400608-9e7115eede74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary btn-outline">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
