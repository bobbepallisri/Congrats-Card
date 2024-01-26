const element = (
  // Write your code here.
  <div className="container">
    <h1 className="heading">Congratulations</h1>
    <div className="cardConatiner">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image1"
      />
      <h1 className="heading2">kiran v</h1>
      <p className="pargraph">
        vishnu institue of computers education and technology bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image2"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
