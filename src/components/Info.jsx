export default function Info() {
  return (
    <div className="grid-info">
      <img src="/images/tubaPic(3).jpg"></img>
      <h1>Brandon Slone</h1>
      <h2>Tuba Player</h2>
      <h3></h3>
      <div className="buttons">
        <button className="grid-email-button" onClick={() => window.location = 'mailto:brandonslone1290@gmail.com'}>
          <img src="/images/Icon(3).png" className="email"></img>Email
        </button>
        <button className="grid-resume-button" onClick={()=> window.open('/images/BrandonTuba.pdf','_blank')}>
          Resume
        </button>
      </div>
    </div>
  );
}
