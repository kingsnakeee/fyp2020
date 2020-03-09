// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import { globalStyles } from '../styles/global';


// export default function SSRatingAnalysis(props) {
//     const [massFlowRate, setmassFlowRate] = useState(0)
//     const [ssInletTemp, setssInletTemp] = useState(0)
//     const [ssOutletTemp, setssOutletTemp] = useState(0)
//     const [heatCapacity, setheatCapacity] = useState(0)
//     const [fluidType, setfluidType] = useState(0)
//     const [viscosity, setViscosity] = useState(0)
//     const [density, setDensity] = useState(0)
//     const [conductivity, setConductivity] = useState(0)

// return (
//     <View style={globalStyles.container} button>
//         <Text>Shell Side</Text>
//         {/* <TextInput placeholder="Mass Flow Rate" onChangeText={text => setmassFlowRate(Number(text))} value={massFlowRate} keyboardType='numeric'/> */}
//         <TextInput placeholder="Inlet Temperature" onTextChange={handleChange('ssInletTemp')} value={values['ssInletTemp']} keyboardType='numeric' />
//         <TextInput placeholder="Outlet Temperature" onTextChange={handleChange('ssOutletTemp')} value={values['ssOutletTemp']} keyboardType='numeric' />
//         {/* <TextInput placeholder="Heat Capacity" onChangeText={text => setheatCapacity(Number(text))} value={heatCapacity} />
//         <TextInput placeholder="Fluid Type" onChangeText={text => setfluidType(Number(text))} value={fluidType} />
//         <TextInput placeholder="Viscosity" onChangeText={text => setViscosity(Number(text))} value={viscosity} />
//         <TextInput placeholder="Density" onChangeText={text => setDensity(Number(text))} value={density} />
//         <TextInput placeholder="Conductivity" onChangeText={text => setConductivity(Number(text))} value={conductivity} /> */}
//     </View>
// )}




import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { useFormikContext } from 'formik'


export default function SS_RatingAnalysis(props) {

    const {values, handleChange} = useFormikContext()

return (
    <View style={globalStyles.container}>
        <Text>Shell Side</Text>
        <TextInput placeholder="Mass Flow Rate" onChangeText={handleChange('ssMassFlowRate')} value={values.ssMassFlowRate} keyboardType='numeric' />
        <TextInput placeholder="Inlet Temperature" onChangeText={handleChange('ssInletTemp')} value={values.ssInletTemp} keyboardType='numeric' />
        <TextInput placeholder="Outlet Temperature" onChangeText={handleChange('ssOutletTemp')} value={values.ssOutletTemp} keyboardType='numeric' />
        <TextInput placeholder="Specific Heat Capacity" onChangeText={handleChange('ssHeatCapacity')} value={values.ssHeatCapacity} keyboardType='numeric' />
        <TextInput placeholder="Viscosity" onChangeText={handleChange('ssViscosity')} value={values.ssViscosity} keyboardType='numeric' />
        <TextInput placeholder="Density" onChangeText={handleChange('ssDensity')} value={values.ssDensity} keyboardType='numeric' />
        <TextInput placeholder="Conductivity" onChangeText={handleChange('ssConductivity')} value={values.ssConductivity} keyboardType='numeric' />
    </View>
)}