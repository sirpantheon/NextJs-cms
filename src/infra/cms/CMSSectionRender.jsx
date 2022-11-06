import { getCMSContent } from "./cmsProvider"

export default function CMSSectionRender({pageName}){

  const sections = getCMSContent(`${pageName}.pageContent[0].section`);

  return sections.map((sectionProps)=>{
    console.log(sectionProps)
    return(
      <p key={sectionProps.id}>
        {sectionProps.componentname}
      </p>
    )
  })
}
