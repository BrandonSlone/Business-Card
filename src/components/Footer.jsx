
export default function Footer() {
  return (
    <div className="footer">
      <img src="./src/images/Facebook Icon.png" className="social-icons" onClick={() => window.open('https://www.facebook.com/', '_blank')} />
      <img src="./src/images/GitHub Icon.png" className="social-icons" onClick={()=> window.open('https://github.com/','_blank')}></img>
      <img src="./src/images/Instagram Icon.png" className="social-icons" onClick={()=> window.open('https://www.instagram.com/','_blank')} ></img>
      <img src="./src/images/Twitter Icon.png" className="social-icons" onClick={()=> window.open('https://twitter.com/?lang=en','_blank')}></img>
    </div>
  );
}
