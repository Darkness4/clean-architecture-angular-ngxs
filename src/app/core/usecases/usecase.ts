import { Observable } from 'rxjs';

export interface Usecase<Type, Params> {
  execute(params: Params): Observable<Type>;
}
