import Head from "next/head";
import { Menu } from "../../components/commons/Menu";
import { Footer } from "../../components/commons/Footer";
import { theme, Box, Button, Text, Image } from "../../theme/components";
import { pageHOC } from "../../components/wrappers/pageHOC";
import { cmsService } from "../../infra/cms/cmsService";
import CMSSectionRender from "../../infra/cms/CMSSectionRender";

export async function getStaticProps() {
  const { data: cmsContent } = await cmsService({
    query: `
    query {
      pageHome{
        pageContent{
          section{
            componentname:__typename
            ...on CommonSeoBlockRecord{
              id
              title
            }
            ...on CommonMenuRecord{
              id
            }
            ...on PageHomeHerosectionRecord{
              id
              description
              title
              ctalink
              ctatext
            }
            ...on CommonFooterRecord{
              id
            }
          }
        }
      }
    }
    `,
  });
  return {
    props: {
      cmsContent,
    },
  };
}

function HomeScreen(){
  return(
    <CMSSectionRender pageName="pageHome" />
  )
}

// function HomeScreen() {
//   return (
//     <>
//       <Head>
//         <title>Home - Alura</title>
//       </Head>

//       <Menu />

//       

//       <Footer />
//     </>
//   );
// }

export default pageHOC(HomeScreen);
