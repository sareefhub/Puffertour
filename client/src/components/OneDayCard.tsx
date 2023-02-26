import OneDayTour from '../models/OneDay'
import { useNavigate } from "react-router-dom"
import "./Cardtour.css"

interface Props {
    Tour: OneDayTour;
    }

function OneDayCard(props: Props) {
    const navigate = useNavigate();
    const tour = props.Tour.attributes
    const img = `http://localhost:1337${tour.cover_image.data.attributes.formats.thumbnail.url}`

    return (
        <div className="card">
            <div className="title-card">{tour.name}</div>
                <div className="card-image">{img}</div>
                <div className="heading">{tour.description}
                <div className="see-more">
                    <button onClick={() => navigate(`/additional-information-days-tour/${props.Tour.id}`)}>
                        ดูเพิ่มเติม
                    </button>
                </div>
                <div className="author">เหลือเพียง {tour.remaining} ที่ เท่านั้น!!!</div>
            </div>
        </div>
    )
}

export default OneDayCard;