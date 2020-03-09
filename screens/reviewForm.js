import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
  massflowrate: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
  inlettemperature: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
  outlettemperature: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),

  heatcapacity: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    })
});

export default function ReviewForm({ addReview }) {

  return (
    
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ massflowrate: '', inlettemperature: '', outlettemperature: '', heatcapacity: ''}}
        // validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          addReview(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Mass Flow Rate'
              onChangeText={props.handleChange('massflowrate')}
              onBlur={props.handleBlur('massflowrate')} 
              value={props.values.massflowrate}
              keyboardType='numeric'
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>{props.touched.massflowrate && props.errors.massflowrate}</Text>

            <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Inlet Temperature'
              onChangeText={props.handleChange('inlettemperature')}
              onBlur={props.handleBlur('inlettemperature')}
              value={props.values.inlettemperature}
              keyboardType='numeric'
            />
            <Text style={globalStyles.errorText}>{props.touched.inlettemperature && props.errors.intlettemperature}</Text>

            <TextInput 
              style={globalStyles.input}
              placeholder='Outlet Temperature'
              onChangeText={props.handleChange('outlettemperature')}
              onBlur={props.handleBlur('outlettemperature')} 
              value={props.values.outlettemperature}
              keyboardType='numeric'
            />
            <Text style={globalStyles.errorText}>{props.touched.outlettemperature && props.errors.outlettemperature}</Text>

            <TextInput
              style={globalStyles.input}
              placeholder='Heat Capacity'
              onChangeText={props.handleChange('heatcapacity')}
              onBlur={props.handleBlur('heatcapacity')} 
              value={props.values.heatcapacity}
              keyboardType='numeric'
            />
            <Text style={globalStyles.errorText}>{props.touched.heatcapacity && props.errors.heatcapacity}</Text>

            <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </View>
  );
}