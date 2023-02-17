const Notification = (props) => {
  //  Write your code here.
  const { className, name, imgSrc } = props;
  return (
    <div className={className}>
      <img src={imgSrc} className="imgSize" id="one" />
      <p>{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1>Notifications</h1>
    <div className="sm-cont">
      <Notification
        className="bg-container1"
        name="Information message"
        imgSrc="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="bg-container2"
        name="Success message"
        imgSrc="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="bg-container3"
        name="Warning message"
        imgSrc="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="bg-container4"
        name="Error message"
        imgSrc="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
