import { OneDayRepository } from "./OneDayRepository";
import { PackageRepository } from "./PackageRepository";
import { PaymentRepository } from "./PaymentRepository";

const repositories = {
    Tourdata :new OneDayRepository(),
    Packagedata :new PackageRepository(),
    Paymentdata :new PaymentRepository()
}

export default repositories
