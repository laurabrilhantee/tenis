import { useState } from 'react'
import './App.css'
import Tenisnike from './assets/tenisdanike.webp'
import Tenisnike2 from './assets/tenis nike.jpeg'
import Tenisnike3 from './assets/tn.webp'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Tenisnike4 from './assets/ten.png'
import Tenisnike5 from './assets/prom.png'
import Tenisnike6 from './assets/nik6.png'
import Tenisnike7 from './assets/nik7.png'
import Logo from './assets/nlg.png'
import 'swiper/css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
      <header>    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false, 
            }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={Tenisnike4} alt="" className="img-prod" /></SwiperSlide>
      <SwiperSlide><img src={Tenisnike5} alt="" className="img-prod" /></SwiperSlide>
      <SwiperSlide><img src={Tenisnike6} alt="" className="img-prod" /></SwiperSlide>
      <SwiperSlide><img src={Tenisnike7} alt="" className="img-prod" /></SwiperSlide>
    </Swiper>
</header>
      <section className="produtos">

        {/*Produto 1 */}
        <a href="#" className="link-card">
          <div className="card">
          <img src={Tenisnike}alt="" className="img-prod" />
            <h2>Tênis Nike Air Force 1' 07 Lx Paw Print Rosa</h2>
            <p className="desc">O Air Force 1 Paw Print Rosa combina estilo urbano com estampas de patinhas, celebrando o amor pelos pets.</p>
            <p className="preco">R$ 1999,99</p>
          <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (472)</div>
          <div className="off">- 15%</div>
          </div>      
        </a>              

        {/*Produto 2 */}
        <a href="#" className="link-card">
          <div className="card">
          <img src={Tenisnike2}alt="" className="img-prod" />
            <h2>Tênis Nike Air Max AP Feminino</h2>
            <p className="desc">O Nike Air Max AP une estilo esportivo e moderno, com conforto, leveza e inspiração no Air Max 97.</p>
            <p className="preco">R$ 474,90</p>
          <div className="avaliacao"> <span>★ ★ ☆ ☆ ☆</span> (172)</div>
          <div className="off">- 15%</div>
          </div>      
        </a>              

        {/*Produto 3 */}
        <a href="#" className="link-card">
          <div className="card">
          <img src={Tenisnike3}alt="" className="img-prod" />
            <h2>Tênis Nike Revolution 7 Preto/Branco</h2>
            <p className="desc">O Nike Revolution é leve, confortável e ideal para o dia a dia, com amortecimento em espuma e design esportivo.</p>
            <p className="preco">R$ 399,90</p>
          <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (28)</div>
          <div className="off">- 15%</div>
          </div>      
        </a>                      
      </section>
       <section className="destaque">
          <iframe 
          width="100%" 
          height="315"
          src="https://www.youtube.com/embed/IqgBn7sT6vI?autoplay=1&mute=1&loop=1&playlist=IqgBn7sT6vI" 
          title="YouTube video player"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen>
        </iframe>
        </section>

        <footer>

         <img src={Logo} alt="" className="logo-footer" /> 

          <div className="social-icons">
            <div className="icon">
              <img src="" alt="" id="instagram" />
            </div>
            <div className="icon">
              <img src="" alt="" id="discord" />
            </div>
            <div className="icon">
              <img src="" alt="" id="x" />
            </div>
            <div className="icon">
              <img src="" alt="" id="youtube" />
            </div>
          </div>

        </footer>
      </main>
    </>
  )
}

export default App