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

function HomeScreen() {
  return <CMSSectionRender pageName="pageHome" />;
}

export default pageHOC(HomeScreen);
