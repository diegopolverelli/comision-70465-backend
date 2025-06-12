import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
// import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private reflector: Reflector) { }

  canActivate(
    context: ExecutionContext,
  ): boolean {

    const req: Request = context.switchToHttp().getRequest()

    let { username, password } = req.query
    if (username != "admin" || password != "123") throw new UnauthorizedException(`Credenciales inválidas`)

    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const color = this.reflector.get<string>('color', context.getHandler());

    console.log(roles)
    console.log(color)

    // evaluaría roles
    // throw new ForbiddenException(`No tiene privilefgios suficientes`)

    return true;
  }
}
