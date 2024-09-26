import { Box } from "./ui/box";

const Layout = ({children}: any) => {
    return (
        <Box className="layout flex min-h-full px-4 bg-white dark:bg-black">
            {children}
        </Box>
    );
};

export default Layout;