import Packagetour from '../models/Package';
import { useNavigate } from "react-router-dom"
import "./Cardtour.css"

interface Props {
    Tour: Packagetour;
    }

function PackageCard(props: Props) {
    const navigate = useNavigate();
    const tour = props.Tour.attributes
    // const img = `http://localhost:1337${tour.cover_image.data.attributes.formats.thumbnail.url}`

    return (
        <div className="card">
            <div className="title-card">{tour.name}</div>
                {/* <div className="card-image"><img alt="" src={} className="picture1"/></div> */}
                <div className="heading">{tour.description}
                <div className="see-more">
                    <button onClick={() => navigate(`/additional-information-package-tour/${props.Tour.id}`)}>
                        ดูเพิ่มเติม
                    </button>
                </div>
                <div className="author">เหลือเพียง {tour.remaining} ที่ เท่านั้น!!!</div>
            </div>
        </div>
    )
}

export default PackageCard;