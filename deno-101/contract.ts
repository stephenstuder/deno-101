import { Ask } from "./mod.ts"

const ask = new Ask()
const answers = await ask.prompt([
  {
    name: "customer",
    type: "input",
    message: "Who is the customer?",
  },
  {
    name: "freelancer",
    type: "input",
    message: "Who is the freelancer?",
  },
  {
    name: "date",
    type: "input",
    message: "Date active?",
  },
  {
    name: "services",
    type: "input",
    message: "What are the services provided?",
  },
])
const { customer, date, freelancer, services } = answers

const contractTemplate = await Deno.readTextFile("./template.txt")
const contract = contractTemplate
  .replaceAll("[customer]", customer)
  .replaceAll("[date]", date)
  .replaceAll("[freelancer]", freelancer)
  .replaceAll("[services]", services)

await Deno.writeTextFile(`${date}-contract.txt`, contract)

console.log("contract complete")
