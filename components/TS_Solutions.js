import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

import { LMTD } from '../equations/TS_RatingAnalysisEqn'
import { areaOfTubes } from '../equations/TS_RatingAnalysisEqn'
import { velOfFluid } from '../equations/TS_RatingAnalysisEqn'
import { reynoldNum } from '../equations/TS_RatingAnalysisEqn'
import { prandtlNum } from '../equations/TS_RatingAnalysisEqn'
import { frictionFactor } from '../equations/TS_RatingAnalysisEqn'
import { nusseltNum } from '../equations/TS_RatingAnalysisEqn'
import { hTcoefficient } from '../equations/TS_RatingAnalysisEqn'

import { useFormikContext } from 'formik'


export default function TS_Solutions(props) {

    const {values} = useFormikContext()

    const LMTDResult = LMTD(Number(values['tsInletTemp']), Number(values['tsOutletTemp']), Number(values['ssInletTemp']), Number(values['ssOutletTemp']))
    const areaOfTubesResult = areaOfTubes(Number(values['tsInnerDiameter']), Number(values['numOfTubes']))
    const velOfFluidResult = velOfFluid(Number(values['tsMassFlowRate']), Number(values['tsDensity']), Number(values['tsInnerDiameter']), Number(values['numOfTubes']))
    const reynoldNumResult = reynoldNum(Number(values['tsMassFlowRate']), Number(values['tsDensity']), Number(values['tsInnerDiameter']), Number(values['numOfTubes']), Number(values['tsViscosity']))
    const prandtlNumResult = prandtlNum(Number(values['tsHeatCapacity']), Number(values['tsViscosity']), Number(values['tsConductivity']))
    const frictionFactorResult = frictionFactor(Number(values['tsMassFlowRate']), Number(values['tsDensity']), Number(values['tsInnerDiameter']), Number(values['numOfTubes']), Number(values['tsViscosity']))
    const nusseltNumResult = nusseltNum(Number(values['tsMassFlowRate']), Number(values['tsDensity']), Number(values['tsInnerDiameter']), Number(values['numOfTubes']), Number(values['tsViscosity']), Number(values['tsHeatCapacity']), Number(values['tsConductivity']))
    const hTcoefficientResult = hTcoefficient(Number(values['tsMassFlowRate']), Number(values['tsDensity']), Number(values['tsInnerDiameter']), Number(values['numOfTubes']), Number(values['tsViscosity']), Number(values['tsHeatCapacity']), Number(values['tsConductivity']))

    return (
    <View style={globalStyles.container}>
        <Text>LMTD: {LMTDResult}</Text>
        <Text>Area of Heat Transfer: {areaOfTubesResult}</Text>
        <Text>Velocity of Fluid: {velOfFluidResult}</Text>
        <Text>Reynold's Number: {reynoldNumResult}</Text>
        <Text>Prandtl Number: {prandtlNumResult}</Text>
        <Text>Friction Factor: {frictionFactorResult}</Text>
        <Text>Nusselt Number: {nusseltNumResult}</Text>
        <Text>Heat Transfer Coefficient: {hTcoefficientResult}</Text>
        
    </View>
    )
}
