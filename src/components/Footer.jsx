import { Copyright } from "@mui/icons-material";
import "../css/footer.css";

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <p className="text-muted copyright">
            <Copyright /> Grzegorz 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
