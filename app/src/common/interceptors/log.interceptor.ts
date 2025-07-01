import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Request intercepted:', context.switchToHttp().getRequest().url);
    return next.handle().pipe(
      tap((data) => console.log('Response:', data)),
    );
  }
}
