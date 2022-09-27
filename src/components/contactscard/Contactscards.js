import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquareFacebook,
    faWhatsappSquare,
    faSquarePinterest,
} from "@fortawesome/free-brands-svg-icons";
import "./Contactscards.css";

export default function Contactscards({ hrefs = [] }) {
    return (
        <div className="cards">
            <div className="services flex-1 gap-4">
                <div className="content content-1 ">
                    <FontAwesomeIcon icon={faSquareFacebook} size="5x" />
                    <h2>Facebook</h2>
                    <p>
                        Facebook is the largest social networking site that easy
                        to connect with family, friends and businesses
                    </p>
                    <a
                        href={hrefs[0] || ""}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CLICK HERE
                    </a>
                </div>
                <div className="content content-2 ">
                    <FontAwesomeIcon icon={faWhatsappSquare} size="5x" />
                    <h2>WhatsApp</h2>
                    <p>
                        WhatsApp is a messaging app that lets users text, chat,
                        and share media, including voice messages and video
                    </p>
                    <a
                        href={hrefs[1] || ""}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CLICK HERE
                    </a>
                </div>
                <div className="content content-3 ">
                    <FontAwesomeIcon icon={faSquarePinterest} size="5x" />
                    <h2>Pinterest</h2>
                    <p>
                        Pinterest is social media service designed to enable
                        saving and discovery of information on the internet
                    </p>
                    <a
                        href={hrefs[2] || ""}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CLICK HERE
                    </a>
                </div>
            </div>
        </div>
    );
}
