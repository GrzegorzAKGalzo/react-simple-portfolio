import ExtraTitle from "./ExtraTitle";
import "../css/showcase.css";

function Showcase() {
  return (
    <section className="container" id="showcase">
      <div className="row">
        <ExtraTitle color="2">Portfolio</ExtraTitle>
        <h2 className="text-center">
          Moje realizacje -<br />
          sprawdzone efekty i sukcesy klientów
        </h2>
        <p className="text-muted">
          Od projektu do efektu. Tak tworzę strony, które napędzają rozwój
          biznesów.
        </p>
      </div>
      <div className="row">
        <div className="showcase-cabinet">
          <div className="showcase-item">
            <img src="project1.jpg" alt="" />
            <div className="showcase-info">
              <h4>Luxury Fashion E-Commerce</h4>
              <p className="text-muted">
                A complete e-commerce redesign for a premium fashion brand,
                featuring a modern shopping experience with advanced filtering
                and seamless checkout.
              </p>
              <div className="features">
                <div className="feature">React</div>
                <div className="feature">React</div>
                <div className="feature">React</div>
              </div>
              <hr />
              <div className="goals">
                <div className="goal">
                  <p className="goal-number">100%</p>
                  <p className="text-muted">Number</p>
                </div>
                <div className="goal">
                  <p className="goal-number">100%</p>
                  <p className="text-muted">Number</p>
                </div>
              </div>
            </div>
          </div>
          <div className="showcase-item">
            <img src="project1.jpg" alt="" />
            <div className="showcase-info">
              <h4>Luxury Fashion E-Commerce</h4>
              <p className="text-muted">
                A complete e-commerce redesign for a premium fashion brand,
                featuring a modern shopping experience with advanced filtering
                and seamless checkout.
              </p>
              <div className="features">
                <div className="feature">React</div>
                <div className="feature">React</div>
                <div className="feature">React</div>
              </div>
              <hr />
              <div className="goals">
                <div className="goal">
                  <p className="goal-number">100%</p>
                  <p className="text-muted">Number</p>
                </div>
                <div className="goal">
                  <p className="goal-number">100%</p>
                  <p className="text-muted">Number</p>
                </div>
              </div>
            </div>
          </div>
          <div className="showcase-item">
            <img src="project1.jpg" alt="" />
            <div className="showcase-info">
              <h4>Luxury Fashion E-Commerce</h4>
              <p className="text-muted">
                A complete e-commerce redesign for a premium fashion brand,
                featuring a modern shopping experience with advanced filtering
                and seamless checkout.
              </p>
              <div className="features">
                <div className="feature">React</div>
                <div className="feature">React</div>
                <div className="feature">React</div>
              </div>
              <hr />
              <div className="goals">
                <div className="goal">
                  <p className="goal-number">40%</p>
                  <p className="text-muted">Better UX</p>
                </div>
                <div className="goal">
                  <p className="goal-number">100%</p>
                  <p className="text-muted">Number</p>
                </div>
              </div>
            </div>
          </div>
          <div className="showcase-item">
            <img src="project1.jpg" alt="" />
            <div className="showcase-info">
              <h4>Luxury Fashion E-Commerce</h4>
              <p className="text-muted">
                A complete e-commerce redesign for a premium fashion brand,
                featuring a modern shopping experience with advanced filtering
                and seamless checkout.
              </p>
              <div className="features">
                <div className="feature">React</div>
                <div className="feature">React</div>
                <div className="feature">React</div>
              </div>
              <hr />
              <div className="goals">
                <div className="goal">
                  <p className="goal-number">100%</p>
                  <p className="text-muted">Number</p>
                </div>
                <div className="goal">
                  <p className="goal-number">100%</p>
                  <p className="text-muted">Number</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Showcase;
