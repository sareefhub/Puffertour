import Review from "../models/Review";
import Repository from '../repositories';
import { getUserData } from "../helper";

interface Props {
    ReviewData: Review,
}

function ReviewCard(props: Props) {
    const ReviewData = props.ReviewData ? props.ReviewData.attributes : null;
    const user = getUserData();

    const Delete = async () => {
            await Repository.ReviewData.deletePayment(props.ReviewData.id);
            window.location.reload();
        }
    
    return (
        <div className="cardreview">
            {ReviewData?.user}:{ReviewData?.review}
            {user?.username == ReviewData?.user && (
            <button className="deletereview"
                type="submit"
                onClick={() => {
                Delete();
                }}
                >
                X
            </button>
            )}
        </div>
    );
}

export default ReviewCard;