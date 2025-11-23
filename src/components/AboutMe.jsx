import "../css/aboutMe.css";
import ExtraTitle from "./ExtraTitle";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";

function AboutMe() {
  return (
    <section className="container bg-dark" id="about">
      <div className="row d-f-r">
        <div className="col">
          <ExtraTitle color="1">O mnie</ExtraTitle>
          <h2>
            Projektowanie i budowa stron internetowych, które wyróżniają firmy w
            sieci
          </h2>
          <p className="text-muted">
            Cześć! Nazywam się Grzegorz i tworzę nowoczesne, szybkie i
            dopracowane strony internetowe, które pomagają firmom i twórcom
            pokazać się online z najlepszej strony. Łączę estetyczny design z
            solidnym kodem, żeby finalny projekt nie tylko świetnie wyglądał,
            ale też działał bezbłędnie na każdym urządzeniu.
          </p>
          <p className="text-muted">
            Na co dzień skupiam się na front-endzie, głównie w oparciu o React,
            TypeScript i dobre praktyki, które gwarantują wysoką jakość i łatwą
            skalowalność projektów. Lubię pracować blisko klienta, rozumieć jego
            cele i przekładać je na rozwiązania, które po prostu robią robotę.
            Jeśli szukasz kogoś, kto zamieni pomysł w świetnie działającą stronę
            — jesteś w dobrym miejscu.
          </p>
          <div className="icons-box">
            <div className="item-icons-box">
              <div className="icon-icons-box">
                <PaletteOutlinedIcon />
              </div>
              <div className="text-icons-box">
                <h4>Nowoczesny design</h4>
                <p className="text-muted">Czysty i profesjonalny wygląd</p>
              </div>
            </div>
            <div className="item-icons-box">
              <div className="icon-icons-box">
                <CodeOutlinedIcon />
              </div>
              <div className="text-icons-box">
                <h4>Przejrzysty i solidny kod</h4>
                <p className="text-muted">Zoptymalizowana wydajność</p>
              </div>
            </div>
            <div className="item-icons-box">
              <div className="icon-icons-box">
                <RocketLaunchOutlinedIcon />
              </div>
              <div className="text-icons-box">
                <h4>Szybka realizacja</h4>
                <p className="text-muted">Zawsze na czas</p>
              </div>
            </div>
            <div className="item-icons-box">
              <div className="icon-icons-box">
                <HandshakeOutlinedIcon />
              </div>
              <div className="text-icons-box">
                <h4>Skupiony na kliencie</h4>
                <p className="text-muted">Twój sukces ma znaczenie</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <img src="about-me.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
