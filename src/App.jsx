import { useState } from 'react'
import './App.css'
import Tenisnike from './assets/tenisdanike.webp'
import Tenisnike2 from './assets/tenis nike.jpeg'
import Tenisnike3 from './assets/tn.webp'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
      <header></header>
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
      <section className="destaque"></section>
      <footer></footer>
     </main>
    </>
  )
}

export default App
