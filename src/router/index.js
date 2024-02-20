import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import FAQ from "../components/FAQ.vue";
import Career from "../components/Career.vue";
import Testimonials from "../components/Testimonials.vue";

//Web Development Services
import FrontendDevelopment from "../components/FrontendDevelopment.vue";
import BackendDevelopment from "../components/BackendDevelopment.vue";
import DataBaseManagement from "../components/DataBaseManagement.vue";
import ResponsiveDesign from "../components/ResponsiveDesign.vue";
import ProgressiveWebApps from "../components/ProgressiveWebApps.vue";
import ECommerce from "../components/ECommerce.vue";

//Mobile Development Services
import AndroidDevelopment from "../components/AndroidDevelopment.vue";
import IOSDevelopment from "../components/IOSDevelopment.vue";
import CrossPlatformDevelopment from "../components/CrossPlatformDevelopment.vue";

//Devops
import Devops from "../components/Devops.vue";




//Technical Assignment
import ITAssignment from "../components/ITAssignment.vue";
import ContentManagement from "../components/ContentManagement.vue";
import ComputerScienceAssignment from "../components/ComputerScienceAssignment.vue";
import ComputerNetworkAssignment from "../components/ComputerNetworkAssignment.vue";
import MatlabAssignment from "../components/MatlabAssignment.vue";
import TableauAssignment from "../components/TableauAssignment.vue";
import SPSSAssignment from "../components/SPSSAssignment.vue";
import DataBaseManagementAssignment from "../components/DataBaseManagementAssignment.vue";
import CloudComputingAssignment from "../components/CloudComputingAssignment.vue";
import NetworkSecurityAssignment from "../components/NetworkSecurityAssignment.vue";
import MachineLearningAssignment from "../components/MachineLearningAssignment.vue";
import ArtificialIntelligenceAssignment from "../components/ArtificialIntelligenceAssignment.vue";
import DataAnalysisAssignment from "../components/DataAnalysisAssignment.vue";
import ExcelAssignment from "../components/ExcelAssignment.vue";
import CyberSecurityAssignment from "../components/CyberSecurityAssignment.vue";
import DataBaseDesignAssignment from "../components/DataBaseDesignAssignment.vue";
import IOTAssignment from "../components/IOTAssignment.vue";
import DataVisualizationAssignment from "../components/DataVisualizationAssignment.vue";
import PowerBIAssignment from "../components/PowerBIAssignment.vue";
import BlockChainAssignment from "../components/BlockChainAssignment.vue";
import DataScience from "../components/DataScience.vue";
//Programming
import PythonProgrammingAssignment from "../components/PythonProgrammingAssignment.vue";
import CProgrammingAssignment from "../components/CProgrammingAssignment.vue";
import JavaAssignment from "../components/JavaAssignment.vue";
import RAssignment from "../components/RAssignment.vue";
import JavascriptAssignment from "../components/JavascriptAssignment.vue";
import CodingAssignment from "../components/CodingAssignment.vue";
import CryptographicAssignment from "../components/CryptographicAssignment.vue";
import DataStructureAssignment from "../components/DataStructureAssignment.vue";
import GoAssignment from "../components/GoAssignment.vue";


//Cloud Services
import Cloud from "../components/Cloud.vue";

//Job Interview Support
import JobInterviewSupport from "../components/JobInterviewSupport.vue";


//Others
import Sample from "../components/Sample.vue";
import Experts from "../components/Experts.vue";
import Blog from "../components/Blog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "About",
    component: About,
  },
  {
    path: "/faqs",
    name: "FAQ",
    component: FAQ,
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/sample",
    name: "Sample",
    component: Sample,
  },
  {
    path: "/experts",
    name: "Experts",
    component: Experts,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/careers",
    name: "Career",
    component: Career,
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials,
  },
  //Web Development services
  {
    path: "/front-end-development-services",
    name: "FrontendDevelopment",
    component: FrontendDevelopment,
  },
  {
    path: "/back-end-development-services",
    name: "BackendDevelopment",
    component: BackendDevelopment,
  },
  {
    path: "/database-management-services",
    name: "DataBaseManagement",
    component: DataBaseManagement,
  },
  {
    path: "/responsive-design-services",
    name: "ResponsiveDesign",
    component: ResponsiveDesign,
  },
  {
    path: "/progressive-web-apps-services",
    name: "ProgressiveWebApps",
    component: ProgressiveWebApps,
  },
  {
    path: "/e-commerce-services",
    name: "ECommerce",
    component: ECommerce,
  },
  //Mobile Development Services
  {
    path: "/android-development-services",
    name: "AndroidDevelopment",
    component: AndroidDevelopment,
  },
  {
    path: "/IOS-development-services",
    name: "IOSDevelopment",
    component: IOSDevelopment,
  },
  {
    path: "/cross-platform-development-services",
    name: "CrossPlatformDevelopment",
    component: CrossPlatformDevelopment,
  },
  {
    path: "/datascience",
    name: "DataScience",
    component: DataScience,
  },
 

 
  //Technical Services
  {
    path: "/IT-services",
    name: "ITAssignment",
    component: ITAssignment,
  },
  {
    path: "/content-management-services",
    name: "ContentManagement",
    component: ContentManagement,
  },
  {
    path: "/computer-science-services",
    name: "ComputerScienceAssignment",
    component: ComputerScienceAssignment,
  },
  {
    path: "/computer-network-services",
    name: "ComputerNetworkAssignment",
    component: ComputerNetworkAssignment,
  },
  {
    path: "/matlab-services",
    name: "MatlabAssignment",
    component: MatlabAssignment,
  },
  {
    path: "/data-science-services",
    name: "DataScience",
    component: DataScience,
  },
  {
    path: "/tableau-services",
    name: "TableauAssignment",
    component: TableauAssignment,
  },
  {
    path: "/SPSS-services",
    name: "SPSSAssignment",
    component: SPSSAssignment,
  },
  {
    path: "/database-management-services",
    name: "DataBaseManagementAssignment",
    component: DataBaseManagementAssignment,
  },
  {
    path: "/cloud-computing-services",
    name: "CloudComputingAssignment",
    component: CloudComputingAssignment,
  },
  {
    path: "/network-security-services",
    name: "NetworkSecurityAssignment",
    component: NetworkSecurityAssignment,
  },
  {
    path: "/machine-learning-services",
    name: "MachineLearningAssignment",
    component: MachineLearningAssignment,
  },
  {
    path: "/artificial-intelligence-services",
    name: "ArtificialIntelligenceAssignment",
    component: ArtificialIntelligenceAssignment,
  },
  {
    path: "/data-analysis-services",
    name: "DataAnalysisAssignment",
    component: DataAnalysisAssignment,
  },
  {
    path: "/excel-services",
    name: "ExcelAssignment",
    component: ExcelAssignment,
  },
  {
    path: "/cyber-security-services",
    name: "CyberSecurityAssignment",
    component: CyberSecurityAssignment,
  },
  {
    path: "/database-design-services",
    name: "DataBaseDesignAssignment",
    component: DataBaseDesignAssignment,
  },
  {
    path: "/IOT-services",
    name: "IOTAssignment",
    component: IOTAssignment,
  },
  {
    path: "/data-visualization-services",
    name: "DataVisualizationAssignment",
    component: DataVisualizationAssignment,
  },
  {
    path: "/power-bi-services",
    name: "PowerBIAssignment",
    component: PowerBIAssignment,
  },
  {
    path: "/block-chain-services",
    name: "BlockChainAssignment",
    component: BlockChainAssignment,
  },
  //Programming
  {
    path: "/python-programming-services",
    name: "PythonProgrammingAssignment",
    component: PythonProgrammingAssignment,
  },
  {
    path: "/C-programming-services",
    name: "CProgrammingAssignment",
    component: CProgrammingAssignment,
  },
  {
    path: "/java-services",
    name: "JavaAssignment",
    component: JavaAssignment,
  },
  {
    path: "/R-services",
    name: "RAssignment",
    component: RAssignment,
  },
  {
    path: "/javascript-services",
    name: "JavascriptAssignment",
    component: JavascriptAssignment,
  },
  {
    path: "/coding-services",
    name: "CodingAssignment",
    component: CodingAssignment,
  },
  {
    path: "/cryptographic-services",
    name: "CryptographicAssignment",
    component: CryptographicAssignment,
  },
  {
    path: "/data-structure-services",
    name: "DataStructureAssignment",
    component: DataStructureAssignment,
  },
  {
    path: "/GO-services",
    name: "GoAssignment",
    component: GoAssignment,
  },
  {
    path: "/cloud-services",
    name: "Cloud",
    component: Cloud,
  },
  {
    path: "/devops-services",
    name: "Devops",
    component: Devops,
  },

  {
    path: "/job-interview-support",
    name: "JobInterviewSupport",
    component: JobInterviewSupport,
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
