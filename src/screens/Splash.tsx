import Layout from "@/components/Layout";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Spinner } from "@/components/ui/spinner";
  
export default function Splash(): React.JSX.Element {
  return (
    <Layout>
        <Box className="flex justify-center h-full items-center gap-8">
        <Heading size="xl">Loading...</Heading>
        <Spinner  size={'large'} />
        </Box>
    </Layout>
  );
}
