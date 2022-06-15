import MailIcon from './images/Mail.png'
import LinkedInIcon from './images/Vector.png'
import TwitterIcon from './images/Twitter-Icon.png'
import FacebookIcon from './images/Facebook-Icon.png'
import InstagramIcon from './images/Instagram-Icon.png'
import GitHubIcon from './images/GitHub-Icon.png'

export default function Container() {
    return (
      <div className="Container">
        <img className="headshot" src="https://c.pxhere.com/photos/31/11/dog_nose_snout_animal_head_eyes_pet_close-1391282.jpg!d" alt="dog" />
        <h1 className="title-name">Dennis Diaz</h1>
        <h2 className="title-desc">Web Developer</h2>
        <a href="https://sa1z.github.io/personal-site/" className="site-link">Dennis's Site</a>
        <div className="btn">
          <button className="email"><img src={MailIcon} alt="" /> Email</button>
          <button className="linkedin"><img src={LinkedInIcon} alt="" /> LinkedIn</button>
        </div>
        <div className="about">
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis reprehenderit natus quas harum cumque, facere, consequatur reiciendis nobis, voluptates corrupti distinctio iure perspiciatis! Corporis consequatur totam fugiat, dolores autem dolore.</p>
        </div>
        <div className="interests">
          <h2>Interests</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam mollitia dolorem reiciendis laudantium tempore atque earum nulla nostrum quae fugit? Similique dolorum fuga exercitationem perferendis expedita, omnis labore quis facere?</p>
        </div>
        <div className="social-links">
          <a href="#" target="_blank"><img src={TwitterIcon} alt="Twitter" /></a>
          <a href="#" target="_blank"><img src={FacebookIcon} alt="Facebook" /></a>
          <a href="#" target="_blank"><img src={InstagramIcon} alt="Instagram" /></a>
          <a href="#" target="_blank"><img src={GitHubIcon} alt="Github" /></a>
        </div>
      </div>
    )
  }
