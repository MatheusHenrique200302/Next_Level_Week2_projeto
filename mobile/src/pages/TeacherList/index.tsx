import React, { useState} from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import styles from './style';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
    const [teachers,setTeachers] = useState([]);    
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [favorite,setFavorites] = useState<number[]>([]);
    
    const [subject,setSubject] = useState('');
    const [week_day,setWeekDay] = useState('');
    const [time,setTime] = useState('');

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response =>{
            if(response){ 
                const favoritedTeachers = JSON.parse(response)
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) =>{
                    return teacher.id;
                })
  
  
              setFavorites(favoritedTeachersIds);  
            }  
          })
    }

    useFocusEffect(
        React.useCallback(()=>{
            loadFavorites();
        },[])

    );

    function handleToggleFiltersVisible() {
        setIsFilterVisible(!isFilterVisible)
    }

   async function handleFiltersSubmit(){
    loadFavorites();
        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time
            }
        })
    setIsFilterVisible(false);
    setTeachers(response.data);
    }

    return (
        <View style={styles.container}>
            <PageHeader 
            title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                )}
           >
                {isFilterVisible && (

                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholderTextColor="#c1bccc"
                            placeholder="Qual a Matéria?"
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    placeholderTextColor="#c1bccc"
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                    placeholder="Qual o dia?"
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    placeholderTextColor="#c1bccc"
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder="Qual Horário? "
                                />
                            </View>
                        </View>
                        <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            <ScrollView
                style={styles.teacherlist}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {teachers.map((teacher:Teacher) => {
                    return(


                    <TeacherItem favorited={favorite.includes(teacher.id)} key={teacher.id} teacher={teacher}/>


                    )
                     })}
            </ScrollView>

        </View>

    );
}
export default TeacherList;