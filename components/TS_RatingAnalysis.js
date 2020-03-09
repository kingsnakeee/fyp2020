import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { useFormikContext } from 'formik'


export default function TS_RatingAnalysis(props) {

    const {values, handleChange} = useFormikContext()
    
    return (
    <View style={globalStyles.container}>
        <Text>Tube Side</Text>
        <TextInput placeholder="Mass Flow Rate" onChangeText={handleChange('tsMassFlowRate')} value={values.tsMassFlowRate} keyboardType='numeric' />
        <TextInput placeholder="Inlet Temperature" onChangeText={handleChange('tsInletTemp')} value={values.tsInletTemp} keyboardType='numeric' />
        <TextInput placeholder="Outlet Temperature" onChangeText={handleChange('tsOutletTemp')} value={values.tsOutletTemp} keyboardType='numeric' />
        <TextInput placeholder="Specific Heat Capacity" onChangeText={handleChange('tsHeatCapacity')} value={values.tsHeatCapacity} keyboardType='numeric'/>
        <TextInput placeholder="Viscosity" onChangeText={handleChange('tsViscosity')} value={values.tsViscosity} keyboardType='numeric' />
        <TextInput placeholder="Tube Density" onChangeText={handleChange('tsDensity')} value={values.tsDensity} keyboardType='numeric' />
        <TextInput placeholder="Conductivity" onChangeText={handleChange('tsConductivity')} value={values.tsConductivity} keyboardType='numeric'/>
    </View>
)}