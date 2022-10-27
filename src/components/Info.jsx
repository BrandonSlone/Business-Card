export default function Info() {
  return (
    <div className="grid-info">
      <img src="src/images/tubaPic(3).jpg"></img>
      <h1>Brandon Slone</h1>
      <h2>Tuba Player</h2>
      <h3>www.BrandonSloneTuba.com</h3>
      <div className="buttons">
        <button className="grid-email-button">
          <img src="src/images/Icon(3).png" className="email"></img>Email
        </button>
        <button className="grid-linkedin-button" onClick={()=> window.open('https://www.linkedin.com/','_blank')}>
          <img src="src/images/Vector.png" className="vector"></img>LinkedIn
        </button>
      </div>
    </div>
  );
}
