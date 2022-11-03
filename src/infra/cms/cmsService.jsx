export async function cmsService({ query }) {
  const TOKEN = process.env.DATO_TOKEN;

  try {
    const pageContentResponse = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": "Bearer " + TOKEN,
      },
      body: JSON.stringify({
        query,
      }),
    }).then(async (resp) => {
      const body = await resp.json();
      if(!body.errors) return body;

      throw new Error(JSON.stringify(body))
    });
    console.log(pageContentResponse);
    return {
      data: pageContentResponse.data,
    };
  } catch (err) {
    throw new Error(err.message);
  }
}
