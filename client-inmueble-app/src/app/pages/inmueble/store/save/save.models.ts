import { Inmueble } from '@app/models/backend/inmueble';
export { Inmueble as InmuebleResponse } from '@app/models/backend/inmueble';

export type InmuebleCreateRequest = Omit<Inmueble, 'id' | 'fechaCreacion'>;
