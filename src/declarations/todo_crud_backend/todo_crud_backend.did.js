export const idlFactory = ({ IDL }) => {
  const TimestampMillis = IDL.Nat64;
  const TodoItem = IDL.Record({
    'id' : IDL.Nat32,
    'added' : TimestampMillis,
    'done' : IDL.Bool,
    'name' : IDL.Text,
  });
  return IDL.Service({
    'add' : IDL.Func([IDL.Text], [IDL.Nat32], []),
    'delete_by_id' : IDL.Func([IDL.Nat32], [IDL.Bool], []),
    'get_all' : IDL.Func([IDL.Opt(IDL.Bool)], [IDL.Vec(TodoItem)], ['query']),
    'get_by_id' : IDL.Func(
        [IDL.Opt(IDL.Nat32)],
        [IDL.Vec(TodoItem)],
        ['query'],
      ),
    'mark_done' : IDL.Func([IDL.Nat32], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
