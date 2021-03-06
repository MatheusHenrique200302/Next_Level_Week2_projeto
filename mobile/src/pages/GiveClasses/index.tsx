import React from 'react';
import { View ,ImageBackground, Text} from 'react-native';
import styles from './styles';
import giveClassesBgImgage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses(){
    const {goBack} = useNavigation();

function handleNavigateBack(){
    goBack();
}   
return <View style={styles.container} >
            <ImageBackground resizeMode='contain' source={giveClassesBgImgage} style={styles.content}>
                <Text style={styles.title}>Quer ser Proffy?</Text>
                <Text style={styles.description}>Para começar, você precisa se cadastrar na nossa plataforma web.</Text>
            </ImageBackground>

        <RectButton onPress={handleNavigateBack} style={styles.okbutton}>
            <Text style={styles.okbuttonText}>Tudo bem</Text>
        </RectButton>


        </View>
}
export default GiveClasses;