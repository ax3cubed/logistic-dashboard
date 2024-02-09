import SidebarLayout from "./layout/SidebarLayout";
import AssignCarrier from "./pages/AssignCarrier";
import Stop from "./pages/Stop";



export const LogisticsRoutes = [
    {
        path: '/',
        element: <SidebarLayout />,
        children: [
            {
                path: '/assign-carrier',
                element: <AssignCarrier />
            },
            {
                path: '/manage-stops',
                element: <Stop />
            }
        ]
    }
]