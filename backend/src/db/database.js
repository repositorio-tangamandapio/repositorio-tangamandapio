import { MongoClient, ServerApiVersion } from "mongodb";
const uri =
  "mongodb+srv://usuario:Queteimporta@agrofsa.edhti.mongodb.net/?retryWrites=true&w=majority&appName=agrofsa";

export function cliente() {
  return new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: false,
      deprecationErrors: true,
    },
  });
}
async function run() {
  const client = cliente();
  await client.connect();
  const resposta = await client.db("admin").command({ ping: 1 });
  console.log(resposta);
}
//Esto es para testear si funca la base de datos
run();
