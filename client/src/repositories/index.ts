import { OneDayRepository } from "./OneDayRepository";
import { PackageRepository } from "./PackageRepository";
import { PaymentRepository } from "./PaymentRepository";
import { ReviewRepository } from "./ReviewRepository";

const repositories = {
    Tourdata :new OneDayRepository(),
    Packagedata :new PackageRepository(),
    Paymentdata :new PaymentRepository(),
    ReviewData :new ReviewRepository()
}

export default repositories
