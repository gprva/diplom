import './About.css'

function About() {
  return ( 

    <>
    <section className="About_main">
        <div className="container">
          <h2 className="about_tit">About Store</h2>

          <p className="about_info">Our store began its existence on November 16, 2009.</p> 

          <p className="about_txt">Let's start first of all by explaining what a Gadget is and what does it mean?</p>

          <p className="about_txt"> <b>Gadget</b> (English gadget - device) is an original, non-standard technical device. Today, a gadget can be considered any digital device small enough to be worn on your hand or connected to PDAs or smartphones. On this site we will try to introduce you in detail to some examples of Gadgets. And you can even purchase some things from us in the Gadget Store. I can promise that most of these things will be exclusive, I'm sure most of you have never even heard of them. Or maybe you heard it. But I assure you, we will try to surprise you with such exclusive Gadgets every day.</p>

          <p className="about_txt about_txt_2">It’s already the 21st century and what we see: A watch with a built-in video camera and a Cell phone, a Smart robot vacuum cleaner that can easily clean up your desktop after you (crumbs, dust, etc.), A robot alarm clock that can wake you up early in the morning and run away far away from you so that you can wake up, Various devices that translate the incomprehensible barking of a dog or the cry of a child into a language you understand - And there are so many such Gadgets. And again, we will try to tell you about them in detail, and we will try to post more popular models in our Gadget Store....

          Welcome to our store!</p>
        </div>
    </section>

    <section>
      <div className="container">

        <div className="about_img flex">
          <ul class="press">
            <li class="press-item"></li>
            <li class="press-item"></li>
            <li class="press-item"></li>
            <li class="press-item"></li>
          </ul>

        <div className="about_fon_all_txt">
          <p className="about_info about_fon_txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quasi facere officiis numquam quae iste voluptatem omnis ut dignissimos hic dolore ipsam, earum repudiandae architecto dolor distinctio nemo saepe! Nisi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam saepe quibusdam maiores repellendus et aspernatur veritatis natus? Vero doloremque maxime, cum quasi saepe eaque sint, doloribus excepturi possimus, sit corrupti.</p>
        </div>

        </div>

      </div>
    </section>

    <section>
      <div className="container">
        <h2 className="about_tit">The creators of this company</h2>

        <div className="about_creators flex">

        <div class="image-parlax" ontouchstart="this.classList.toggle('hover');">
          <div class="image-container">
             <div class="front-side about_me" >
              <div class="inner">
                <p>Gaparova Lola</p>
                <span>01.06.2008</span>
              </div>
              </div>
              <div class="back-side">
              <div class="inner">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend cursus leo, at fringilla dui mollis.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="image-parlax" ontouchstart="this.classList.toggle('hover');">
          <div class="image-container">
             <div class="front-side about_br" >
              <div class="inner">
                <p>Gaparov Aziz</p>
                <span>03.24.2005</span>
              </div>
              </div>
              <div class="back-side">
              <div class="inner">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend cursus leo, at fringilla dui mollis.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="image-parlax" ontouchstart="this.classList.toggle('hover');">
          <div class="image-container">
             <div class="front-side about_br2" >
              <div class="inner">
                <p>Kayipbekov Alibek</p>
                <span>01.14.2005</span>
              </div>
              </div>
              <div class="back-side">
              <div class="inner">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend cursus leo, at fringilla dui mollis.</p>
              </div>
            </div>
          </div>
        </div>
      

        </div>
      </div>
    </section>

    </>
  );
}

export default About;