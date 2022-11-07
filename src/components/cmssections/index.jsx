import {Menu} from '../commons/Menu';
import {Footer} from '../commons/Footer';
import SeoBlock from './seoBlock';
import PageHomeHerosectionRecord from './pageHomeHerosectionRecord';


export const cmsSections = {
  CommonSeoBlockRecord:(props)=> <SeoBlock {...props} />,
  CommonMenuRecord:(props)=> <Menu {...props}/>,
  PageHomeHerosectionRecord: PageHomeHerosectionRecord,
  CommonFooterRecord:(props)=> <Footer {...props} />,
};
