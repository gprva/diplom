import "./Home.css";
import photo1 from "../../img/gadzhet.jpg"
import laptop from "../../img/laptop-fr.jpeg"
import smartwatches from "../../img/smartwatched.jpg"
import headphones from "../../img/zakrytye.jpg"
import phone from "../../img/phone.jpg"
import slideImg from "../../img/iphoneNew1.avif"
import slideImg2 from "../../img/iphoneNew2.avif"
import slideImg3 from "../../img/iphoneNew3.avif"
import { Link } from "react-router-dom";

function Home() {
  


  return (
    <>
    <section>
      <div className="container">
          <div class="hover-text-one">
            <figure class="effect-text-three">
              <img src={photo1} alt=""/>
              <figcaption>
                  <h3>Gadgets  are</h3>
                  <p>Gadgets are a bridge between reality and the world of the future, the embodiment of humanity’s dream of conquering time and space.</p>
                </figcaption>			
            </figure>
          </div>
      </div>
    </section>

    <section>
      <div className="container">
        <h2 className="home_tit">Top selling</h2>

        <div className="selling_cards flex">

          <div class="hover-text-one">
            <figure class="effect-text-four">
              <img className="home_css_img" src={laptop} alt=""/>
                <figcaption>
            <h3>Laptop</h3>
            <p>A laptop is a window to a world of limitless possibilities. Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ipsum natus eveniet! Reprehenderit ab, id unde, saepe sequi fugit dicta quos, doloremque veniam similique laboriosam enim quo. Deserunt, reiciendis facilis</p>
            <Link to="/categories/laptop" className="home_btn">shop</Link>
                </figcaption>			
            </figure>
          </div>

          <div class="hover-text-one">
            <figure class="effect-text-four">
              <img className="home_img2" src={smartwatches} alt=""/>
                <figcaption>
            <h3>Smartwatches</h3>
            <p className="selling_min_txt">"Smartwatches are not just an accessory but a technological companion that combines style and functionality on your wrist."Smartwatches are style and intelligence in one device."Smartwatches are style and intelligence in one device."Smartwatches are style and intelligence in one device</p>
            
            <Link to="/categories/watch	" className="home_btn">shop</Link>
                </figcaption>		
            </figure>

           
          </div>

        </div>

        <div className="selling_cardss  flex">

          <div class="hover-text-one">
            <figure class="effect-text-four">
              <img className="home_css_img" src={headphones} alt=""/>
                <figcaption>
            <h3>Headphones</h3>
            <p>"Headphones are a portal to the world of sound, where every note comes to life, immersing you in a musical universe. "Headphones are a portal to the world of sound, where every note comes to life, immersing you in a musical universe." "Headphones are a portal to the world of sound"</p>
            <Link to="/categories/headphones" className="home_btn">shop</Link>
                </figcaption>			
            </figure>
          </div>

          <div class="hover-text-one">
            <figure class="effect-text-four">
              <img className="home_img2" src={phone} alt=""/>
                <figcaption>
            <h3>Phone</h3>
            <p className="selling_min_txt">"A phone is not just a means of communication, but a key to an infinite world of possibilities that fits in your pocket.""A phone is not just a means of communication, but a key to an infinite world of possibilities that fits in your pocket.""A phone is not just a means of communication</p>	
            
            <Link to="/categories/smartphone" className="home_btn">shop</Link>
                </figcaption>		
            </figure>

           
          </div>

        </div>

      </div>
    </section>
      

    <section className="home_body">
      <div className="container">

      <h2 className="home_tit">New arrival</h2>

      <div className="container_h">
      
      <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                      <img className="animation_img" src={slideImg} alt="" />
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Apple iPhone 14 128GB 2 nanoSIM Purple Smartphone.</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                      <img className="animation_img" src={slideImg2} alt="" />
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                
                    <p>Apple iPhone 15 128GB 2 nanoSIM Purple Smartphone</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                      <img className="animation_img" src={slideImg3} alt="" />
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Apple iPhone 15 256GB 2 nanoSIM Purple Smartphone</p>
                </div>
            </div>
        </div>

      </div>

      </div>
    </section>
      
    </>
  );
}

export default Home;