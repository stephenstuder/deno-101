import Ask from "https://deno.land/x/ask@1.0.6/mod.ts";

const ask = new Ask()

const answers = await ask.prompt([
    {
    name: "customer",
    type: "input",
    message: "Customer Name:",
    },
    {
    name: "freelancer: string",
    type: "input",
    message: "Freelancer Name:",
    },
    {
    name: "date",
    type: "input",
    message: "Date:",
    },
    {
    name: "services",
    type: "input",
    message: "Services:",
    },
])

const { customer, date, freelancer, services} = answers

const contractTemplate = await Deno.readTextFile('./template.txt')

const contract = contractTemplate
    //@ts-ignore
    .replaceAll("[customer]", customer)
    //@ts-ignore
    .replaceAll("[freelancer]", freelancer)
    //@ts-ignore
    .replaceAll("[date]", date)
    //@ts-ignore
    .replaceAll("[services]", services)

await Deno.writeTextFile(`${date}-contract.txt`, contract)

console.log('contract complete')