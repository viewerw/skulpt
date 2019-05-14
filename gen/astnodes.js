/* File automatically generated by asdl_js.py. */

/* Object that holds all nodes */
var astnodes = {};

/* ----- expr_context ----- */
/** @constructor */
astnodes.Load = function Load() {}
/** @constructor */
astnodes.Store = function Store() {}
/** @constructor */
astnodes.Del = function Del() {}
/** @constructor */
astnodes.AugLoad = function AugLoad() {}
/** @constructor */
astnodes.AugStore = function AugStore() {}
/** @constructor */
astnodes.Param = function Param() {}

/* ----- boolop ----- */
/** @constructor */
astnodes.And = function And() {}
/** @constructor */
astnodes.Or = function Or() {}

/* ----- operator ----- */
/** @constructor */
astnodes.Add = function Add() {}
/** @constructor */
astnodes.Sub = function Sub() {}
/** @constructor */
astnodes.Mult = function Mult() {}
/** @constructor */
astnodes.Div = function Div() {}
/** @constructor */
astnodes.Mod = function Mod() {}
/** @constructor */
astnodes.Pow = function Pow() {}
/** @constructor */
astnodes.LShift = function LShift() {}
/** @constructor */
astnodes.RShift = function RShift() {}
/** @constructor */
astnodes.BitOr = function BitOr() {}
/** @constructor */
astnodes.BitXor = function BitXor() {}
/** @constructor */
astnodes.BitAnd = function BitAnd() {}
/** @constructor */
astnodes.FloorDiv = function FloorDiv() {}

/* ----- unaryop ----- */
/** @constructor */
astnodes.Invert = function Invert() {}
/** @constructor */
astnodes.Not = function Not() {}
/** @constructor */
astnodes.UAdd = function UAdd() {}
/** @constructor */
astnodes.USub = function USub() {}

/* ----- cmpop ----- */
/** @constructor */
astnodes.Eq = function Eq() {}
/** @constructor */
astnodes.NotEq = function NotEq() {}
/** @constructor */
astnodes.Lt = function Lt() {}
/** @constructor */
astnodes.LtE = function LtE() {}
/** @constructor */
astnodes.Gt = function Gt() {}
/** @constructor */
astnodes.GtE = function GtE() {}
/** @constructor */
astnodes.Is = function Is() {}
/** @constructor */
astnodes.IsNot = function IsNot() {}
/** @constructor */
astnodes.In_ = function In_() {}
/** @constructor */
astnodes.NotIn = function NotIn() {}







/* ---------------------- */
/* constructors for nodes */
/* ---------------------- */





/** @constructor */
astnodes.Module = function Module(/* {asdl_seq *} */ body)
{
    this.body = body;
    return this;
}

/** @constructor */
astnodes.Interactive = function Interactive(/* {asdl_seq *} */ body)
{
    this.body = body;
    return this;
}

/** @constructor */
astnodes.Expression = function Expression(/* {expr_ty} */ body)
{
    goog.asserts.assert(body !== null && body !== undefined);
    this.body = body;
    return this;
}

/** @constructor */
astnodes.Suite = function Suite(/* {asdl_seq *} */ body)
{
    this.body = body;
    return this;
}

/** @constructor */
astnodes.FunctionDef = function FunctionDef(/* {identifier} */ name, /*
                                                 {arguments__ty} */ args, /*
                                                 {asdl_seq *} */ body, /*
                                                 {asdl_seq *} */
                                                 decorator_list, /* {int} */
                                                 lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(name !== null && name !== undefined);
    goog.asserts.assert(args !== null && args !== undefined);
    this.name = name;
    this.args = args;
    this.body = body;
    this.decorator_list = decorator_list;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.ClassDef = function ClassDef(/* {identifier} */ name, /* {asdl_seq *}
                                           */ bases, /* {asdl_seq *} */ body,
                                           /* {asdl_seq *} */ decorator_list,
                                           /* {int} */ lineno, /* {int} */
                                           col_offset)
{
    goog.asserts.assert(name !== null && name !== undefined);
    this.name = name;
    this.bases = bases;
    this.body = body;
    this.decorator_list = decorator_list;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Return_ = function Return_(/* {expr_ty} */ value, /* {int} */ lineno,
                                         /* {int} */ col_offset)
{
    this.value = value;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Delete_ = function Delete_(/* {asdl_seq *} */ targets, /* {int} */
                                         lineno, /* {int} */ col_offset)
{
    this.targets = targets;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Assign = function Assign(/* {asdl_seq *} */ targets, /* {expr_ty} */
                                       value, /* {int} */ lineno, /* {int} */
                                       col_offset)
{
    goog.asserts.assert(value !== null && value !== undefined);
    this.targets = targets;
    this.value = value;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.AugAssign = function AugAssign(/* {expr_ty} */ target, /*
                                             {operator_ty} */ op, /* {expr_ty}
                                             */ value, /* {int} */ lineno, /*
                                             {int} */ col_offset)
{
    goog.asserts.assert(target !== null && target !== undefined);
    goog.asserts.assert(op !== null && op !== undefined);
    goog.asserts.assert(value !== null && value !== undefined);
    this.target = target;
    this.op = op;
    this.value = value;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Print = function Print(/* {expr_ty} */ dest, /* {asdl_seq *} */
                                     values, /* {bool} */ nl, /* {int} */
                                     lineno, /* {int} */ col_offset)
{
    this.dest = dest;
    this.values = values;
    this.nl = nl;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.For_ = function For_(/* {expr_ty} */ target, /* {expr_ty} */ iter, /*
                                   {asdl_seq *} */ body, /* {asdl_seq *} */
                                   orelse, /* {int} */ lineno, /* {int} */
                                   col_offset)
{
    goog.asserts.assert(target !== null && target !== undefined);
    goog.asserts.assert(iter !== null && iter !== undefined);
    this.target = target;
    this.iter = iter;
    this.body = body;
    this.orelse = orelse;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.While_ = function While_(/* {expr_ty} */ test, /* {asdl_seq *} */
                                       body, /* {asdl_seq *} */ orelse, /*
                                       {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(test !== null && test !== undefined);
    this.test = test;
    this.body = body;
    this.orelse = orelse;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.If_ = function If_(/* {expr_ty} */ test, /* {asdl_seq *} */ body, /*
                                 {asdl_seq *} */ orelse, /* {int} */ lineno, /*
                                 {int} */ col_offset)
{
    goog.asserts.assert(test !== null && test !== undefined);
    this.test = test;
    this.body = body;
    this.orelse = orelse;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.With_ = function With_(/* {expr_ty} */ context_expr, /* {expr_ty} */
                                     optional_vars, /* {asdl_seq *} */ body, /*
                                     {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(context_expr !== null && context_expr !== undefined);
    this.context_expr = context_expr;
    this.optional_vars = optional_vars;
    this.body = body;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Raise = function Raise(/* {expr_ty} */ type, /* {expr_ty} */ inst, /*
                                     {expr_ty} */ tback, /* {int} */ lineno, /*
                                     {int} */ col_offset)
{
    this.type = type;
    this.inst = inst;
    this.tback = tback;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.TryExcept = function TryExcept(/* {asdl_seq *} */ body, /* {asdl_seq
                                             *} */ handlers, /* {asdl_seq *} */
                                             orelse, /* {int} */ lineno, /*
                                             {int} */ col_offset)
{
    this.body = body;
    this.handlers = handlers;
    this.orelse = orelse;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.TryFinally = function TryFinally(/* {asdl_seq *} */ body, /* {asdl_seq
                                               *} */ finalbody, /* {int} */
                                               lineno, /* {int} */ col_offset)
{
    this.body = body;
    this.finalbody = finalbody;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Assert = function Assert(/* {expr_ty} */ test, /* {expr_ty} */ msg, /*
                                       {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(test !== null && test !== undefined);
    this.test = test;
    this.msg = msg;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Import_ = function Import_(/* {asdl_seq *} */ names, /* {int} */
                                         lineno, /* {int} */ col_offset)
{
    this.names = names;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.ImportFrom = function ImportFrom(/* {identifier} */ module, /*
                                               {asdl_seq *} */ names, /* {int}
                                               */ level, /* {int} */ lineno, /*
                                               {int} */ col_offset)
{
    goog.asserts.assert(module !== null && module !== undefined);
    this.module = module;
    this.names = names;
    this.level = level;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Exec = function Exec(/* {expr_ty} */ body, /* {expr_ty} */ globals, /*
                                   {expr_ty} */ locals, /* {int} */ lineno, /*
                                   {int} */ col_offset)
{
    goog.asserts.assert(body !== null && body !== undefined);
    this.body = body;
    this.globals = globals;
    this.locals = locals;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Global = function Global(/* {asdl_seq *} */ names, /* {int} */ lineno,
                                       /* {int} */ col_offset)
{
    this.names = names;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Expr = function Expr(/* {expr_ty} */ value, /* {int} */ lineno, /*
                                   {int} */ col_offset)
{
    goog.asserts.assert(value !== null && value !== undefined);
    this.value = value;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Pass = function Pass(/* {int} */ lineno, /* {int} */ col_offset)
{
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Break_ = function Break_(/* {int} */ lineno, /* {int} */ col_offset)
{
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Continue_ = function Continue_(/* {int} */ lineno, /* {int} */
                                             col_offset)
{
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Debugger_ = function Debugger_(/* {int} */ lineno, /* {int} */
                                             col_offset)
{
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.BoolOp = function BoolOp(/* {boolop_ty} */ op, /* {asdl_seq *} */
                                       values, /* {int} */ lineno, /* {int} */
                                       col_offset)
{
    goog.asserts.assert(op !== null && op !== undefined);
    this.op = op;
    this.values = values;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.BinOp = function BinOp(/* {expr_ty} */ left, /* {operator_ty} */ op,
                                     /* {expr_ty} */ right, /* {int} */ lineno,
                                     /* {int} */ col_offset)
{
    goog.asserts.assert(left !== null && left !== undefined);
    goog.asserts.assert(op !== null && op !== undefined);
    goog.asserts.assert(right !== null && right !== undefined);
    this.left = left;
    this.op = op;
    this.right = right;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.UnaryOp = function UnaryOp(/* {unaryop_ty} */ op, /* {expr_ty} */
                                         operand, /* {int} */ lineno, /* {int}
                                         */ col_offset)
{
    goog.asserts.assert(op !== null && op !== undefined);
    goog.asserts.assert(operand !== null && operand !== undefined);
    this.op = op;
    this.operand = operand;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Lambda = function Lambda(/* {arguments__ty} */ args, /* {expr_ty} */
                                       body, /* {int} */ lineno, /* {int} */
                                       col_offset)
{
    goog.asserts.assert(args !== null && args !== undefined);
    goog.asserts.assert(body !== null && body !== undefined);
    this.args = args;
    this.body = body;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.IfExp = function IfExp(/* {expr_ty} */ test, /* {expr_ty} */ body, /*
                                     {expr_ty} */ orelse, /* {int} */ lineno,
                                     /* {int} */ col_offset)
{
    goog.asserts.assert(test !== null && test !== undefined);
    goog.asserts.assert(body !== null && body !== undefined);
    goog.asserts.assert(orelse !== null && orelse !== undefined);
    this.test = test;
    this.body = body;
    this.orelse = orelse;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Dict = function Dict(/* {asdl_seq *} */ keys, /* {asdl_seq *} */
                                   values, /* {int} */ lineno, /* {int} */
                                   col_offset)
{
    this.keys = keys;
    this.values = values;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Set = function Set(/* {asdl_seq *} */ elts, /* {int} */ lineno, /*
                                 {int} */ col_offset)
{
    this.elts = elts;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.ListComp = function ListComp(/* {expr_ty} */ elt, /* {asdl_seq *} */
                                           generators, /* {int} */ lineno, /*
                                           {int} */ col_offset)
{
    goog.asserts.assert(elt !== null && elt !== undefined);
    this.elt = elt;
    this.generators = generators;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.SetComp = function SetComp(/* {expr_ty} */ elt, /* {asdl_seq *} */
                                         generators, /* {int} */ lineno, /*
                                         {int} */ col_offset)
{
    goog.asserts.assert(elt !== null && elt !== undefined);
    this.elt = elt;
    this.generators = generators;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.DictComp = function DictComp(/* {expr_ty} */ key, /* {expr_ty} */
                                           value, /* {asdl_seq *} */
                                           generators, /* {int} */ lineno, /*
                                           {int} */ col_offset)
{
    goog.asserts.assert(key !== null && key !== undefined);
    goog.asserts.assert(value !== null && value !== undefined);
    this.key = key;
    this.value = value;
    this.generators = generators;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.GeneratorExp = function GeneratorExp(/* {expr_ty} */ elt, /* {asdl_seq
                                                   *} */ generators, /* {int}
                                                   */ lineno, /* {int} */
                                                   col_offset)
{
    goog.asserts.assert(elt !== null && elt !== undefined);
    this.elt = elt;
    this.generators = generators;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Yield = function Yield(/* {expr_ty} */ value, /* {int} */ lineno, /*
                                     {int} */ col_offset)
{
    this.value = value;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Compare = function Compare(/* {expr_ty} */ left, /* {asdl_int_seq *}
                                         */ ops, /* {asdl_seq *} */
                                         comparators, /* {int} */ lineno, /*
                                         {int} */ col_offset)
{
    goog.asserts.assert(left !== null && left !== undefined);
    this.left = left;
    this.ops = ops;
    this.comparators = comparators;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Call = function Call(/* {expr_ty} */ func, /* {asdl_seq *} */ args, /*
                                   {asdl_seq *} */ keywords, /* {expr_ty} */
                                   starargs, /* {expr_ty} */ kwargs, /* {int}
                                   */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(func !== null && func !== undefined);
    this.func = func;
    this.args = args;
    this.keywords = keywords;
    this.starargs = starargs;
    this.kwargs = kwargs;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Repr = function Repr(/* {expr_ty} */ value, /* {int} */ lineno, /*
                                   {int} */ col_offset)
{
    goog.asserts.assert(value !== null && value !== undefined);
    this.value = value;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Num = function Num(/* {object} */ n, /* {int} */ lineno, /* {int} */
                                 col_offset)
{
    goog.asserts.assert(n !== null && n !== undefined);
    this.n = n;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Str = function Str(/* {string} */ s, /* {int} */ lineno, /* {int} */
                                 col_offset)
{
    goog.asserts.assert(s !== null && s !== undefined);
    this.s = s;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Attribute = function Attribute(/* {expr_ty} */ value, /* {identifier}
                                             */ attr, /* {expr_context_ty} */
                                             ctx, /* {int} */ lineno, /* {int}
                                             */ col_offset)
{
    goog.asserts.assert(value !== null && value !== undefined);
    goog.asserts.assert(attr !== null && attr !== undefined);
    goog.asserts.assert(ctx !== null && ctx !== undefined);
    this.value = value;
    this.attr = attr;
    this.ctx = ctx;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Subscript = function Subscript(/* {expr_ty} */ value, /* {slice_ty} */
                                             slice, /* {expr_context_ty} */
                                             ctx, /* {int} */ lineno, /* {int}
                                             */ col_offset)
{
    goog.asserts.assert(value !== null && value !== undefined);
    goog.asserts.assert(slice !== null && slice !== undefined);
    goog.asserts.assert(ctx !== null && ctx !== undefined);
    this.value = value;
    this.slice = slice;
    this.ctx = ctx;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Name = function Name(/* {identifier} */ id, /* {expr_context_ty} */
                                   ctx, /* {int} */ lineno, /* {int} */
                                   col_offset)
{
    goog.asserts.assert(id !== null && id !== undefined);
    goog.asserts.assert(ctx !== null && ctx !== undefined);
    this.id = id;
    this.ctx = ctx;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.List = function List(/* {asdl_seq *} */ elts, /* {expr_context_ty} */
                                   ctx, /* {int} */ lineno, /* {int} */
                                   col_offset)
{
    goog.asserts.assert(ctx !== null && ctx !== undefined);
    this.elts = elts;
    this.ctx = ctx;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Tuple = function Tuple(/* {asdl_seq *} */ elts, /* {expr_context_ty}
                                     */ ctx, /* {int} */ lineno, /* {int} */
                                     col_offset)
{
    goog.asserts.assert(ctx !== null && ctx !== undefined);
    this.elts = elts;
    this.ctx = ctx;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.Ellipsis = function Ellipsis()
{
    return this;
}

/** @constructor */
astnodes.Slice = function Slice(/* {expr_ty} */ lower, /* {expr_ty} */ upper,
                                     /* {expr_ty} */ step)
{
    this.lower = lower;
    this.upper = upper;
    this.step = step;
    return this;
}

/** @constructor */
astnodes.ExtSlice = function ExtSlice(/* {asdl_seq *} */ dims)
{
    this.dims = dims;
    return this;
}

/** @constructor */
astnodes.Index = function Index(/* {expr_ty} */ value)
{
    goog.asserts.assert(value !== null && value !== undefined);
    this.value = value;
    return this;
}

/** @constructor */
astnodes.comprehension = function comprehension(/* {expr_ty} */ target, /*
                                                     {expr_ty} */ iter, /*
                                                     {asdl_seq *} */ ifs)
{
    goog.asserts.assert(target !== null && target !== undefined);
    goog.asserts.assert(iter !== null && iter !== undefined);
    this.target = target;
    this.iter = iter;
    this.ifs = ifs;
    return this;
}

/** @constructor */
astnodes.ExceptHandler = function ExceptHandler(/* {expr_ty} */ type, /*
                                                     {expr_ty} */ name, /*
                                                     {asdl_seq *} */ body, /*
                                                     {int} */ lineno, /* {int}
                                                     */ col_offset)
{
    this.type = type;
    this.name = name;
    this.body = body;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
astnodes.arguments_ = function arguments_(/* {asdl_seq *} */ args, /*
                                               {identifier} */ vararg, /*
                                               {identifier} */ kwarg, /*
                                               {asdl_seq *} */ defaults)
{
    this.args = args;
    this.vararg = vararg;
    this.kwarg = kwarg;
    this.defaults = defaults;
    return this;
}

/** @constructor */
astnodes.keyword = function keyword(/* {identifier} */ arg, /* {expr_ty} */
                                         value)
{
    goog.asserts.assert(arg !== null && arg !== undefined);
    goog.asserts.assert(value !== null && value !== undefined);
    this.arg = arg;
    this.value = value;
    return this;
}

/** @constructor */
astnodes.alias = function alias(/* {identifier} */ name, /* {identifier} */
                                     asname)
{
    goog.asserts.assert(name !== null && name !== undefined);
    this.name = name;
    this.asname = asname;
    return this;
}


astnodes.Module.prototype._astname = "Module";
astnodes.Module.prototype._fields = [
    "body", function(n) { return n.body; }
];
astnodes.Interactive.prototype._astname = "Interactive";
astnodes.Interactive.prototype._fields = [
    "body", function(n) { return n.body; }
];
astnodes.Expression.prototype._astname = "Expression";
astnodes.Expression.prototype._fields = [
    "body", function(n) { return n.body; }
];
astnodes.Suite.prototype._astname = "Suite";
astnodes.Suite.prototype._fields = [
    "body", function(n) { return n.body; }
];
astnodes.FunctionDef.prototype._astname = "FunctionDef";
astnodes.FunctionDef.prototype._fields = [
    "name", function(n) { return n.name; },
    "args", function(n) { return n.args; },
    "body", function(n) { return n.body; },
    "decorator_list", function(n) { return n.decorator_list; }
];
astnodes.ClassDef.prototype._astname = "ClassDef";
astnodes.ClassDef.prototype._fields = [
    "name", function(n) { return n.name; },
    "bases", function(n) { return n.bases; },
    "body", function(n) { return n.body; },
    "decorator_list", function(n) { return n.decorator_list; }
];
astnodes.Return_.prototype._astname = "Return";
astnodes.Return_.prototype._fields = [
    "value", function(n) { return n.value; }
];
astnodes.Delete_.prototype._astname = "Delete";
astnodes.Delete_.prototype._fields = [
    "targets", function(n) { return n.targets; }
];
astnodes.Assign.prototype._astname = "Assign";
astnodes.Assign.prototype._fields = [
    "targets", function(n) { return n.targets; },
    "value", function(n) { return n.value; }
];
astnodes.AugAssign.prototype._astname = "AugAssign";
astnodes.AugAssign.prototype._fields = [
    "target", function(n) { return n.target; },
    "op", function(n) { return n.op; },
    "value", function(n) { return n.value; }
];
astnodes.Print.prototype._astname = "Print";
astnodes.Print.prototype._fields = [
    "dest", function(n) { return n.dest; },
    "values", function(n) { return n.values; },
    "nl", function(n) { return n.nl; }
];
astnodes.For_.prototype._astname = "For";
astnodes.For_.prototype._fields = [
    "target", function(n) { return n.target; },
    "iter", function(n) { return n.iter; },
    "body", function(n) { return n.body; },
    "orelse", function(n) { return n.orelse; }
];
astnodes.While_.prototype._astname = "While";
astnodes.While_.prototype._fields = [
    "test", function(n) { return n.test; },
    "body", function(n) { return n.body; },
    "orelse", function(n) { return n.orelse; }
];
astnodes.If_.prototype._astname = "If";
astnodes.If_.prototype._fields = [
    "test", function(n) { return n.test; },
    "body", function(n) { return n.body; },
    "orelse", function(n) { return n.orelse; }
];
astnodes.With_.prototype._astname = "With";
astnodes.With_.prototype._fields = [
    "context_expr", function(n) { return n.context_expr; },
    "optional_vars", function(n) { return n.optional_vars; },
    "body", function(n) { return n.body; }
];
astnodes.Raise.prototype._astname = "Raise";
astnodes.Raise.prototype._fields = [
    "type", function(n) { return n.type; },
    "inst", function(n) { return n.inst; },
    "tback", function(n) { return n.tback; }
];
astnodes.TryExcept.prototype._astname = "TryExcept";
astnodes.TryExcept.prototype._fields = [
    "body", function(n) { return n.body; },
    "handlers", function(n) { return n.handlers; },
    "orelse", function(n) { return n.orelse; }
];
astnodes.TryFinally.prototype._astname = "TryFinally";
astnodes.TryFinally.prototype._fields = [
    "body", function(n) { return n.body; },
    "finalbody", function(n) { return n.finalbody; }
];
astnodes.Assert.prototype._astname = "Assert";
astnodes.Assert.prototype._fields = [
    "test", function(n) { return n.test; },
    "msg", function(n) { return n.msg; }
];
astnodes.Import_.prototype._astname = "Import";
astnodes.Import_.prototype._fields = [
    "names", function(n) { return n.names; }
];
astnodes.ImportFrom.prototype._astname = "ImportFrom";
astnodes.ImportFrom.prototype._fields = [
    "module", function(n) { return n.module; },
    "names", function(n) { return n.names; },
    "level", function(n) { return n.level; }
];
astnodes.Exec.prototype._astname = "Exec";
astnodes.Exec.prototype._fields = [
    "body", function(n) { return n.body; },
    "globals", function(n) { return n.globals; },
    "locals", function(n) { return n.locals; }
];
astnodes.Global.prototype._astname = "Global";
astnodes.Global.prototype._fields = [
    "names", function(n) { return n.names; }
];
astnodes.Expr.prototype._astname = "Expr";
astnodes.Expr.prototype._fields = [
    "value", function(n) { return n.value; }
];
astnodes.Pass.prototype._astname = "Pass";
astnodes.Pass.prototype._fields = [
];
astnodes.Break_.prototype._astname = "Break";
astnodes.Break_.prototype._fields = [
];
astnodes.Continue_.prototype._astname = "Continue";
astnodes.Continue_.prototype._fields = [
];
astnodes.Debugger_.prototype._astname = "Debugger";
astnodes.Debugger_.prototype._fields = [
];
astnodes.BoolOp.prototype._astname = "BoolOp";
astnodes.BoolOp.prototype._fields = [
    "op", function(n) { return n.op; },
    "values", function(n) { return n.values; }
];
astnodes.BinOp.prototype._astname = "BinOp";
astnodes.BinOp.prototype._fields = [
    "left", function(n) { return n.left; },
    "op", function(n) { return n.op; },
    "right", function(n) { return n.right; }
];
astnodes.UnaryOp.prototype._astname = "UnaryOp";
astnodes.UnaryOp.prototype._fields = [
    "op", function(n) { return n.op; },
    "operand", function(n) { return n.operand; }
];
astnodes.Lambda.prototype._astname = "Lambda";
astnodes.Lambda.prototype._fields = [
    "args", function(n) { return n.args; },
    "body", function(n) { return n.body; }
];
astnodes.IfExp.prototype._astname = "IfExp";
astnodes.IfExp.prototype._fields = [
    "test", function(n) { return n.test; },
    "body", function(n) { return n.body; },
    "orelse", function(n) { return n.orelse; }
];
astnodes.Dict.prototype._astname = "Dict";
astnodes.Dict.prototype._fields = [
    "keys", function(n) { return n.keys; },
    "values", function(n) { return n.values; }
];
astnodes.Set.prototype._astname = "Set";
astnodes.Set.prototype._fields = [
    "elts", function(n) { return n.elts; }
];
astnodes.ListComp.prototype._astname = "ListComp";
astnodes.ListComp.prototype._fields = [
    "elt", function(n) { return n.elt; },
    "generators", function(n) { return n.generators; }
];
astnodes.SetComp.prototype._astname = "SetComp";
astnodes.SetComp.prototype._fields = [
    "elt", function(n) { return n.elt; },
    "generators", function(n) { return n.generators; }
];
astnodes.DictComp.prototype._astname = "DictComp";
astnodes.DictComp.prototype._fields = [
    "key", function(n) { return n.key; },
    "value", function(n) { return n.value; },
    "generators", function(n) { return n.generators; }
];
astnodes.GeneratorExp.prototype._astname = "GeneratorExp";
astnodes.GeneratorExp.prototype._fields = [
    "elt", function(n) { return n.elt; },
    "generators", function(n) { return n.generators; }
];
astnodes.Yield.prototype._astname = "Yield";
astnodes.Yield.prototype._fields = [
    "value", function(n) { return n.value; }
];
astnodes.Compare.prototype._astname = "Compare";
astnodes.Compare.prototype._fields = [
    "left", function(n) { return n.left; },
    "ops", function(n) { return n.ops; },
    "comparators", function(n) { return n.comparators; }
];
astnodes.Call.prototype._astname = "Call";
astnodes.Call.prototype._fields = [
    "func", function(n) { return n.func; },
    "args", function(n) { return n.args; },
    "keywords", function(n) { return n.keywords; },
    "starargs", function(n) { return n.starargs; },
    "kwargs", function(n) { return n.kwargs; }
];
astnodes.Repr.prototype._astname = "Repr";
astnodes.Repr.prototype._fields = [
    "value", function(n) { return n.value; }
];
astnodes.Num.prototype._astname = "Num";
astnodes.Num.prototype._fields = [
    "n", function(n) { return n.n; }
];
astnodes.Str.prototype._astname = "Str";
astnodes.Str.prototype._fields = [
    "s", function(n) { return n.s; }
];
astnodes.Attribute.prototype._astname = "Attribute";
astnodes.Attribute.prototype._fields = [
    "value", function(n) { return n.value; },
    "attr", function(n) { return n.attr; },
    "ctx", function(n) { return n.ctx; }
];
astnodes.Subscript.prototype._astname = "Subscript";
astnodes.Subscript.prototype._fields = [
    "value", function(n) { return n.value; },
    "slice", function(n) { return n.slice; },
    "ctx", function(n) { return n.ctx; }
];
astnodes.Name.prototype._astname = "Name";
astnodes.Name.prototype._fields = [
    "id", function(n) { return n.id; },
    "ctx", function(n) { return n.ctx; }
];
astnodes.List.prototype._astname = "List";
astnodes.List.prototype._fields = [
    "elts", function(n) { return n.elts; },
    "ctx", function(n) { return n.ctx; }
];
astnodes.Tuple.prototype._astname = "Tuple";
astnodes.Tuple.prototype._fields = [
    "elts", function(n) { return n.elts; },
    "ctx", function(n) { return n.ctx; }
];
astnodes.Load.prototype._astname = "Load";
astnodes.Load.prototype._isenum = true;
astnodes.Store.prototype._astname = "Store";
astnodes.Store.prototype._isenum = true;
astnodes.Del.prototype._astname = "Del";
astnodes.Del.prototype._isenum = true;
astnodes.AugLoad.prototype._astname = "AugLoad";
astnodes.AugLoad.prototype._isenum = true;
astnodes.AugStore.prototype._astname = "AugStore";
astnodes.AugStore.prototype._isenum = true;
astnodes.Param.prototype._astname = "Param";
astnodes.Param.prototype._isenum = true;
astnodes.Ellipsis.prototype._astname = "Ellipsis";
astnodes.Ellipsis.prototype._fields = [
];
astnodes.Slice.prototype._astname = "Slice";
astnodes.Slice.prototype._fields = [
    "lower", function(n) { return n.lower; },
    "upper", function(n) { return n.upper; },
    "step", function(n) { return n.step; }
];
astnodes.ExtSlice.prototype._astname = "ExtSlice";
astnodes.ExtSlice.prototype._fields = [
    "dims", function(n) { return n.dims; }
];
astnodes.Index.prototype._astname = "Index";
astnodes.Index.prototype._fields = [
    "value", function(n) { return n.value; }
];
astnodes.And.prototype._astname = "And";
astnodes.And.prototype._isenum = true;
astnodes.Or.prototype._astname = "Or";
astnodes.Or.prototype._isenum = true;
astnodes.Add.prototype._astname = "Add";
astnodes.Add.prototype._isenum = true;
astnodes.Sub.prototype._astname = "Sub";
astnodes.Sub.prototype._isenum = true;
astnodes.Mult.prototype._astname = "Mult";
astnodes.Mult.prototype._isenum = true;
astnodes.Div.prototype._astname = "Div";
astnodes.Div.prototype._isenum = true;
astnodes.Mod.prototype._astname = "Mod";
astnodes.Mod.prototype._isenum = true;
astnodes.Pow.prototype._astname = "Pow";
astnodes.Pow.prototype._isenum = true;
astnodes.LShift.prototype._astname = "LShift";
astnodes.LShift.prototype._isenum = true;
astnodes.RShift.prototype._astname = "RShift";
astnodes.RShift.prototype._isenum = true;
astnodes.BitOr.prototype._astname = "BitOr";
astnodes.BitOr.prototype._isenum = true;
astnodes.BitXor.prototype._astname = "BitXor";
astnodes.BitXor.prototype._isenum = true;
astnodes.BitAnd.prototype._astname = "BitAnd";
astnodes.BitAnd.prototype._isenum = true;
astnodes.FloorDiv.prototype._astname = "FloorDiv";
astnodes.FloorDiv.prototype._isenum = true;
astnodes.Invert.prototype._astname = "Invert";
astnodes.Invert.prototype._isenum = true;
astnodes.Not.prototype._astname = "Not";
astnodes.Not.prototype._isenum = true;
astnodes.UAdd.prototype._astname = "UAdd";
astnodes.UAdd.prototype._isenum = true;
astnodes.USub.prototype._astname = "USub";
astnodes.USub.prototype._isenum = true;
astnodes.Eq.prototype._astname = "Eq";
astnodes.Eq.prototype._isenum = true;
astnodes.NotEq.prototype._astname = "NotEq";
astnodes.NotEq.prototype._isenum = true;
astnodes.Lt.prototype._astname = "Lt";
astnodes.Lt.prototype._isenum = true;
astnodes.LtE.prototype._astname = "LtE";
astnodes.LtE.prototype._isenum = true;
astnodes.Gt.prototype._astname = "Gt";
astnodes.Gt.prototype._isenum = true;
astnodes.GtE.prototype._astname = "GtE";
astnodes.GtE.prototype._isenum = true;
astnodes.Is.prototype._astname = "Is";
astnodes.Is.prototype._isenum = true;
astnodes.IsNot.prototype._astname = "IsNot";
astnodes.IsNot.prototype._isenum = true;
astnodes.In_.prototype._astname = "In";
astnodes.In_.prototype._isenum = true;
astnodes.NotIn.prototype._astname = "NotIn";
astnodes.NotIn.prototype._isenum = true;
astnodes.comprehension.prototype._astname = "comprehension";
astnodes.comprehension.prototype._fields = [
    "target", function(n) { return n.target; },
    "iter", function(n) { return n.iter; },
    "ifs", function(n) { return n.ifs; }
];
astnodes.ExceptHandler.prototype._astname = "ExceptHandler";
astnodes.ExceptHandler.prototype._fields = [
    "type", function(n) { return n.type; },
    "name", function(n) { return n.name; },
    "body", function(n) { return n.body; }
];
astnodes.arguments_.prototype._astname = "arguments";
astnodes.arguments_.prototype._fields = [
    "args", function(n) { return n.args; },
    "vararg", function(n) { return n.vararg; },
    "kwarg", function(n) { return n.kwarg; },
    "defaults", function(n) { return n.defaults; }
];
astnodes.keyword.prototype._astname = "keyword";
astnodes.keyword.prototype._fields = [
    "arg", function(n) { return n.arg; },
    "value", function(n) { return n.value; }
];
astnodes.alias.prototype._astname = "alias";
astnodes.alias.prototype._fields = [
    "name", function(n) { return n.name; },
    "asname", function(n) { return n.asname; }
];

module.exports = astnodes;
