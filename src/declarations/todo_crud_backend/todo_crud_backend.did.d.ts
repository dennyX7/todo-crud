import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type TimestampMillis = bigint;
export interface TodoItem {
  'id' : number,
  'added' : TimestampMillis,
  'done' : boolean,
  'name' : string,
}
export interface _SERVICE {
  'add' : ActorMethod<[string], number>,
  'delete_by_id' : ActorMethod<[number], boolean>,
  'get_all' : ActorMethod<[[] | [boolean]], Array<TodoItem>>,
  'get_by_id' : ActorMethod<[[] | [number]], Array<TodoItem>>,
  'mark_done' : ActorMethod<[number], boolean>,
}
