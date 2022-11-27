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

export const publicRoutes= [
    {path: '/flex',element:(<FlexboxGuidePage/>),linkName:'flexbox guide'},
    {path: '/',element:(<GridGuidePage/>),linkName:'grid guide'},
    {path: '/subgrid', element: (<GridSubgrid/>), linkName: 'grid subgrid'},

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
