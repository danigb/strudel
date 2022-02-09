import { g as getDefaultExportFromCjs, c as createCommonjsModule } from './common/_commonjsHelpers-8c19dec8.js';

var dist = createCommonjsModule(function (module, exports) {
// Generated by src/generate-spec.js. 

/**
 * Copyright 2016 Shape Security, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Hack to make Babel6 import this as a module.
Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = (function() {
  var SPEC = {};

  var BOOLEAN = { typeName: "Boolean" };
  var DOUBLE = { typeName: "Number" };
  var STRING = { typeName: "String" };
  function Maybe(arg) { return { typeName: "Maybe", argument: arg }; }
  function List(arg) { return { typeName: "List", argument: arg }; }
  function Const(arg) { return { typeName: "Const", argument: arg }; }
  function Union() { return { typeName: "Union", arguments: [].slice.call(arguments, 0) }; }


  var TYPE_INDICATOR = {
    typeName: "Enum",
    values: ["ArrayAssignmentTarget", "ArrayBinding", "ArrayExpression", "ArrowExpression", "AssignmentExpression", "AssignmentTargetIdentifier", "AssignmentTargetPropertyIdentifier", "AssignmentTargetPropertyProperty", "AssignmentTargetWithDefault", "AwaitExpression", "BinaryExpression", "BindingIdentifier", "BindingPropertyIdentifier", "BindingPropertyProperty", "BindingWithDefault", "Block", "BlockStatement", "BreakStatement", "CallExpression", "CatchClause", "ClassDeclaration", "ClassElement", "ClassExpression", "CompoundAssignmentExpression", "ComputedMemberAssignmentTarget", "ComputedMemberExpression", "ComputedPropertyName", "ConditionalExpression", "ContinueStatement", "DataProperty", "DebuggerStatement", "Directive", "DoWhileStatement", "EmptyStatement", "Export", "ExportAllFrom", "ExportDefault", "ExportFrom", "ExportFromSpecifier", "ExportLocalSpecifier", "ExportLocals", "ExpressionStatement", "ForAwaitStatement", "ForInStatement", "ForOfStatement", "ForStatement", "FormalParameters", "FunctionBody", "FunctionDeclaration", "FunctionExpression", "Getter", "IdentifierExpression", "IfStatement", "Import", "ImportNamespace", "ImportSpecifier", "LabeledStatement", "LiteralBooleanExpression", "LiteralInfinityExpression", "LiteralNullExpression", "LiteralNumericExpression", "LiteralRegExpExpression", "LiteralStringExpression", "Method", "Module", "NewExpression", "NewTargetExpression", "ObjectAssignmentTarget", "ObjectBinding", "ObjectExpression", "ReturnStatement", "Script", "Setter", "ShorthandProperty", "SpreadElement", "SpreadProperty", "StaticMemberAssignmentTarget", "StaticMemberExpression", "StaticPropertyName", "Super", "SwitchCase", "SwitchDefault", "SwitchStatement", "SwitchStatementWithDefault", "TemplateElement", "TemplateExpression", "ThisExpression", "ThrowStatement", "TryCatchStatement", "TryFinallyStatement", "UnaryExpression", "UpdateExpression", "VariableDeclaration", "VariableDeclarationStatement", "VariableDeclarator", "WhileStatement", "WithStatement", "YieldExpression", "YieldGeneratorExpression"]
  };

  var BinaryOperator = {
    typeName: "Enum",
    values: ["==", "!=", "===", "!==", "<", "<=", ">", ">=", "in", "instanceof", "<<", ">>", ">>>", "+", "-", "*", "/", "%", "**", ",", "||", "&&", "|", "^", "&"]
  };
  
  var CompoundAssignmentOperator = {
    typeName: "Enum",
    values: ["+=", "-=", "*=", "/=", "%=", "**=", "<<=", ">>=", ">>>=", "|=", "^=", "&="]
  };
  
  var UnaryOperator = {
    typeName: "Enum",
    values: ["+", "-", "!", "~", "typeof", "void", "delete"]
  };
  
  var UpdateOperator = {
    typeName: "Enum",
    values: ["++", "--"]
  };
  
  var VariableDeclarationKind = {
    typeName: "Enum",
    values: ["var", "let", "const"]
  };
  

  var ArrayAssignmentTarget = SPEC.ArrayAssignmentTarget = {};
  var ArrayBinding = SPEC.ArrayBinding = {};
  var ArrayExpression = SPEC.ArrayExpression = {};
  var ArrowExpression = SPEC.ArrowExpression = {};
  var AssignmentExpression = SPEC.AssignmentExpression = {};
  var AssignmentTargetIdentifier = SPEC.AssignmentTargetIdentifier = {};
  var AssignmentTargetPropertyIdentifier = SPEC.AssignmentTargetPropertyIdentifier = {};
  var AssignmentTargetPropertyProperty = SPEC.AssignmentTargetPropertyProperty = {};
  var AssignmentTargetWithDefault = SPEC.AssignmentTargetWithDefault = {};
  var AwaitExpression = SPEC.AwaitExpression = {};
  var BinaryExpression = SPEC.BinaryExpression = {};
  var BindingIdentifier = SPEC.BindingIdentifier = {};
  var BindingPropertyIdentifier = SPEC.BindingPropertyIdentifier = {};
  var BindingPropertyProperty = SPEC.BindingPropertyProperty = {};
  var BindingWithDefault = SPEC.BindingWithDefault = {};
  var Block = SPEC.Block = {};
  var BlockStatement = SPEC.BlockStatement = {};
  var BreakStatement = SPEC.BreakStatement = {};
  var CallExpression = SPEC.CallExpression = {};
  var CatchClause = SPEC.CatchClause = {};
  var ClassDeclaration = SPEC.ClassDeclaration = {};
  var ClassElement = SPEC.ClassElement = {};
  var ClassExpression = SPEC.ClassExpression = {};
  var CompoundAssignmentExpression = SPEC.CompoundAssignmentExpression = {};
  var ComputedMemberAssignmentTarget = SPEC.ComputedMemberAssignmentTarget = {};
  var ComputedMemberExpression = SPEC.ComputedMemberExpression = {};
  var ComputedPropertyName = SPEC.ComputedPropertyName = {};
  var ConditionalExpression = SPEC.ConditionalExpression = {};
  var ContinueStatement = SPEC.ContinueStatement = {};
  var DataProperty = SPEC.DataProperty = {};
  var DebuggerStatement = SPEC.DebuggerStatement = {};
  var Directive = SPEC.Directive = {};
  var DoWhileStatement = SPEC.DoWhileStatement = {};
  var EmptyStatement = SPEC.EmptyStatement = {};
  var Export = SPEC.Export = {};
  var ExportAllFrom = SPEC.ExportAllFrom = {};
  var ExportDefault = SPEC.ExportDefault = {};
  var ExportFrom = SPEC.ExportFrom = {};
  var ExportFromSpecifier = SPEC.ExportFromSpecifier = {};
  var ExportLocalSpecifier = SPEC.ExportLocalSpecifier = {};
  var ExportLocals = SPEC.ExportLocals = {};
  var ExpressionStatement = SPEC.ExpressionStatement = {};
  var ForAwaitStatement = SPEC.ForAwaitStatement = {};
  var ForInStatement = SPEC.ForInStatement = {};
  var ForOfStatement = SPEC.ForOfStatement = {};
  var ForStatement = SPEC.ForStatement = {};
  var FormalParameters = SPEC.FormalParameters = {};
  var FunctionBody = SPEC.FunctionBody = {};
  var FunctionDeclaration = SPEC.FunctionDeclaration = {};
  var FunctionExpression = SPEC.FunctionExpression = {};
  var Getter = SPEC.Getter = {};
  var IdentifierExpression = SPEC.IdentifierExpression = {};
  var IfStatement = SPEC.IfStatement = {};
  var Import = SPEC.Import = {};
  var ImportNamespace = SPEC.ImportNamespace = {};
  var ImportSpecifier = SPEC.ImportSpecifier = {};
  var LabeledStatement = SPEC.LabeledStatement = {};
  var LiteralBooleanExpression = SPEC.LiteralBooleanExpression = {};
  var LiteralInfinityExpression = SPEC.LiteralInfinityExpression = {};
  var LiteralNullExpression = SPEC.LiteralNullExpression = {};
  var LiteralNumericExpression = SPEC.LiteralNumericExpression = {};
  var LiteralRegExpExpression = SPEC.LiteralRegExpExpression = {};
  var LiteralStringExpression = SPEC.LiteralStringExpression = {};
  var Method = SPEC.Method = {};
  var Module = SPEC.Module = {};
  var NewExpression = SPEC.NewExpression = {};
  var NewTargetExpression = SPEC.NewTargetExpression = {};
  var ObjectAssignmentTarget = SPEC.ObjectAssignmentTarget = {};
  var ObjectBinding = SPEC.ObjectBinding = {};
  var ObjectExpression = SPEC.ObjectExpression = {};
  var ReturnStatement = SPEC.ReturnStatement = {};
  var Script = SPEC.Script = {};
  var Setter = SPEC.Setter = {};
  var ShorthandProperty = SPEC.ShorthandProperty = {};
  var SpreadElement = SPEC.SpreadElement = {};
  var SpreadProperty = SPEC.SpreadProperty = {};
  var StaticMemberAssignmentTarget = SPEC.StaticMemberAssignmentTarget = {};
  var StaticMemberExpression = SPEC.StaticMemberExpression = {};
  var StaticPropertyName = SPEC.StaticPropertyName = {};
  var Super = SPEC.Super = {};
  var SwitchCase = SPEC.SwitchCase = {};
  var SwitchDefault = SPEC.SwitchDefault = {};
  var SwitchStatement = SPEC.SwitchStatement = {};
  var SwitchStatementWithDefault = SPEC.SwitchStatementWithDefault = {};
  var TemplateElement = SPEC.TemplateElement = {};
  var TemplateExpression = SPEC.TemplateExpression = {};
  var ThisExpression = SPEC.ThisExpression = {};
  var ThrowStatement = SPEC.ThrowStatement = {};
  var TryCatchStatement = SPEC.TryCatchStatement = {};
  var TryFinallyStatement = SPEC.TryFinallyStatement = {};
  var UnaryExpression = SPEC.UnaryExpression = {};
  var UpdateExpression = SPEC.UpdateExpression = {};
  var VariableDeclaration = SPEC.VariableDeclaration = {};
  var VariableDeclarationStatement = SPEC.VariableDeclarationStatement = {};
  var VariableDeclarator = SPEC.VariableDeclarator = {};
  var WhileStatement = SPEC.WhileStatement = {};
  var WithStatement = SPEC.WithStatement = {};
  var YieldExpression = SPEC.YieldExpression = {};
  var YieldGeneratorExpression = SPEC.YieldGeneratorExpression = {};

  var MemberExpression = Union(ComputedMemberExpression, StaticMemberExpression);
  var AssignmentTargetProperty = Union(AssignmentTargetPropertyIdentifier, AssignmentTargetPropertyProperty);
  var Class = Union(ClassDeclaration, ClassExpression);
  var ExportDeclaration = Union(Export, ExportAllFrom, ExportDefault, ExportFrom, ExportLocals);
  var PropertyName = Union(ComputedPropertyName, StaticPropertyName);
  var Function = Union(FunctionDeclaration, FunctionExpression);
  var ImportDeclaration = Union(Import, ImportNamespace);
  var IterationStatement = Union(DoWhileStatement, ForAwaitStatement, ForInStatement, ForOfStatement, ForStatement, WhileStatement);
  var MemberAssignmentTarget = Union(ComputedMemberAssignmentTarget, StaticMemberAssignmentTarget);
  var BindingProperty = Union(BindingPropertyIdentifier, BindingPropertyProperty);
  var MethodDefinition = Union(Getter, Method, Setter);
  var Program = Union(Module, Script);
  var VariableReference = Union(AssignmentTargetIdentifier, BindingIdentifier, IdentifierExpression);
  var NamedObjectProperty = Union(DataProperty, MethodDefinition);
  var Expression = Union(ArrayExpression, ArrowExpression, AssignmentExpression, AwaitExpression, BinaryExpression, CallExpression, ClassExpression, CompoundAssignmentExpression, ConditionalExpression, FunctionExpression, IdentifierExpression, LiteralBooleanExpression, LiteralInfinityExpression, LiteralNullExpression, LiteralNumericExpression, LiteralRegExpExpression, LiteralStringExpression, MemberExpression, NewExpression, NewTargetExpression, ObjectExpression, TemplateExpression, ThisExpression, UnaryExpression, UpdateExpression, YieldExpression, YieldGeneratorExpression);
  var Statement = Union(BlockStatement, BreakStatement, ClassDeclaration, ContinueStatement, DebuggerStatement, EmptyStatement, ExpressionStatement, FunctionDeclaration, IfStatement, IterationStatement, LabeledStatement, ReturnStatement, SwitchStatement, SwitchStatementWithDefault, ThrowStatement, TryCatchStatement, TryFinallyStatement, VariableDeclarationStatement, WithStatement);
  var ObjectProperty = Union(NamedObjectProperty, ShorthandProperty, SpreadProperty);
  var Node = Union(ArrayAssignmentTarget, ArrayBinding, AssignmentTargetProperty, AssignmentTargetWithDefault, BindingProperty, BindingWithDefault, Block, CatchClause, ClassElement, Directive, ExportDeclaration, ExportFromSpecifier, ExportLocalSpecifier, Expression, FormalParameters, FunctionBody, ImportDeclaration, ImportSpecifier, MemberAssignmentTarget, ObjectAssignmentTarget, ObjectBinding, ObjectProperty, Program, PropertyName, SpreadElement, Statement, Super, SwitchCase, SwitchDefault, TemplateElement, VariableDeclaration, VariableDeclarator, VariableReference);

  ArrayAssignmentTarget.typeName = "ArrayAssignmentTarget";
  ArrayAssignmentTarget.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ArrayAssignmentTarget" },
    { name: "elements", type: List(Maybe(Union(AssignmentTargetWithDefault, Union(Union(ArrayAssignmentTarget, ObjectAssignmentTarget), Union(AssignmentTargetIdentifier, MemberAssignmentTarget))))) },
    { name: "rest", type: Maybe(Union(Union(ArrayAssignmentTarget, ObjectAssignmentTarget), Union(AssignmentTargetIdentifier, MemberAssignmentTarget))) }
  ];

  ArrayBinding.typeName = "ArrayBinding";
  ArrayBinding.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ArrayBinding" },
    { name: "elements", type: List(Maybe(Union(BindingWithDefault, Union(BindingIdentifier, Union(ArrayBinding, ObjectBinding))))) },
    { name: "rest", type: Maybe(Union(BindingIdentifier, Union(ArrayBinding, ObjectBinding))) }
  ];

  ArrayExpression.typeName = "ArrayExpression";
  ArrayExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ArrayExpression" },
    { name: "elements", type: List(Maybe(Union(Expression, SpreadElement))) }
  ];

  ArrowExpression.typeName = "ArrowExpression";
  ArrowExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ArrowExpression" },
    { name: "isAsync", type: BOOLEAN },
    { name: "params", type: FormalParameters },
    { name: "body", type: Union(Expression, FunctionBody) }
  ];

  AssignmentExpression.typeName = "AssignmentExpression";
  AssignmentExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "AssignmentExpression" },
    { name: "binding", type: Union(Union(ArrayAssignmentTarget, ObjectAssignmentTarget), Union(AssignmentTargetIdentifier, MemberAssignmentTarget)) },
    { name: "expression", type: Expression }
  ];

  AssignmentTargetIdentifier.typeName = "AssignmentTargetIdentifier";
  AssignmentTargetIdentifier.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "AssignmentTargetIdentifier" },
    { name: "name", type: STRING }
  ];

  AssignmentTargetPropertyIdentifier.typeName = "AssignmentTargetPropertyIdentifier";
  AssignmentTargetPropertyIdentifier.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "AssignmentTargetPropertyIdentifier" },
    { name: "binding", type: AssignmentTargetIdentifier },
    { name: "init", type: Maybe(Expression) }
  ];

  AssignmentTargetPropertyProperty.typeName = "AssignmentTargetPropertyProperty";
  AssignmentTargetPropertyProperty.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "AssignmentTargetPropertyProperty" },
    { name: "name", type: PropertyName },
    { name: "binding", type: Union(AssignmentTargetWithDefault, Union(Union(ArrayAssignmentTarget, ObjectAssignmentTarget), Union(AssignmentTargetIdentifier, MemberAssignmentTarget))) }
  ];

  AssignmentTargetWithDefault.typeName = "AssignmentTargetWithDefault";
  AssignmentTargetWithDefault.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "AssignmentTargetWithDefault" },
    { name: "binding", type: Union(Union(ArrayAssignmentTarget, ObjectAssignmentTarget), Union(AssignmentTargetIdentifier, MemberAssignmentTarget)) },
    { name: "init", type: Expression }
  ];

  AwaitExpression.typeName = "AwaitExpression";
  AwaitExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "AwaitExpression" },
    { name: "expression", type: Expression }
  ];

  BinaryExpression.typeName = "BinaryExpression";
  BinaryExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "BinaryExpression" },
    { name: "left", type: Expression },
    { name: "operator", type: BinaryOperator },
    { name: "right", type: Expression }
  ];

  BindingIdentifier.typeName = "BindingIdentifier";
  BindingIdentifier.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "BindingIdentifier" },
    { name: "name", type: STRING }
  ];

  BindingPropertyIdentifier.typeName = "BindingPropertyIdentifier";
  BindingPropertyIdentifier.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "BindingPropertyIdentifier" },
    { name: "binding", type: BindingIdentifier },
    { name: "init", type: Maybe(Expression) }
  ];

  BindingPropertyProperty.typeName = "BindingPropertyProperty";
  BindingPropertyProperty.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "BindingPropertyProperty" },
    { name: "name", type: PropertyName },
    { name: "binding", type: Union(BindingWithDefault, Union(BindingIdentifier, Union(ArrayBinding, ObjectBinding))) }
  ];

  BindingWithDefault.typeName = "BindingWithDefault";
  BindingWithDefault.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "BindingWithDefault" },
    { name: "binding", type: Union(BindingIdentifier, Union(ArrayBinding, ObjectBinding)) },
    { name: "init", type: Expression }
  ];

  Block.typeName = "Block";
  Block.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "Block" },
    { name: "statements", type: List(Statement) }
  ];

  BlockStatement.typeName = "BlockStatement";
  BlockStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "BlockStatement" },
    { name: "block", type: Block }
  ];

  BreakStatement.typeName = "BreakStatement";
  BreakStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "BreakStatement" },
    { name: "label", type: Maybe(STRING) }
  ];

  CallExpression.typeName = "CallExpression";
  CallExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "CallExpression" },
    { name: "callee", type: Union(Expression, Super) },
    { name: "arguments", type: List(Union(Expression, SpreadElement)) }
  ];

  CatchClause.typeName = "CatchClause";
  CatchClause.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "CatchClause" },
    { name: "binding", type: Union(BindingIdentifier, Union(ArrayBinding, ObjectBinding)) },
    { name: "body", type: Block }
  ];

  ClassDeclaration.typeName = "ClassDeclaration";
  ClassDeclaration.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ClassDeclaration" },
    { name: "name", type: BindingIdentifier },
    { name: "super", type: Maybe(Expression) },
    { name: "elements", type: List(ClassElement) }
  ];

  ClassElement.typeName = "ClassElement";
  ClassElement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ClassElement" },
    { name: "isStatic", type: BOOLEAN },
    { name: "method", type: MethodDefinition }
  ];

  ClassExpression.typeName = "ClassExpression";
  ClassExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ClassExpression" },
    { name: "name", type: Maybe(BindingIdentifier) },
    { name: "super", type: Maybe(Expression) },
    { name: "elements", type: List(ClassElement) }
  ];

  CompoundAssignmentExpression.typeName = "CompoundAssignmentExpression";
  CompoundAssignmentExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "CompoundAssignmentExpression" },
    { name: "binding", type: Union(AssignmentTargetIdentifier, MemberAssignmentTarget) },
    { name: "operator", type: CompoundAssignmentOperator },
    { name: "expression", type: Expression }
  ];

  ComputedMemberAssignmentTarget.typeName = "ComputedMemberAssignmentTarget";
  ComputedMemberAssignmentTarget.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ComputedMemberAssignmentTarget" },
    { name: "object", type: Union(Expression, Super) },
    { name: "expression", type: Expression }
  ];

  ComputedMemberExpression.typeName = "ComputedMemberExpression";
  ComputedMemberExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ComputedMemberExpression" },
    { name: "object", type: Union(Expression, Super) },
    { name: "expression", type: Expression }
  ];

  ComputedPropertyName.typeName = "ComputedPropertyName";
  ComputedPropertyName.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ComputedPropertyName" },
    { name: "expression", type: Expression }
  ];

  ConditionalExpression.typeName = "ConditionalExpression";
  ConditionalExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ConditionalExpression" },
    { name: "test", type: Expression },
    { name: "consequent", type: Expression },
    { name: "alternate", type: Expression }
  ];

  ContinueStatement.typeName = "ContinueStatement";
  ContinueStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ContinueStatement" },
    { name: "label", type: Maybe(STRING) }
  ];

  DataProperty.typeName = "DataProperty";
  DataProperty.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "DataProperty" },
    { name: "name", type: PropertyName },
    { name: "expression", type: Expression }
  ];

  DebuggerStatement.typeName = "DebuggerStatement";
  DebuggerStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "DebuggerStatement" }
  ];

  Directive.typeName = "Directive";
  Directive.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "Directive" },
    { name: "rawValue", type: STRING }
  ];

  DoWhileStatement.typeName = "DoWhileStatement";
  DoWhileStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "DoWhileStatement" },
    { name: "body", type: Statement },
    { name: "test", type: Expression }
  ];

  EmptyStatement.typeName = "EmptyStatement";
  EmptyStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "EmptyStatement" }
  ];

  Export.typeName = "Export";
  Export.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "Export" },
    { name: "declaration", type: Union(ClassDeclaration, FunctionDeclaration, VariableDeclaration) }
  ];

  ExportAllFrom.typeName = "ExportAllFrom";
  ExportAllFrom.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ExportAllFrom" },
    { name: "moduleSpecifier", type: STRING }
  ];

  ExportDefault.typeName = "ExportDefault";
  ExportDefault.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ExportDefault" },
    { name: "body", type: Union(ClassDeclaration, Expression, FunctionDeclaration) }
  ];

  ExportFrom.typeName = "ExportFrom";
  ExportFrom.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ExportFrom" },
    { name: "namedExports", type: List(ExportFromSpecifier) },
    { name: "moduleSpecifier", type: STRING }
  ];

  ExportFromSpecifier.typeName = "ExportFromSpecifier";
  ExportFromSpecifier.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ExportFromSpecifier" },
    { name: "name", type: STRING },
    { name: "exportedName", type: Maybe(STRING) }
  ];

  ExportLocalSpecifier.typeName = "ExportLocalSpecifier";
  ExportLocalSpecifier.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ExportLocalSpecifier" },
    { name: "name", type: IdentifierExpression },
    { name: "exportedName", type: Maybe(STRING) }
  ];

  ExportLocals.typeName = "ExportLocals";
  ExportLocals.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ExportLocals" },
    { name: "namedExports", type: List(ExportLocalSpecifier) }
  ];

  ExpressionStatement.typeName = "ExpressionStatement";
  ExpressionStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ExpressionStatement" },
    { name: "expression", type: Expression }
  ];

  ForAwaitStatement.typeName = "ForAwaitStatement";
  ForAwaitStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ForAwaitStatement" },
    { name: "left", type: Union(Union(Union(ArrayAssignmentTarget, ObjectAssignmentTarget), Union(AssignmentTargetIdentifier, MemberAssignmentTarget)), VariableDeclaration) },
    { name: "right", type: Expression },
    { name: "body", type: Statement }
  ];

  ForInStatement.typeName = "ForInStatement";
  ForInStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ForInStatement" },
    { name: "left", type: Union(Union(Union(ArrayAssignmentTarget, ObjectAssignmentTarget), Union(AssignmentTargetIdentifier, MemberAssignmentTarget)), VariableDeclaration) },
    { name: "right", type: Expression },
    { name: "body", type: Statement }
  ];

  ForOfStatement.typeName = "ForOfStatement";
  ForOfStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ForOfStatement" },
    { name: "left", type: Union(Union(Union(ArrayAssignmentTarget, ObjectAssignmentTarget), Union(AssignmentTargetIdentifier, MemberAssignmentTarget)), VariableDeclaration) },
    { name: "right", type: Expression },
    { name: "body", type: Statement }
  ];

  ForStatement.typeName = "ForStatement";
  ForStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ForStatement" },
    { name: "init", type: Maybe(Union(Expression, VariableDeclaration)) },
    { name: "test", type: Maybe(Expression) },
    { name: "update", type: Maybe(Expression) },
    { name: "body", type: Statement }
  ];

  FormalParameters.typeName = "FormalParameters";
  FormalParameters.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "FormalParameters" },
    { name: "items", type: List(Union(BindingWithDefault, Union(BindingIdentifier, Union(ArrayBinding, ObjectBinding)))) },
    { name: "rest", type: Maybe(Union(BindingIdentifier, Union(ArrayBinding, ObjectBinding))) }
  ];

  FunctionBody.typeName = "FunctionBody";
  FunctionBody.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "FunctionBody" },
    { name: "directives", type: List(Directive) },
    { name: "statements", type: List(Statement) }
  ];

  FunctionDeclaration.typeName = "FunctionDeclaration";
  FunctionDeclaration.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "FunctionDeclaration" },
    { name: "isAsync", type: BOOLEAN },
    { name: "isGenerator", type: BOOLEAN },
    { name: "name", type: BindingIdentifier },
    { name: "params", type: FormalParameters },
    { name: "body", type: FunctionBody }
  ];

  FunctionExpression.typeName = "FunctionExpression";
  FunctionExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "FunctionExpression" },
    { name: "isAsync", type: BOOLEAN },
    { name: "isGenerator", type: BOOLEAN },
    { name: "name", type: Maybe(BindingIdentifier) },
    { name: "params", type: FormalParameters },
    { name: "body", type: FunctionBody }
  ];

  Getter.typeName = "Getter";
  Getter.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "Getter" },
    { name: "name", type: PropertyName },
    { name: "body", type: FunctionBody }
  ];

  IdentifierExpression.typeName = "IdentifierExpression";
  IdentifierExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "IdentifierExpression" },
    { name: "name", type: STRING }
  ];

  IfStatement.typeName = "IfStatement";
  IfStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "IfStatement" },
    { name: "test", type: Expression },
    { name: "consequent", type: Statement },
    { name: "alternate", type: Maybe(Statement) }
  ];

  Import.typeName = "Import";
  Import.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "Import" },
    { name: "defaultBinding", type: Maybe(BindingIdentifier) },
    { name: "namedImports", type: List(ImportSpecifier) },
    { name: "moduleSpecifier", type: STRING }
  ];

  ImportNamespace.typeName = "ImportNamespace";
  ImportNamespace.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ImportNamespace" },
    { name: "defaultBinding", type: Maybe(BindingIdentifier) },
    { name: "namespaceBinding", type: BindingIdentifier },
    { name: "moduleSpecifier", type: STRING }
  ];

  ImportSpecifier.typeName = "ImportSpecifier";
  ImportSpecifier.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ImportSpecifier" },
    { name: "name", type: Maybe(STRING) },
    { name: "binding", type: BindingIdentifier }
  ];

  LabeledStatement.typeName = "LabeledStatement";
  LabeledStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "LabeledStatement" },
    { name: "label", type: STRING },
    { name: "body", type: Statement }
  ];

  LiteralBooleanExpression.typeName = "LiteralBooleanExpression";
  LiteralBooleanExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "LiteralBooleanExpression" },
    { name: "value", type: BOOLEAN }
  ];

  LiteralInfinityExpression.typeName = "LiteralInfinityExpression";
  LiteralInfinityExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "LiteralInfinityExpression" }
  ];

  LiteralNullExpression.typeName = "LiteralNullExpression";
  LiteralNullExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "LiteralNullExpression" }
  ];

  LiteralNumericExpression.typeName = "LiteralNumericExpression";
  LiteralNumericExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "LiteralNumericExpression" },
    { name: "value", type: DOUBLE }
  ];

  LiteralRegExpExpression.typeName = "LiteralRegExpExpression";
  LiteralRegExpExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "LiteralRegExpExpression" },
    { name: "pattern", type: STRING },
    { name: "global", type: BOOLEAN },
    { name: "ignoreCase", type: BOOLEAN },
    { name: "multiLine", type: BOOLEAN },
    { name: "dotAll", type: BOOLEAN },
    { name: "unicode", type: BOOLEAN },
    { name: "sticky", type: BOOLEAN }
  ];

  LiteralStringExpression.typeName = "LiteralStringExpression";
  LiteralStringExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "LiteralStringExpression" },
    { name: "value", type: STRING }
  ];

  Method.typeName = "Method";
  Method.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "Method" },
    { name: "isAsync", type: BOOLEAN },
    { name: "isGenerator", type: BOOLEAN },
    { name: "name", type: PropertyName },
    { name: "params", type: FormalParameters },
    { name: "body", type: FunctionBody }
  ];

  Module.typeName = "Module";
  Module.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "Module" },
    { name: "directives", type: List(Directive) },
    { name: "items", type: List(Union(ExportDeclaration, ImportDeclaration, Statement)) }
  ];

  NewExpression.typeName = "NewExpression";
  NewExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "NewExpression" },
    { name: "callee", type: Expression },
    { name: "arguments", type: List(Union(Expression, SpreadElement)) }
  ];

  NewTargetExpression.typeName = "NewTargetExpression";
  NewTargetExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "NewTargetExpression" }
  ];

  ObjectAssignmentTarget.typeName = "ObjectAssignmentTarget";
  ObjectAssignmentTarget.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ObjectAssignmentTarget" },
    { name: "properties", type: List(AssignmentTargetProperty) },
    { name: "rest", type: Maybe(Union(Union(ArrayAssignmentTarget, ObjectAssignmentTarget), Union(AssignmentTargetIdentifier, MemberAssignmentTarget))) }
  ];

  ObjectBinding.typeName = "ObjectBinding";
  ObjectBinding.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ObjectBinding" },
    { name: "properties", type: List(BindingProperty) },
    { name: "rest", type: Maybe(Union(BindingIdentifier, Union(ArrayBinding, ObjectBinding))) }
  ];

  ObjectExpression.typeName = "ObjectExpression";
  ObjectExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ObjectExpression" },
    { name: "properties", type: List(ObjectProperty) }
  ];

  ReturnStatement.typeName = "ReturnStatement";
  ReturnStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ReturnStatement" },
    { name: "expression", type: Maybe(Expression) }
  ];

  Script.typeName = "Script";
  Script.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "Script" },
    { name: "directives", type: List(Directive) },
    { name: "statements", type: List(Statement) }
  ];

  Setter.typeName = "Setter";
  Setter.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "Setter" },
    { name: "name", type: PropertyName },
    { name: "param", type: Union(BindingWithDefault, Union(BindingIdentifier, Union(ArrayBinding, ObjectBinding))) },
    { name: "body", type: FunctionBody }
  ];

  ShorthandProperty.typeName = "ShorthandProperty";
  ShorthandProperty.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ShorthandProperty" },
    { name: "name", type: IdentifierExpression }
  ];

  SpreadElement.typeName = "SpreadElement";
  SpreadElement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "SpreadElement" },
    { name: "expression", type: Expression }
  ];

  SpreadProperty.typeName = "SpreadProperty";
  SpreadProperty.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "SpreadProperty" },
    { name: "expression", type: Expression }
  ];

  StaticMemberAssignmentTarget.typeName = "StaticMemberAssignmentTarget";
  StaticMemberAssignmentTarget.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "StaticMemberAssignmentTarget" },
    { name: "object", type: Union(Expression, Super) },
    { name: "property", type: STRING }
  ];

  StaticMemberExpression.typeName = "StaticMemberExpression";
  StaticMemberExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "StaticMemberExpression" },
    { name: "object", type: Union(Expression, Super) },
    { name: "property", type: STRING }
  ];

  StaticPropertyName.typeName = "StaticPropertyName";
  StaticPropertyName.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "StaticPropertyName" },
    { name: "value", type: STRING }
  ];

  Super.typeName = "Super";
  Super.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "Super" }
  ];

  SwitchCase.typeName = "SwitchCase";
  SwitchCase.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "SwitchCase" },
    { name: "test", type: Expression },
    { name: "consequent", type: List(Statement) }
  ];

  SwitchDefault.typeName = "SwitchDefault";
  SwitchDefault.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "SwitchDefault" },
    { name: "consequent", type: List(Statement) }
  ];

  SwitchStatement.typeName = "SwitchStatement";
  SwitchStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "SwitchStatement" },
    { name: "discriminant", type: Expression },
    { name: "cases", type: List(SwitchCase) }
  ];

  SwitchStatementWithDefault.typeName = "SwitchStatementWithDefault";
  SwitchStatementWithDefault.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "SwitchStatementWithDefault" },
    { name: "discriminant", type: Expression },
    { name: "preDefaultCases", type: List(SwitchCase) },
    { name: "defaultCase", type: SwitchDefault },
    { name: "postDefaultCases", type: List(SwitchCase) }
  ];

  TemplateElement.typeName = "TemplateElement";
  TemplateElement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "TemplateElement" },
    { name: "rawValue", type: STRING }
  ];

  TemplateExpression.typeName = "TemplateExpression";
  TemplateExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "TemplateExpression" },
    { name: "tag", type: Maybe(Expression) },
    { name: "elements", type: List(Union(Expression, TemplateElement)) }
  ];

  ThisExpression.typeName = "ThisExpression";
  ThisExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ThisExpression" }
  ];

  ThrowStatement.typeName = "ThrowStatement";
  ThrowStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "ThrowStatement" },
    { name: "expression", type: Expression }
  ];

  TryCatchStatement.typeName = "TryCatchStatement";
  TryCatchStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "TryCatchStatement" },
    { name: "body", type: Block },
    { name: "catchClause", type: CatchClause }
  ];

  TryFinallyStatement.typeName = "TryFinallyStatement";
  TryFinallyStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "TryFinallyStatement" },
    { name: "body", type: Block },
    { name: "catchClause", type: Maybe(CatchClause) },
    { name: "finalizer", type: Block }
  ];

  UnaryExpression.typeName = "UnaryExpression";
  UnaryExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "UnaryExpression" },
    { name: "operator", type: UnaryOperator },
    { name: "operand", type: Expression }
  ];

  UpdateExpression.typeName = "UpdateExpression";
  UpdateExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "UpdateExpression" },
    { name: "isPrefix", type: BOOLEAN },
    { name: "operator", type: UpdateOperator },
    { name: "operand", type: Union(AssignmentTargetIdentifier, MemberAssignmentTarget) }
  ];

  VariableDeclaration.typeName = "VariableDeclaration";
  VariableDeclaration.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "VariableDeclaration" },
    { name: "kind", type: VariableDeclarationKind },
    { name: "declarators", type: List(VariableDeclarator) }
  ];

  VariableDeclarationStatement.typeName = "VariableDeclarationStatement";
  VariableDeclarationStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "VariableDeclarationStatement" },
    { name: "declaration", type: VariableDeclaration }
  ];

  VariableDeclarator.typeName = "VariableDeclarator";
  VariableDeclarator.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "VariableDeclarator" },
    { name: "binding", type: Union(BindingIdentifier, Union(ArrayBinding, ObjectBinding)) },
    { name: "init", type: Maybe(Expression) }
  ];

  WhileStatement.typeName = "WhileStatement";
  WhileStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "WhileStatement" },
    { name: "test", type: Expression },
    { name: "body", type: Statement }
  ];

  WithStatement.typeName = "WithStatement";
  WithStatement.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "WithStatement" },
    { name: "object", type: Expression },
    { name: "body", type: Statement }
  ];

  YieldExpression.typeName = "YieldExpression";
  YieldExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "YieldExpression" },
    { name: "expression", type: Maybe(Expression) }
  ];

  YieldGeneratorExpression.typeName = "YieldGeneratorExpression";
  YieldGeneratorExpression.fields = [
    { name: "type", type: Const(TYPE_INDICATOR), value: "YieldGeneratorExpression" },
    { name: "expression", type: Expression }
  ];

  return SPEC;
}());
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(dist);

export default __pika_web_default_export_for_treeshaking__;
