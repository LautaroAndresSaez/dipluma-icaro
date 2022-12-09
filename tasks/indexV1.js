const edit = require("./commands/edit.js");
const filter = require("./commands/filter.js");
const find = require("./commands/find.js");
const list = require("./commands/list.js");
const returnTask = require("./commands/return.js");

const args = process.argv;

const func = args[0];
const values = args.slice(0);

let fn;

switch (func) {
  case "edit":
    fn = edit;
    break;
  case "filter":
    fn = filter;
    break;
  case "find":
    fn = find;
    break;
  case "list":
    fn = list;
    break;
  case "return":
    fn = returnTask;
    break;
  default:
    throw new Error("Debe dar una opcion como: edit-filter-find-list-return");
}

const result = fn(values[0], values[1]);

console.log(result);
