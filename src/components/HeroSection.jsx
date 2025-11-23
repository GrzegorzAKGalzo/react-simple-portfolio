import { Button } from "@mui/material";
import "../css/heroSection.css";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

function HeroSection() {
  return (
    <div className="container-fluid hero-section">
      <div className="row">
        <div className="extras-info">
          <AutoAwesomeIcon /> Web Designer & Developer
        </div>
      </div>
      <div className="row">
        <h1>
          Buduję strony, które przekładają się na <br /> realne efekty
        </h1>
        <p className="text-muted">
          Projektuję estetyczne, szybkie i skuteczne strony dla biznesów
          gotowych zrobić wrażenie online. Od koncepcji do startu — zajmę się
          wszystkim.
        </p>
      </div>
      <div className="row buttons">
        <Button variant="contained" disableElevation href="#showcase">
          Portfolio <KeyboardArrowRightIcon />
        </Button>
        <Button variant="outlined" disableElevation href="#contact">
          Kontakt
        </Button>
      </div>
      <div className="row numbers">
        <div className="number">
          <span>50+</span> <br /> Ukończonych projektów
        </div>
        <div className="number">
          <span>5+</span> <br /> Lat doświadczenia
        </div>
        <div className="number">
          <span>
            <AllInclusiveIcon fontSize="large" />
          </span>
          <br /> Możliwości
        </div>
        <div className="number">
          <span>100%</span> <br /> Satysfakcji
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
