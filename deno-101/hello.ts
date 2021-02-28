import {serve} from 'https://deno.land/std@0.88.0/http/server.ts'

const s = serve({port: 8080})

console.log('Starting on port 8080');

for await ( const req of s ) {
    req.respond({
        body: "<h1>Hello World</h1>"
    })
}
