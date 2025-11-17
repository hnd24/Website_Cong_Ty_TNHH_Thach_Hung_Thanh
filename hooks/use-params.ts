import {TrademarkEquipment, TypeEquipment} from '@/constants/enum';
import {parseAsInteger, parseAsStringEnum, useQueryStates} from 'nuqs';

export const useParams = () => {
	const [params, setParams] = useQueryStates({
		TypeEquipment: parseAsStringEnum<TypeEquipment>(Object.values(TypeEquipment)).withDefault(
			TypeEquipment.All,
		),
		TrademarkEquipment: parseAsStringEnum<TrademarkEquipment>(
			Object.values(TrademarkEquipment),
		).withDefault(TrademarkEquipment.All),
		Rent: parseAsInteger.withDefault(100),
	});

	return {
		params,
		setParams,
	};
};
