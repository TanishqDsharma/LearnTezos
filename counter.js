let CONTRACT_JSON;

export default CONTRACT_JSON = [ { "prim": "parameter",
    "args":
      [ { "prim": "or",
          "args":
            [ { "prim": "int", "annots": [ "%decrement" ] },
              { "prim": "int", "annots": [ "%increment" ] } ] } ] },
  { "prim": "storage", "args": [ { "prim": "int" } ] },
  { "prim": "code",
    "args":
      [ [ { "prim": "UNPAIR" },
          { "prim": "IF_LEFT",
            "args":
              [ [ { "prim": "SWAP" }, { "prim": "SUB" } ],
                [ { "prim": "ADD" } ] ] },
          { "prim": "NIL", "args": [ { "prim": "operation" } ] },
          { "prim": "PAIR" } ] ] } ]