import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const actionSchema = yup.object({
  title: yup.string()
    .required("Campo obrigatório")
    .min(10, "Mínimo de 10 carateres")
    .max(50, "Máximo de 50 carateres"),
  description: yup.string()
    .required("Campo obrigatório")
    .min(8, "Mínimo de 8 carateres"),
  location: yup.string()
    .required("Campo obrigatório")
    .min(10, "Mínimo de 10 carateres"),
  category: yup.string()
    .required("Campo obrigatório")
    .min(4, "Mínimo de 4 carateres"),
  date: yup.date()
    .required("Campo obrigatório"),
  totalParticipants: yup.number()
    .required("Campo obrigatório")
    .positive("Uma atividade precisa de pelo menos uma pessoa")
    .typeError("Apenas números inteiros são aceites")
    .integer("Apenas números inteiros são aceites")
  });

export default function ActionForm({ addAction }) {

  return (
    
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', description: '', location: '', category: '', date: '', startHour:'10:00', endHour:'11:00', activityTime:'60', keywords: [], waypoints: [], lat:'', lon:'', totalParticipants: 0}}
        validationSchema={actionSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          addAction(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Título da ação'
              onChangeText={props.handleChange('title')}
              onBlur={props.handleBlur('title')} 
              value={props.values.title}
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

            <TextInput
              style={globalStyles.input}
              multiline minHeight={60}
              placeholder='Descrição'
              onChangeText={props.handleChange('description')}
              onBlur={props.handleBlur('description')}
              value={props.values.description}
            />
            <Text style={globalStyles.errorText}>{props.touched.description && props.errors.description}</Text>

            <TextInput 
              style={globalStyles.input}
              placeholder='Localização'
              onChangeText={props.handleChange('location')}
              onBlur={props.handleBlur('location')} 
              value={props.values.location}
            />
            <Text style={globalStyles.errorText}>{props.touched.location && props.errors.location}</Text>
            <TextInput 
              style={globalStyles.input}
              placeholder='Categoria'
              onChangeText={props.handleChange('category')}
              onBlur={props.handleBlur('category')} 
              value={props.values.category}
            />
            <Text style={globalStyles.errorText}>{props.touched.category && props.errors.category}</Text>
            <TextInput 
              style={globalStyles.input}
              placeholder='Data'
              onChangeText={props.handleChange('date')}
              onBlur={props.handleBlur('date')} 
              value={props.values.date}
            />
            <Text style={globalStyles.errorText}>{props.touched.date && props.errors.date}</Text>
            <TextInput 
              style={globalStyles.input}
              placeholder='Número de participantes'
              onChangeText={props.handleChange('totalParticipants')}
              onBlur={props.handleBlur('totalParticipants')} 
              value={props.values.totalParticipants}
            />
            <Text style={globalStyles.errorText}>{props.touched.totalParticipants && props.errors.totalParticipants}</Text>
            
            <FlatButton onPress={props.handleSubmit} text='Criar nova ação' />
          </View>
        )}
      </Formik>
    </View>
    
  );
}