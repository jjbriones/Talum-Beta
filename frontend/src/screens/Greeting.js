function Greeting() {
  return (
    <section className="header">
      <nav>
        <a href="/">
          <img src="/" alt="#" />
        </a>
        <div className="nav-links" id="navLinks"></div>
      </nav>
      <div className="textbox">
        <h1>Welcome to Talum!</h1>
        <p>The best Partner for Chefs</p>
        <a href="#featuredProducts" className="button">
          See all Talum Products
        </a>
      </div>
    </section>
  );
}

export default Greeting;
