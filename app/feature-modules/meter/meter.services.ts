import meterRepo from "./meter.repo";
import { METER_RESPONSES } from "./meter.responses";
import { IMeter } from "./meter.types";

const create = (meter: IMeter) => {
    const new_meter = meterRepo.create(meter);
    return new_meter;
}

const findAll = () => {
    const all_meters = meterRepo.find();
    if (!all_meters) throw METER_RESPONSES.METER_NOT_FOUND;
    return all_meters;
}

const deleteMeter = (id: string) => {
    const found_meter = meterRepo.deleteMeter(id);
    if (!found_meter) throw METER_RESPONSES.METER_NOT_FOUND;
    return found_meter;
}

export default {
    create,
    findAll,
    deleteMeter
}