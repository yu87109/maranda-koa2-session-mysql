import { Sequelize, Model } from 'sequelize';
import { ParameterizedContext } from 'koa';

declare class Session extends Model {
  readonly SessKey: string;
  readonly CreateAt: Date;
  ExpiryTo: Date;
  SessData: object;
  expiry: number;
  GC():Promise<number>;
}
export interface SessionCtx { Session: Session }
export interface initOptions {
  tableName?: string,
  gc_type?: 'auto'|'manul',
  gc_prob_denominator?: number,
  gc_prob_molecular?: number,
  sync?: boolean,
  force?: boolean,
  sessKey?: string,
  logger?: boolean | ((num:number)=>any)
}
declare function SessionMiddware<T extends SessionCtx>(sequelize: Sequelize, initOptions?: initOptions): (ctx: ParameterizedContext<any, T>, next: () => Promise<any>) => Promise<void>
export default SessionMiddware;
export * from 'sequelize';
