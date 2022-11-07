import { cmsSections } from "../../components/cmssections";
import { getCMSContent } from "./cmsProvider";

export default function CMSSectionRender({ pageName }) {
  const sections = getCMSContent(`${pageName}.pageContent[0].section`);

  return sections.map((sectionProps) => {
    const Component = cmsSections[sectionProps.componentname];
    if (!Component) return null;
    return <Component key={sectionProps.id} {...sectionProps} />;
  });
}
