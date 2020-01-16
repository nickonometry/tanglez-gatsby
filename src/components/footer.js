import React from "react"

//Featured Companies
import afropunk from "../images/afropunk.png"
import creativeBoom from "../images/creative-boom.png"
import vogue from "../images/vogue.png"
import wgsn from "../images/wgsn.png"

// Socials
import facebook from "../images/facebook.png"

const featured = [
  { name: "CreativeBoom", image: creativeBoom },
  { name: "Afropunk", image: afropunk },
  { name: "WGSN", image: wgsn },
  { name: "Vogue", image: vogue },
]

const Footer = () => {
  return (
    <footer>
      <div className="featured-companies">
        <div className="container">
          <ul>
            {featured.map(({ name, image }) => (
              <li key={name}>
                <img src={image} alt={name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="inner">
          <span>© 2019 Tanglez Hair Salon</span>
          <div className="socials">
            <a href="/">
              <img src={facebook} alt="Instagram" />
            </a>
          </div>
          <span>cathya@tanglezofsaco.com</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
