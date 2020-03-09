import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { useFormikContext } from 'formik'


export default function PP_RatingAnalysis(props) {

    const {values, handleChange} = useFormikContext()

return (
    <View style={globalStyles.container}>
       <Text>Physical Properties</Text>
        {/* <TextInput label='Shell-Side Material' placeholder='Shell-Side Material' onChangeText={(value) => {setSSMaterial(Number(value)); props.setSSMaterial(Number(value))}} value={ssMaterial} />
        <TextInput label='Tube-Side Material' placeholder='Tube-Side Material' onChangeText={text => setTSMaterial(Number(text))} value={tsMaterial} /> */}
        <TextInput placeholder='Number of Tubes' onChangeText={handleChange('numOfTubes')} value={values.numOfTubes} keyboardType='numeric' />
        <TextInput placeholder='Tube Pitch' onChangeText={handleChange('tubePitch')} value={values.tubePitch} keyboardType='numeric' />
        {/* <TextInput label='Tube Layout' placeholder='Tube Layout' onChangeText={text => setTubeLayout(Number(text))} value={tubeLayout} /> */}
        {/* <TextInput label='Tube Length' placeholder='Tube Length' onChangeText={text => setTubeLength(Number(text))} value={tubeLength} /> */}
        <TextInput placeholder='Tube Inner Diameter' onChangeText={handleChange('tsInnerDiameter')} value={values.tsInnerDiameter} keyboardType='numeric' />
        <TextInput placeholder='Tube Outer Diameter' onChangeText={handleChange('tsOuterDiameter')} value={values.tsOuterDiameter} keyboardType='numeric' />
        {/* <TextInput label='Number of Passes' placeholder='Number of Passes' onChangeText={handleChange('numOfPasses')} value={values.numOfPasses} keyboardType='numeric' />
        <TextInput label='Number of Baffles' placeholder='Number of Baffles' onChangeText={text => setNumOfBaffles(Number(text))} value={numOfBaffles}/>
        <TextInput label='Baffle Cut' placeholder='Baffle Cut' onChangeText={text => setBaffleCut(Number(text))} value={baffleCut} /> */}
        <TextInput placeholder='Baffle Spacing' onChangeText={handleChange('baffleSpacing')} value={values.baffleSpacing} keyboardType='numeric' />
        <TextInput placeholder='Shell Inner Diameter' onChangeText={handleChange('ssInnerDiameter')} value={values.ssInnerDiameter} keyboardType='numeric' />
        <TextInput placeholder='Tube Layout Angle' onChangeText={handleChange('tubeLayoutAngle')} value={values.tubeLayoutAngle} keyboardType='numeric' />

    </View>
)}