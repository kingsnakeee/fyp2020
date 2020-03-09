import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

import { clearance } from '../equations/SS_RatingAnalysisEqn'
import { areaOfShell } from '../equations/SS_RatingAnalysisEqn'
import { prandtlNum } from '../equations/SS_RatingAnalysisEqn'
import { equiDiameter } from '../equations/SS_RatingAnalysisEqn'
import { reynoldNum } from '../equations/SS_RatingAnalysisEqn'
import { jFactor } from '../equations/SS_RatingAnalysisEqn'
import { hTcoefficient } from '../equations/SS_RatingAnalysisEqn'


import { useFormikContext } from 'formik'
import { TextInput } from 'react-native-gesture-handler';
// import { jFactorCoefficient } from '../tableOfValues/jFactorCoeffcient';



export default function SS_Solutions(props) {

    const {values, handleChange} = useFormikContext()

    const clearanceResult = clearance(Number(values['tubePitch']), Number(values['tsOuterDiameter']))
    const areaOfShellResult = areaOfShell(Number(values['tubePitch']), Number(values['tsOuterDiameter']), Number(values['ssInnerDiameter']), Number(values['baffleSpacing']))
    const prandtlNumResult = prandtlNum(Number(values['ssHeatCapacity']), Number(values['ssViscosity']), Number(values['ssConductivity']))
    const equiDiameterResult = equiDiameter(Number(values['tubePitch']), Number(values['tsOuterDiameter']))
    const reynoldNumResult = reynoldNum(Number(values['ssMassFlowRate']), Number(values['tubePitch']), Number(values['tsOuterDiameter']), Number(values['ssInnerDiameter']), Number(values['baffleSpacing']), Number(values['ssViscosity']))
    const tubeLayoutAngleResult = Number(values['angle'])
    // const jFactorResult = jFactor(Number(values['ssMassFlowRate']), Number(values['tubePitch']), Number(values['tsOuterDiameter']), Number(values['ssInnerDiameter']), Number(values['baffleSpacing']), Number(values['ssViscosity']), Number(values['tubeLayoutAngle']), Number(values['tsInnerDiameter']))
    const jFactorResult = jFactor(Number(values['ssMassFlowRate']), Number(values['tubePitch']), Number(values['tsOuterDiameter']), 
    Number(values['ssInnerDiameter']), Number(values['baffleSpacing']), Number(values['ssViscosity']), Number(values['tsInnerDiameter']))
    // const frictionFactorResult = frictionFactor(Number(values['tsMassFlowRate']), Number(values['tsDensity']), Number(values['tsInnerDiameter']), Number(values['numOfTubes']), Number(values['tsViscosity']))
    // const nusseltNumResult = nusseltNum(Number(values['tsMassFlowRate']), Number(values['tsDensity']), Number(values['tsInnerDiameter']), Number(values['numOfTubes']), Number(values['tsViscosity']), Number(values['tsHeatCapacity']), Number(values['tsConductivity']))
    // const hTcoefficientResult = hTcoefficient(Number(values['tsMassFlowRate']), Number(values['tsDensity']), Number(values['tsInnerDiameter']), Number(values['numOfTubes']), Number(values['tsViscosity']), Number(values['tsHeatCapacity']), Number(values['tsConductivity']))

    return (
    <View style={globalStyles.container}>
        <Text>Clearance: {clearanceResult}</Text>
        <Text>Area of Heat Transfer: {areaOfShellResult}</Text>
        <Text>Prandtl Number: {prandtlNumResult}</Text>
        <Text>Equivalent Diameter: {equiDiameterResult}</Text>
        <Text>Reynold's Number: {reynoldNumResult}</Text>
        <TextInput placeholder='Tube Layout Angle' onChangeText={handleChange('angle')} value={values.angle} keyboardType='numeric' />
        <Text>Tube Layout Angle: {tubeLayoutAngleResult} </Text>
       {/* <Text>J-Factor: {JSON.stringify(jFactorCoefficient(29675.98, 90))}</Text> */}
        <Text>J-Factor: {jFactorResult}</Text>
        {/* <Text>Heat Transfer Coefficient: {hTcoefficientResult}</Text> */}
    </View>
    )
}