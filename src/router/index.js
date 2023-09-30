import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import FAQ from "../components/FAQ.vue";
import Career from "../components/Career.vue";
import Testimonials from "../components/Testimonials.vue";
//Services
import Assignment from "../components/Assignment.vue";
import TechnicalAssignment from "../components/TechnicalAssignment.vue";
import Thesis from "../components/Thesis.vue";
import Dissertation from "../components/Dissertation.vue";
import Programming from "../components/Programming.vue";
import EngineeringAssignment from "../components/EngineeringAssignment.vue";
import EssayWriting from "../components/EssayWriting.vue";

//Assignment
import BestAssignment from "../components/BestAssignment.vue";
import StudentAssignment from "../components/StudentAssignment.vue";
import UrgentAssignment from "../components/UrgentAssignment.vue";
import CheapAssignment from "../components/CheapAssignment.vue";
import AcademicWriting from "../components/AcademicWriting.vue";
import AllAssignment from "../components/AllAssignment.vue";
import OnlineAssignment from "../components/OnlineAssignment.vue";
import BusinessManagementAssignment from "../components/BusinessManagementAssignment.vue";
import ProjectManagementAssignment from "../components/ProjectManagementAssignment.vue";
import HumanResourceAssignment from "../components/HumanResourceAssignment.vue";
import EconomicAssignment from "../components/EconomicAssignment.vue";
import HospitalityAssignment from "../components/HospitalityAssignment.vue";
import MarketingAssignment from "../components/MarketingAssignment.vue";
import HealthCareManagement from "../components/HealthCareManagement.vue";
import FreeAssignment from "../components/FreeAssignment.vue";

//Technical Assignment
import ITAssignment from "../components/ITAssignment.vue";
import ComputerScienceAssignment from "../components/ComputerScienceAssignment.vue";
import ComputerNetworkAssignment from "../components/ComputerNetworkAssignment.vue";
import MatlabAssignment from "../components/MatlabAssignment.vue";
import TableauAssignment from "../components/TableauAssignment.vue";
import SPSSAssignment from "../components/SPSSAssignment.vue";
import DataBaseManagementAssignment from "../components/DataBaseManagementAssignment.vue";
import CloudComputingAssignment from "../components/CloudComputingAssignment.vue";
import NetworkSecurityAssignment from "../components/NetworkSecurityAssignment.vue";
import AndroidDevelopmentAssignment from "../components/AndroidDevelopmentAssignment.vue";
import MachineLearningAssignment from "../components/MachineLearningAssignment.vue";
import ArtificialIntelligenceAssignment from "../components/ArtificialIntelligenceAssignment.vue";
import DataAnalysisAssignment from "../components/DataAnalysisAssignment.vue";
import ExcelAssignment from "../components/ExcelAssignment.vue";
import CyberSecurityAssignment from "../components/CyberSecurityAssignment.vue";
import DataBaseDesignAssignment from "../components/DataBaseDesignAssignment.vue";
import WebDevelopmentAssignment from "../components/WebDevelopmentAssignment.vue";
import IOTAssignment from "../components/IOTAssignment.vue";
import DataVisualizationAssignment from "../components/DataVisualizationAssignment.vue";
import PowerBIAssignment from "../components/PowerBIAssignment.vue";

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

//EngineeringAssignment
import SoftwareEngineeringAssignment from "../components/SoftwareEngineeringAssignment.vue";
import StatisticsAssignment from "../components/StatisticsAssignment.vue";
import MathAssignment from "../components/MathAssignment.vue";
import DigitalElectronicsAssignment from "../components/DigitalElectronicsAssignment.vue";
import ElectricalEngineeringAssignment from "../components/ElectricalEngineeringAssignment.vue";
import CivilEngineeringAssignment from "../components/CivilEngineeringAssignment.vue";

//HOTS
import DigitalMarketingAssignment from "../components/DigitalMarketingAssignment.vue";
import StrategicManagementAssignment from "../components/StrategicManagementAssignment.vue";
import LeadershipAssignment from "../components/LeadershipAssignment.vue";
import RiskManagementAssignment from "../components/RiskManagementAssignment.vue";
import SupplyChainAssignment from "../components/SupplyChainAssignment.vue";
import KaliLinuxAssignment from "../components/KaliLinuxAssignment.vue";
import BlockChainAssignment from "../components/BlockChainAssignment.vue";
import PhysicsAssignment from "../components/PhysicsAssignment.vue";
import ChemistryAssignment from "../components/ChemistryAssignment.vue";

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
    path: "/careers",
    name: "Career",
    component: Career,
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials,
  },
  //services
  {
    path: "/assignment",
    name: "Assignment",
    component: Assignment,
  },
  {
    path: "/technical-assignment",
    name: "TechnicalAssignment",
    component: TechnicalAssignment,
  },
  {
    path: "/thesis",
    name: "Thesis",
    component: Thesis,
  },
  {
    path: "/dissertation",
    name: "Dissertation",
    component: Dissertation,
  },
  {
    path: "/programming",
    name: "Programming",
    component: Programming,
  },
  {
    path: "/engineering-assignment",
    name: "EngineeringAssignment",
    component: EngineeringAssignment,
  },
  {
    path: "/essay-writing",
    name: "EssayWriting",
    component: EssayWriting,
  },
  //Assignment
  {
    path: "/best-assignment",
    name: "BestAssignment",
    component: BestAssignment,
  },
  {
    path: "/student-assignment",
    name: "StudentAssignment",
    component: StudentAssignment,
  },
  {
    path: "/urgent-assignment",
    name: "UrgentAssignment",
    component: UrgentAssignment,
  },
  {
    path: "/cheap-assignment",
    name: "CheapAssignment",
    component: CheapAssignment,
  },
  {
    path: "/academic-assignment",
    name: "AcademicWriting",
    component: AcademicWriting,
  },
  {
    path: "/all-assignment",
    name: "AllAssignment",
    component: AllAssignment,
  },
  {
    path: "/online-assignment",
    name: "OnlineAssignment",
    component: OnlineAssignment,
  },
  {
    path: "/business-management-assignment",
    name: "BusinessManagementAssignment",
    component: BusinessManagementAssignment,
  },
  {
    path: "/project-management-assignment",
    name: "ProjectManagementAssignment",
    component: ProjectManagementAssignment,
  },
  {
    path: "/human-resource-assignment",
    name: "HumanResourceAssignment",
    component: HumanResourceAssignment,
  },
  {
    path: "/economic-assignment",
    name: "EconomicAssignment",
    component: EconomicAssignment,
  },
  {
    path: "/hospitality-assignment",
    name: "HospitalityAssignment",
    component: HospitalityAssignment,
  },
  {
    path: "/marketing-assignment",
    name: "MarketingAssignment",
    component: MarketingAssignment,
  },
  {
    path: "/health-care-assignment",
    name: "HealthCareManagement",
    component: HealthCareManagement,
  },
  {
    path: "/free-assignment",
    name: "FreeAssignment",
    component: FreeAssignment,
  },
  //Technical Assignment
  {
    path: "/IT-assignment",
    name: "ITAssignment",
    component: ITAssignment,
  },
  {
    path: "/free-assignment",
    name: "FreeAssignment",
    component: FreeAssignment,
  },
  {
    path: "/computer-science-assignment",
    name: "ComputerScienceAssignment",
    component: ComputerScienceAssignment,
  },
  {
    path: "/computer-network-assignment",
    name: "ComputerNetworkAssignment",
    component: ComputerNetworkAssignment,
  },
  {
    path: "/matlab-assignment",
    name: "MatlabAssignment",
    component: MatlabAssignment,
  },
  {
    path: "/tableau-assignment",
    name: "TableauAssignment",
    component: TableauAssignment,
  },
  {
    path: "/SPSS-assignment",
    name: "SPSSAssignment",
    component: SPSSAssignment,
  },
  {
    path: "/database-management-assignment",
    name: "DataBaseManagementAssignment",
    component: DataBaseManagementAssignment,
  },
  {
    path: "/cloud-computing-assignment",
    name: "CloudComputingAssignment",
    component: CloudComputingAssignment,
  },
  {
    path: "/network-security-assignment",
    name: "NetworkSecurityAssignment",
    component: NetworkSecurityAssignment,
  },
  {
    path: "/android-development-assignment",
    name: "AndroidDevelopmentAssignment",
    component: AndroidDevelopmentAssignment,
  },
  {
    path: "/machine-learning-assignment",
    name: "MachineLearningAssignment",
    component: MachineLearningAssignment,
  },
  {
    path: "/artificial-intelligence-assignment",
    name: "ArtificialIntelligenceAssignment",
    component: ArtificialIntelligenceAssignment,
  },
  {
    path: "/data-analysis-assignment",
    name: "DataAnalysisAssignment",
    component: DataAnalysisAssignment,
  },
  {
    path: "/excel-assignment",
    name: "ExcelAssignment",
    component: ExcelAssignment,
  },
  {
    path: "/cyber-security-assignment",
    name: "CyberSecurityAssignment",
    component: CyberSecurityAssignment,
  },
  {
    path: "/database-design-assignment",
    name: "DataBaseDesignAssignment",
    component: DataBaseDesignAssignment,
  },
  {
    path: "/web-development-assignment",
    name: "WebDevelopmentAssignment",
    component: WebDevelopmentAssignment,
  },
  {
    path: "/IOT-assignment",
    name: "IOTAssignment",
    component: IOTAssignment,
  },
  {
    path: "/data-visualization-assignment",
    name: "DataVisualizationAssignment",
    component: DataVisualizationAssignment,
  },
  {
    path: "/power-bi-assignment",
    name: "PowerBIAssignment",
    component: PowerBIAssignment,
  },
  //Programming
  {
    path: "/python-programming-assignment",
    name: "PythonProgrammingAssignment",
    component: PythonProgrammingAssignment,
  },
  {
    path: "/C-programming-assignment",
    name: "CProgrammingAssignment",
    component: CProgrammingAssignment,
  },
  {
    path: "/java-assignment",
    name: "JavaAssignment",
    component: JavaAssignment,
  },
  {
    path: "/R-assignment",
    name: "RAssignment",
    component: RAssignment,
  },
  {
    path: "/javascript-assignment",
    name: "JavascriptAssignment",
    component: JavascriptAssignment,
  },
  {
    path: "/coding-assignment",
    name: "CodingAssignment",
    component: CodingAssignment,
  },
  {
    path: "/cryptographic-assignment",
    name: "CryptographicAssignment",
    component: CryptographicAssignment,
  },
  {
    path: "/data-structure-assignment",
    name: "DataStructureAssignment",
    component: DataStructureAssignment,
  },
  {
    path: "/GO-assignment",
    name: "GoAssignment",
    component: GoAssignment,
  },

  //EngineeringAssignment
  {
    path: "/software-engineering-assignment",
    name: "SoftwareEngineeringAssignment",
    component: SoftwareEngineeringAssignment,
  },
  {
    path: "/statistics-assignment",
    name: "StatisticsAssignment",
    component: StatisticsAssignment,
  },
  {
    path: "/math-assignment",
    name: "MathAssignment",
    component: MathAssignment,
  },
  {
    path: "/digital-electronics-assignment",
    name: "DigitalElectronicsAssignment",
    component: DigitalElectronicsAssignment,
  },
  {
    path: "/electrical-engineering-assignment",
    name: "ElectricalEngineeringAssignment",
    component: ElectricalEngineeringAssignment,
  },
  {
    path: "/civil-engineering-assignment",
    name: "CivilEngineeringAssignment",
    component: CivilEngineeringAssignment,
  },

  //HOTS
  {
    path: "/digital-marketing-assignment",
    name: "DigitalMarketingAssignment",
    component: DigitalMarketingAssignment,
  },
  {
    path: "/strategic-management-assignment",
    name: "StrategicManagementAssignment",
    component: StrategicManagementAssignment,
  },
  {
    path: "/leadership-assignment",
    name: "LeadershipAssignment",
    component: LeadershipAssignment,
  },
  {
    path: "/civil-engineering-assignment",
    name: "CivilEngineeringAssignment",
    component: CivilEngineeringAssignment,
  },
  {
    path: "/risk-management-assignment",
    name: "RiskManagementAssignment",
    component: RiskManagementAssignment,
  },
  {
    path: "/supply-chain-assignment",
    name: "SupplyChainAssignment",
    component: SupplyChainAssignment,
  },
  {
    path: "/kali-linux-assignment",
    name: "KaliLinuxAssignment",
    component: KaliLinuxAssignment,
  },
  {
    path: "/block-chain-assignment",
    name: "BlockChainAssignment",
    component: BlockChainAssignment,
  },
  {
    path: "/physics-assignment",
    name: "PhysicsAssignment",
    component: PhysicsAssignment,
  },
  {
    path: "/chemistry-assignment",
    name: "ChemistryAssignment",
    component: ChemistryAssignment,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
