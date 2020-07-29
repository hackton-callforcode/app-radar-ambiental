import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container,Head,Label,Title,Icon,Button,ButtonText,ViewRegister,LinkRegister } from './styles';

//importação de components
import Input from '../../../components/input/text';
import Password from '../../../components/input/password';
import Checkbox from '../../../components/checkbox';

const logo = require('../../../assets/icons/logo_icon.png');
export default function Register(){
    const navigation = useNavigation();

    function handleNavigateToLogin(){
        navigation.navigate('Register');
    }

    return(
        <Container>
            <Head>
                <Title>
                    <Icon source={logo}/> RADAR AMBIENTAL 
                </Title>
            </Head>
            <Input placeholder={'Nome'}/>
            <Input placeholder={'E-mail'}/>
            <Input placeholder={'Telefone'}/>
            <Input placeholder={'CPF'}/>
            <Input placeholder={'Data de nascimento'}/>
            <Password  placeholder={'Senha'}/>
            <Checkbox label={'Aceitar Termos'} state={true} />
            <Button>
                <ButtonText>Cadastrar</ButtonText>
            </Button>
            <ViewRegister >
                <Label>Já possui conta ? </Label>
                <LinkRegister>Clique aqui</LinkRegister>
            </ViewRegister>
        </Container>
    );
}