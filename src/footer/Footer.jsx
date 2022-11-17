import "./footer.css";
import logoSV from "../img/logoSVgray.png"

export default function footer() {
  return (
    <div className='footer'>
      
        <div className="footerCenter">
          <img src={logoSV} alt="" />
          <i className="footerListTitle">Sunnyvale Subdivision</i>
          
            
        </div>
        <ul className="footerList">
                <li className="footerListItem">ABOUT</li>
                <li className="footerListItem">CONTACT</li>
                <li className="footerListItem">PRIVACY</li>
                <li className="footerListItem">DEVELOPERS</li>
        </ul>
    </div>
  )
}
