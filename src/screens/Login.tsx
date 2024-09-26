import {Button, ButtonText} from '@/components/ui/button';
import {
    FormControl,
    FormControlError,
    FormControlErrorIcon,
    FormControlErrorText,
    FormControlHelper,
    FormControlHelperText,
    FormControlLabel,
    FormControlLabelText,
} from '@/components/ui/form-control';
import { AlertCircleIcon } from '@/components/ui/icon';
import {Input, InputField} from '@/components/ui/input';
import { AuthContext } from '../providers/AuthProvider';
import React, { useContext, useState } from 'react';
import Layout from '@/components/Layout';
import { Heading } from '@/components/ui/heading';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
// const styles = StyleSheet.create({
//     sectionContainer: {
//         marginTop: 0,
//         paddingHorizontal: 0,
//         width: '100%',
//         flex: 1,
//     },
//     sectionTitle: {
//         fontSize: 24,
//         fontWeight: '600',
//     },
//     sectionDescription: {
//         marginTop: 8,
//         fontSize: 18,
//         fontWeight: '400',
//     },
//     highlight: {
//         fontWeight: '700',
//     },
// });

export default function Login() {
    const [isInvalid, setIsInvalid] = React.useState(false);
    const [passwordValue, setPasswordValue] = React.useState('');
    const { login } = useContext(AuthContext);

    // Email
    const [isEmailInvalid, setIsEmailInvalid] = React.useState(false);
    const [emailValue, setEmailValue] = React.useState('');

    const handleSubmit = () => {
        // On check le mot de passe et que l'email est valide
        if (passwordValue.length < 6) {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
            handleLogin();
        }
    };

    const handleLogin = () => {
        // Tu peux mettre ici ta logique d'authentification
        // Par exemple, si username === 'admin', tu peux appeler login avec un token
        login({emailValue, passwordValue}); // Simuler un login
    };

    return (
        <Layout>
            <VStack space="xl" className="justify-center h-full">
                <Box className='flex justify-center items-center mb-8'>
                    <Heading size='4xl' className=''>Connexion</Heading>
                </Box>
                <Box className='pt-8'>
                    <FormControl
                        isInvalid={isInvalid}
                        size="md"
                        isDisabled={false}
                        isReadOnly={false}
                        isRequired={false}
                        className='flex flex-col'>
                        <FormControlLabel>
                            <FormControlLabelText className='text-xl'>Email</FormControlLabelText>
                        </FormControlLabel>
                        <Input className="mt-1 mb-4" size={'xl'}>
                            <InputField
                                type="text"
                                placeholder="email"
                                value={emailValue}
                                onChangeText={text => setEmailValue(text)}
                            />
                        </Input>
                        <FormControlError>
                            <FormControlErrorIcon as={AlertCircleIcon} />
                            <FormControlErrorText>
                                Email is invalid.
                            </FormControlErrorText>
                        </FormControlError>
                        <FormControlLabel>
                            <FormControlLabelText className='text-xl'>Password</FormControlLabelText>
                        </FormControlLabel>
                        <Input className="my-1" size={'xl'}>
                            <InputField
                                type="password"
                                placeholder="***"
                                value={passwordValue}
                                onChangeText={text => setPasswordValue(text)}
                            />
                        </Input>
                        <FormControlHelper>
                            <FormControlHelperText>
                                Must be atleast 6 characters.
                            </FormControlHelperText>
                        </FormControlHelper>
                        <FormControlError>
                            <FormControlErrorIcon as={AlertCircleIcon} />
                            <FormControlErrorText>
                                Atleast 6 characters are required.
                            </FormControlErrorText>
                        </FormControlError>
                    </FormControl>
                    <Button
                        className="btn mt-8 h-auto"
                        size="lg"
                        onPress={handleSubmit}>
                        <ButtonText>Connexion</ButtonText>
                    </Button>
                    <Button
                        action='secondary'
                        className="btn mt-4 h-auto"
                        size="lg">
                        <ButtonText className='dark:text-white'>Inscription</ButtonText>
                    </Button>
                </Box>
            </VStack>
        </Layout>
    );
}
