export async function cmsService({ query , variables }) {
  const TOKEN = process.env.DATO_TOKEN;
  const globalQuery = `
  query {
    globalFooter{
      description
    }
  }
`;

  try {
    const pageContentResponse = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": "Bearer " + TOKEN,
      },
      body: JSON.stringify({
        query,
        variables
      }),
    }).then(async (resp) => {
      const body = await resp.json();
      if(!body.errors) return body;
      throw new Error(JSON.stringify(body))
    })
    const globalContentResponse = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": "Bearer " + TOKEN,
      },
      body: JSON.stringify({
        query: globalQuery,
      }),
    }).then(async (resp) => {
      const body = await resp.json();
      if(!body.errors) return body;
      throw new Error(JSON.stringify(body))
    })
    return {
      data: {
        ...pageContentResponse.data,
        globalContent: {
          ...globalContentResponse.data
        }
      }
    };
  } catch (err) {
    throw new Error(err.message);
  }


}
