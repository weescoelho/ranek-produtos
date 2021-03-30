// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const API_BASE = 'https://ranekapi.origamid.dev/json/api/produto'

export async function basicFetch(){
  const data = await fetch(API_BASE);
  const json = await data.json();
  return json;
}

export async function productFetch(product){
  const data = await fetch(`${API_BASE}/${product}`);
  const json = await data.json();
  return json;
}