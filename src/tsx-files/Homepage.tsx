import '../css-files/homepageStyle.css';
import {Link} from "react-router-dom";

function Homepage () {
    return (
        <>
            <div className="homepage-content">
                <div className="homepage-header">
                    <div className="homepage-title-container">
                        <img id = "homepage-icon" src = "/RentMyRide.png" alt="YatraTech Icon"/>
                        <h2 id = "homepage-title"><span className="RentMy">RentMy</span><span className="Ride">Ride</span></h2>
                    </div>
                </div>
                <div className="homepage-main">
                    <div className="homepage-written">
                        <div className="homepage-h3">
                            <h2 style={{marginBottom: 0}}> Embark on a Journey,
                                <br/> Choose the Perfect
                                Car, <br/> Follow the Path </h2>
                        </div>
                        <div className="homepage-p">
                            <p>Discover unparalleled freedom with
                                <br/> RentMyRide. Customize your journey by selecting
                                from<br/>
                                our exclusive range of top-quality vehicles.</p>
                        </div>
                        <div className="homepage-explore-button">
                            <Link to="/join-our-family">
                                <button id="hp-explore-button">
                                GET STARTED
                            </button></Link>
                        </div>
                    </div>
                    <div className="homepage-gif">
                        <div className="hp-gif">
                            <img id="hp-gif" src="src/assets/Homepage/Car.gif" alt="Car"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage;