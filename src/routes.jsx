import SidebarLayout from "./layout/SidebarLayout";
import AssignCarrier from "./pages/AssignCarrier";
import Stop from "./pages/Stop";



export const ROUTES = [
    {
        path: '/',
        element: <SidebarLayout />,
        children: [
            {
                name:'Carrier',
                path: '/assign-carrier',
                element: <AssignCarrier />
            },
            {
                name:'Stops',
                path: '/manage-stops',
                element: <Stop />
            }
        ]
    }
]