export class PlaceRequest {
    name: string;
	description: string;
	location: {
		type: string,
		coordinates: [number, number]
	};
	tripId: number;
}
