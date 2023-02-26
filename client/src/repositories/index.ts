import { OneDayRepository } from "./OneDayRepository";
import { PackageRepository } from "./PackageRepository";

const repositories = {
    Tourdata :new OneDayRepository(),
    Packagedata :new PackageRepository()
}

export default repositories
