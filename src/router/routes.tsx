import FlexboxGuidePage from "../pages/flexbox guide/FlexboxGuidePage";
import GridGuidePage from "../pages/grid guide/GridGuidePage";
import GridSubgrid from "../pages/grid subgrid/GridSubgrid";
import LAMainPage from "../pages/mui/Laith Academy course/mainPage";
import LATourPage from "../pages/mui/Laith Academy course/tourPage";
import ADMain from "../pages/mui/Atypical Developer Dashboard/pages/Main/Main";
import ADAuthentication from "../pages/mui/Atypical Developer Dashboard/pages/Authentication/Authentication";
import ADDatabase from "../pages/mui/Atypical Developer Dashboard/pages/Database/Database";
import ADFunctions from "../pages/mui/Atypical Developer Dashboard/pages/Functions/Functions";
import ADHosting from "../pages/mui/Atypical Developer Dashboard/pages/Hosting/Hosting";
import ADMachineLearning from "../pages/mui/Atypical Developer Dashboard/pages/Machine-learning/Machine-learning";
import ADStorage from "../pages/mui/Atypical Developer Dashboard/pages/Storage/Storage";
import MainPage from "../pages/MainPage/MainPage";
import TransitionGroupExample from "../pages/transition-group/component/TransitionGroup/TransitionGroupExample";
import CSSTransitionLoaderExample
    from "../pages/transition-group/component/CSSTransitionExample/CSSTransitionLoaderExample";
import LoaderExample from "../pages/transition-group/component/FirstExample/LoaderExample";
import SwitchTransitionExampleCSSTransitionClasses
    , {
    SwitchTransitionExampleCSSTransitionStyles,
    SwitchTransitionExampleCSSTransitionWrong,
    SwitchTransitionExampleTransition
} from "../pages/transition-group/component/SwitchTransition/SwitchTransitionExample";
import FanList from "../pages/transition-group/examples/FanList/FanList";
import BubbleLoading from "../pages/transition-group/examples/BubleLoading/BubbleLoading";
import ContainerQuery from "../pages/ContainerQuery/ContainerQuery";

export const publicRoutes= [
    {path: '/',element:(<MainPage/>)},
    {path: '/flex',element:(<FlexboxGuidePage/>),linkName:'flexbox guide'},
    {path: '/grid',element:(<GridGuidePage/>),linkName:'grid guide'},
    {path: '/subgrid', element: (<GridSubgrid/>), linkName: 'grid subgrid'},

    {path: '/container-query', element: (<ContainerQuery/>), linkName: 'container query'},
    //react transition group
    {path: '/RTG',element: (<TransitionGroupExample/>),linkName:'RTG List'},
    {path: '/RTG/loader',element:(<CSSTransitionLoaderExample/>),linkName:'RTG Loader'},
    {path: '/RTG/first',element:(<LoaderExample/>),linkName:'RTG Basic Loader'},
    {path: '/RTG/st-CSS-classes',element:(<SwitchTransitionExampleCSSTransitionClasses/>),linkName:'RTG st-CSS-classes'},
    {path: '/RTG/st-CSS-styles',element:(<SwitchTransitionExampleCSSTransitionStyles/>),linkName:'RTG st-CSS-styles'},
    {path: '/RTG/transition',element:(<SwitchTransitionExampleTransition/>),linkName:'RTG transition'},
    {path: '/RTG/wrong',element:(<SwitchTransitionExampleCSSTransitionWrong/>),linkName:'RTG wrong'},
    {path: '/RTG/fan-list',element: (<FanList/>), linkName: 'RTG Fan List'},
    {path: '/RTG/bubble',element: (<BubbleLoading/>), linkName: 'RTG Bubble Loading'},

    //mui
    {path: '/LA/main',element: (<LAMainPage/>),linkName: 'LA main'},
    {path: '/LA/tour/:id',element: (<LATourPage/>),linkName: 'LA tour'},
    {path: '/AD',element: (<ADMain/>),linkName: 'AD dashboard',
        nestedRoutes: [
            {path: 'authentication',element: (<ADAuthentication/>),linkName: 'AD dashboard authentication'},
            {path: 'database',element: (<ADDatabase/>),linkName: 'AD dashboard database'},
            {path: 'functions',element: (<ADFunctions/>),linkName: 'AD dashboard functions'},
            {path: 'hosting',element: (<ADHosting/>),linkName: 'AD dashboard hosting'},
            {path: 'machine-learning',element: (<ADMachineLearning/>),linkName: 'AD dashboard machine-learning'},
            {path: 'storage',element: (<ADStorage/>),linkName: 'AD dashboard storage'},

        ]
    },

    {path: '*',element:(<div>404 NOT FOUND</div>)}
]
