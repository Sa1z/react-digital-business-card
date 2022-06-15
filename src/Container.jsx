

export default function Container() {
    return (
      <div className="Container">
        <img className="headshot" src="https://c.pxhere.com/photos/31/11/dog_nose_snout_animal_head_eyes_pet_close-1391282.jpg!d" alt="dog" />
        <h1 className="title-name">Dennis Diaz</h1>
        <h2 className="title-desc">Web Developer</h2>
        <a href="https://sa1z.github.io/personal-site/" className="site-link">Dennis's Site</a>
        <div className="btn">
          <button className="email"><img src="../images/Mail.png" alt="" /> Email</button>
          <button className="linkedin"><img src="../images/Vector.png" alt="" /> LinkedIn</button>
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
          <a href="https://twitter.com/"><img src="../images/Twitter-Icon.png" alt="Twitter" /></a>
          <a href="#"><img src="../images/Facebook-Icon.png" alt="Facebook" /></a>
          <a href="#"><img src="../images/Instagram-Icon.png" alt="Instagram" /></a>
          <a href="#"><img src="../images/GitHub-Icon.png" alt="Github" /></a>
        </div>
      </div>
    )
  }
