import { ScrollView } from "@gluestack-ui/nativewind";
import { VStack } from "./ui/vstack";

const Layout = ({children}: any) => {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic" decelerationRate="fast">
            <VStack space="lg" reversed={false} className="layout flex min-h-full px-4 bg-white dark:bg-black pb-8">
                {children}
            </VStack>
        </ScrollView>
    );
};

export default Layout;