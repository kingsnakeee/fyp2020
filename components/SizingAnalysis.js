import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';

export default function RatingAnalysis() {
    const [massFlowRate, setmassFlowRate] = useState(0)
    const [inletTemperature, setinletTemperature] = useState(0)
    const [outletTemperature, setoutletTemperature] = useState(0)
    const [heatCapacity, setheatCapacity] = useState(0)

    const [fluidVelocity, setFluidVelocity] = useState(0)
    const [fluidDensity, setFluidDensity] = useState(0)


    const [tubePitch, setTubePitch] = useState(0)
    const [tubeLayout, setTubeLayout] = useState(0)
    const [tubeInnerDiameter, setTubeInnerDiameter] = useState(0)
    const [tubeOuterDiameter, setTubeOuterDiameter] = useState(0)
    const [numOfPasses, setNumOfPasses] = useState(0)


    const Sum = massFlowRate + inletTemperature


return (
    <View style={globalStyles.container}>
        <Text>Shell Side</Text>
      <TextInput placeholder="Mass Flow Rate" onChangeText={text => setmassFlowRate(Number(text))} value={massFlowRate} />
      <TextInput placeholder="Inlet Temperature" onChangeText={text => setinletTemperature(Number(text))} value={inletTemperature} />
      <TextInput placeholder="Outlet Temperature" onChangeText={text => setoutletTemperature(Number(text))} value={outletTemperature} />
      <TextInput placeholder="Heat Capacity" onChangeText={text => setheatCapacity(Number(text))} value={heatCapacity} />
      <Text>{Sum}</Text>

      <Text>Tube Side</Text>
      <TextInput placeholder="Mass Flow Rate" onChangeText={text => setmassFlowRate(Number(text))} value={massFlowRate} />
      <TextInput placeholder="Inlet Temperature" onChangeText={text => setinletTemperature(Number(text))} value={inletTemperature} />
      <TextInput placeholder="Outlet Temperature" onChangeText={text => setoutletTemperature(Number(text))} value={outletTemperature} />
      <TextInput placeholder="Heat Capacity" onChangeText={text => setheatCapacity(Number(text))} value={heatCapacity} />
      <TextInput placeholder="Fluid Velocity" onChangeText={text => setFluidVelocity(Number(text))} value={fluidVelocity} />
      <TextInput placeholder="Fluid Density" onChangeText={text => setFluidDensity(Number(text))} value={fluidDensity} />

      <Text>Physical Properties</Text>
      <TextInput label='Tube Pitch' placeholder='Tube Pitch' onChangeText={text => setTubePitch(Number(text))} value={tubePitch} />
        <TextInput label='Tube Layout' placeholder='Tube Layout' onChangeText={text => setTubeLayout(Number(text))} value={tubeLayout} />
        <TextInput label='Tube Inner Diameter' placeholder='Tube Inner Diameter' onChangeText={text => setTubeInnerDiameter(Number(text))} value={tubeInnerDiameter} />
        <TextInput label='Tube Outer Diameter' placeholder='Tube Outer Diameter' onChangeText={text => setTubeOuterDiameter(Number(text))} value={tubeOuterDiameter} />
        <TextInput label='Number of Passes' placeholder='Number of Passes' onChangeText={text => setNumOfPasses(Number(text))} value={numOfPasses} />
    </View>
  );
}