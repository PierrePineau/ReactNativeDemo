import { Box } from "./ui/box";
import { Button, ButtonText } from "./ui/button";
import { Heading } from "./ui/heading";
import { Image } from "./ui/image";
import { Text } from "./ui/text";
import { VStack } from "./ui/vstack";

const Pub = ({image, title, description, action}: any) => {
    return (
        <Box className="justify-center">
            <VStack space="lg" reversed={false}>
                <Image
                    size="md"
                    source={image}
                    alt="image"
                    className="w-full h-48 min-h-48 object-cover object-center"
                />
                <Heading size="2xl">{title}</Heading>
                <Text className="">{description}</Text>
                <Button
                    className="btn h-auto mt-4 rounded-lg"
                    size="lg">
                    <ButtonText>Check details</ButtonText>
                </Button>
            </VStack>
        </Box>
    );
};

export default Pub;