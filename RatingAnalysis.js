import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';

export default function RatingAnalysis() {
    const [massFlowRate, setmassFlowRate] = useState(0)
    const [inletTemperature, setinletTemperature] = useState(0)
    const [outletTemperature, setoutletTemperature] = useState(0)
    const [heatCapacity, setheatCapacity] = useState(0)
    const [fluidType, setfluidType] = useState(0)
    const [viscosity, setViscosity] = useState(0)
    const [density, setDensity] = useState(0)
    const [conductivity, setConductivity] = useState(0)

    const [ssMaterial, setSSMaterial] = useState(0)
    const [tsMaterial, setTSMaterial] = useState(0)
    const [numOfTubes, setNumOfTubes] = useState(0)
    const [tubePitch, setTubePitch] = useState(0)
    const [tubeLayout, setTubeLayout] = useState(0)
    const [tubeLength, setTubeLength] = useState(0)
    const [tubeInnerDiameter, setTubeInnerDiameter] = useState(0)
    const [tubeOuterDiameter, setTubeOuterDiameter] = useState(0)
    const [numOfPasses, setNumOfPasses] = useState(0)
    const [numOfBaffles, setNumOfBaffles] = useState(0)
    const [baffleCut, setBaffleCut] = useState(0)
    const [baffleSpacing, setBaffleSpacing] = useState(0)
    const [shellDiameter, setShellDiameter] = useState(0)

    const [tubeUnsupported, setTubeUnsupported] = useState(0)
    const [tubeYoungs, setTubeYoungs] = useState(0)
    const [tubeLongitStress, setTubeLongitStress] = useState(0)
    const [addedMassCoeff, setAddedMassCoeff] = useState(0)
    const [metalMassPer, setMetalMassPer] = useState(0)
    const [acceptableFouling, setAcceptableFouling] = useState(0)
    const [dailyUsage, setDailyUsage] = useState(0)
    const [acceptableLifespan, setAcceptableLifespan] = useState(0)


    const Sum = massFlowRate + inletTemperature


//   return (
//     <View style={globalStyles.container}>
//       <TextInput placeholder="Mass Flow Rate" onChangeText={text => setmassFlowRate(Number(e.target.value))} />
//       <TextInput placeholder="Inlet Temperature" onChangeText={e => setinletTemperature(Number(e.target.value))} />
//       <Text>{Sum}</Text>
//     </View>
//   );
// }

return (
    <View style={globalStyles.container}>
        <Text>Shell Side</Text>
        <TextInput placeholder="Mass Flow Rate" onChangeText={text => setmassFlowRate(Number(text))} value={massFlowRate} keyboardType='numeric'/>
        <TextInput placeholder="Inlet Temperature" onChangeText={text => setinletTemperature(Number(text))} value={inletTemperature} />
        <TextInput placeholder="Outlet Temperature" onChangeText={text => setoutletTemperature(Number(text))} value={outletTemperature} />
        <TextInput placeholder="Heat Capacity" onChangeText={text => setheatCapacity(Number(text))} value={heatCapacity} />
        <TextInput placeholder="Fluid Type" onChangeText={text => setfluidType(Number(text))} value={fluidType} />
        <TextInput placeholder="Viscosity" onChangeText={text => setViscosity(Number(text))} value={viscosity} />
        <TextInput placeholder="Density" onChangeText={text => setDensity(Number(text))} value={density} />
        <TextInput placeholder="Conductivity" onChangeText={text => setConductivity(Number(text))} value={conductivity} />
        <Text>{Sum}</Text>
    
    
    
        <Text>Tube Side</Text>
        <TextInput placeholder="Mass Flow Rate" onChangeText={text => setmassFlowRate(Number(text))} value={massFlowRate} />
        <TextInput placeholder="Inlet Temperature" onChangeText={text => setinletTemperature(Number(text))} value={inletTemperature} />
        <TextInput placeholder="Outlet Temperature" onChangeText={text => setoutletTemperature(Number(text))} value={outletTemperature} />
        <TextInput placeholder="Heat Capacity" onChangeText={text => setheatCapacity(Number(text))} value={heatCapacity} />
        <TextInput placeholder="Fluid Type" onChangeText={text => setfluidType(Number(text))} value={fluidType} />
        <TextInput placeholder="Viscosity" onChangeText={text => setViscosity(Number(text))} value={viscosity} />
        <TextInput placeholder="Density" onChangeText={text => setDensity(Number(text))} value={density} />
        <TextInput placeholder="Conductivity" onChangeText={text => setConductivity(Number(text))} value={conductivity} />
        <Text>{Sum}</Text>



        <Text>Physical Properties</Text>
        <TextInput label='Shell-Side Material' placeholder='Shell-Side Material' onChangeText={text => setSSMaterial(Number(text))} value={ssMaterial} />
        <TextInput label='Tube-Side Material' placeholder='Tube-Side Material' onChangeText={text => setTSMaterial(Number(text))} value={tsMaterial} />
        <TextInput label='Number of Tubes' placeholder='Number of Tubes' onChangeText={text => setNumOfTubes(Number(text))} value={numOfTubes} />
        <TextInput label='Tube Pitch' placeholder='Tube Pitch' onChangeText={text => setTubePitch(Number(text))} value={tubePitch} />
        <TextInput label='Tube Layout' placeholder='Tube Layout' onChangeText={text => setTubeLayout(Number(text))} value={tubeLayout} />
        <TextInput label='Tube Length' placeholder='Tube Length' onChangeText={text => setTubeLength(Number(text))} value={tubeLength} />
        <TextInput label='Tube Inner Diameter' placeholder='Tube Inner Diameter' onChangeText={text => setTubeInnerDiameter(Number(text))} value={tubeInnerDiameter} />
        <TextInput label='Tube Outer Diameter' placeholder='Tube Outer Diameter' onChangeText={text => setTubeOuterDiameter(Number(text))} value={tubeOuterDiameter} />
        <TextInput label='Number of Passes' placeholder='Number of Passes' onChangeText={text => setNumOfPasses(Number(text))} value={numOfPasses} />
        <TextInput label='Number of Baffles' placeholder='Number of Baffles' onChangeText={text => setNumOfBaffles(Number(text))} value={numOfBaffles}/>
        <TextInput label='Baffle Cut' placeholder='Baffle Cut' onChangeText={text => setBaffleCut(Number(text))} value={baffleCut} />
        <TextInput label='Baffle Spacing' placeholder='Baffle Spacing' onChangeText={text => setBaffleSpacing(Number(text))} value={baffleSpacing} />
        <TextInput label='Shell Diameter' placeholder='Shell Diameter' onChangeText={text => setShellDiameter(Number(text))} value={shellDiameter} />
        

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

  );
}