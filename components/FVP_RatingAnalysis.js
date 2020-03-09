import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { heat } from '../equations/TS_RatingAnalysisEqn'

export default function FVP_RatingAnalysis() {
    const [tubeUnsupported, setTubeUnsupported] = useState(0)
    const [tubeYoungs, setTubeYoungs] = useState(0)
    const [tubeLongitStress, setTubeLongitStress] = useState(0)
    const [addedMassCoeff, setAddedMassCoeff] = useState(0)
    const [metalMassPer, setMetalMassPer] = useState(0)
    const [acceptableFouling, setAcceptableFouling] = useState(0)
    const [dailyUsage, setDailyUsage] = useState(0)
    const [acceptableLifespan, setAcceptableLifespan] = useState(0)

return (
    <View style={globalStyles.container}>
         <Text>Fouling & Vibration Properties</Text>
        <TextInput label='Tube Unsupported Length' placeholder='Tube Unsupported Length' onChangeText={text => setTubeUnsupported(Number(text))} value={tubeUnsupported} />
        <TextInput label='Tube Youngs Modulus' placeholder='Tube Youngs Modulus' onChangeText={text => setTubeYoungs(Number(text))} value={tubeYoungs} />
        <TextInput label='Tube Longitudinal Stress' placeholder='Tube Longitudinal Stress' onChangeText={text => setTubeLongitStress(Number(text))} value={tubeLongitStress} />
        <TextInput label='Added Mass Coefficient' placeholder='Added Mass Coefficient' onChangeText={text => setAddedMassCoeff(Number(text))} value={addedMassCoeff} />
        <TextInput label='Metal Mass/Length' placeholder='Metal Mass/Length' onChangeText={text => setMetalMassPer(Number(text))} value={metalMassPer} />
        <TextInput label='Acceptable Fouling' placeholder='Acceptable Fouling' onChangeText={text => setAcceptableFouling(Number(text))} value={acceptableFouling}/ >
        <TextInput label='Hrs of Use (Daily)' placeholder='Hrs of Use (Daily)' onChangeText={text => setDailyUsage(Number(text))} value={dailyUsage} />
        <TextInput label='Acceptable Lifespan' placeholder='Acceptable Lifespan' onChangeText={text => setAcceptableLifespan(Number(text))} value={acceptableLifespan} />
    </View>
)}