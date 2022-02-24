import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Eval Jam</title>
      <link rel="stylesheet" href="stylesheet.css" />
    </Head>
  <div className="part1">
    <img src="img\logo.png" />
    <div className="inf">
      <div className="sideGauchePt1">
        <div className="txtPt1Sidegauche">
          <p className="title">
            Make<span className="business">business</span> with us &amp; become
            beautiful
          </p>
          <p></p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <button className="started">GET STARTED</button>
        </div>
      </div>
      <img src="img\banner.png" />
    </div>
  </div>
  <div className="part2">
    <div className="txtPt2">
      <h2>Services</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod Lorem ipsum
      </p>
    </div>
    <div className="tabCat">
      <div className="cat">
        <div>💡</div>
        <div>
          <h3>Market Research</h3>
          <p className="gray">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>
      <div className="cat">
        <div>🔍</div>
        <div>
          <h3>Market Research</h3>
          <p className="gray">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>
      <div>
        <div>☁️ </div>
        <div>
          <h3>Data Processing</h3>
          <p className="gray">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>
      <div>
        <div>🧑‍💻</div>
        <div>
          <h3>Customer Support</h3>
          <p className="gray">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="part3">
    <div className="sideGauchePt3">
      <div className="txtPt3Sidegauche">
        <h2>Best Digital Marketing Solution</h2>
        <p className="gray">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod Lorem ipsum Lorem ipsum dolor sit amet, hendrerit
          mel, es vidit eu lorem animal iracundia. Ius te altera essent
          incorrupte.
        </p>
        <ul className="checklist">
          <li>- Icon Hendrerit omittantur mel,es vidit eu lorem animal.</li>
          <li>- Icon The best marketing company to boost your web</li>
          <li>- Icon The Secrets to Successful About Hexan</li>
        </ul>
      </div>
    </div>
    <img src="img\automation-lab-2.jpg" className="bestdigital" />
  </div>
  <div className="part4">
    <div className="txtPt4">
      <h2>Contact</h2>
      <p className="gray">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod Lorem ipsum
      </p>
    </div>
    <div className="saisie">
      <input placeholder="Mail" />
      <button>SUBMIT</button>
    </div>
  </div>
  <footer>
    <img src="img\logo.png" />
    <div className="copyright">© all Rights Reserved by Hexan</div>
  </footer>
</>

  )
}
