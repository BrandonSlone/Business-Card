export default function Info() {
  return (
    <div className="grid-info">
      <img src="/images/tubaPic(3).jpg"></img>
      <h1>Brandon Slone</h1>
      <h2>Tuba Player</h2>
      <h3></h3>
      <div className="buttons">
        <button className="grid-email-button">
          <img src="/images/Icon(3).png" className="email"></img>Email
        </button>
        <button className="grid-resume-button" onClick={()=> window.open('C:\Users\Twili\Coding\React Business Card\public\Brandon_Slone_-_Tuba_Player.pdf','_blank')}>
          <img src="/images/Vector.png" className="vector"></img>Resume
        </button>
      </div>
    </div>
  );
}
