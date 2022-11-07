import { pageHOC } from "../../components/wrappers/pageHOC";
import CMSSectionRender from "../../infra/cms/CMSSectionRender";
import { cmsService } from "../../infra/cms/cmsService";

export async function getStaticProps() {
  const { data: cmsContent } = await cmsService({
    query: `
    query {
      pageFaq{
        pageContent{
          section{
            componentname: __typename
            ...on CommonSeoBlockRecord{
              id
              title
            }
            ...on CommonMenuRecord{
              id
            }
            ...on CommonFooterRecord{
              id
            }
            ...on PagefaqDisplayQuestionRecord{
              id
              category{
                title
                id
                questions{
                  title
                  id
                }
              }
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
      categories: [
        {
          id: "b4bb5090",
          name: "Por onde começar",
          questions: [
            {
              id: "f138c88d",
              name: "Consigo entrar no mercado de trabalho com os cursos da Alura?",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
          ],
        },
        {
          id: "c4bb5090",
          name: "Formações e Projetos",
          questions: [
            {
              id: "h138c88d",
              name: "Qual é a diferença do certificado de participação para o certificado de conclusão de formação?",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
          ],
        },
      ],
    },
  };
}

function FAQAllQuestionsScreen() {
  return <CMSSectionRender pageName="pageFaq" />;
}

// function FAQAllQuestionsScreen({ categories }) {
//   return (
//     <>
//       <Head>
//         <title>FAQ - Alura</title>
//       </Head>

//       <Menu />

//       

//       <Footer />
//     </>
//   )
// }

export default pageHOC(FAQAllQuestionsScreen);
