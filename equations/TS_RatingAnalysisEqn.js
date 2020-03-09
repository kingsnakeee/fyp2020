import React from 'react'

export function LMTD(tsInletTemp, tsOutletTemp, ssInletTemp, ssOutletTemp) {
    return (
       ( (tsInletTemp - tsOutletTemp) - (ssOutletTemp - ssInletTemp) ) / Math.log( (tsInletTemp - tsOutletTemp) / (ssOutletTemp - ssInletTemp) )
    )
}

export function areaOfTubes(tsInnerDiameter, numOfTubes) {
    return (
        ( (Math.PI / 4) * (Math.pow(tsInnerDiameter,2)) * (numOfTubes) )
    )
}

export function velOfFluid(tsMassFlowRate, tsDensity, tsInnerDiameter, numOfTubes) {
    return (
       ( (tsMassFlowRate) / (tsDensity * areaOfTubes(tsInnerDiameter, numOfTubes)) )
    )
}

export function reynoldNum(tsMassFlowRate, tsDensity, tsInnerDiameter, numOfTubes, tsViscosity) {
    return (
        ( (tsDensity) * velOfFluid(tsMassFlowRate, tsDensity, tsInnerDiameter, numOfTubes) * (tsInnerDiameter) ) / (tsViscosity)
    )
}

export function prandtlNum(tsHeatCapacity, tsViscosity, tsConductivity) {
    return (
        ( ((tsHeatCapacity) * (tsViscosity)) / (tsConductivity) )
    )
}

export function frictionFactor(tsMassFlowRate, tsDensity, tsInnerDiameter, numOfTubes, tsViscosity) {
    return (
        Math.pow(( 1.58 * Math.log(reynoldNum(tsMassFlowRate, tsDensity, tsInnerDiameter, numOfTubes, tsViscosity)) - 3.28 ) , 2 * Math.sign(-1))
    )
}

export function nusseltNum(tsMassFlowRate, tsDensity, tsInnerDiameter, numOfTubes, tsViscosity, tsHeatCapacity, tsConductivity) {
    return (
        ( (frictionFactor(tsMassFlowRate, tsDensity, tsInnerDiameter, numOfTubes, tsViscosity) / 2) * (reynoldNum(tsMassFlowRate, tsDensity, tsInnerDiameter, numOfTubes, tsViscosity) - 1000) *  prandtlNum(tsHeatCapacity, tsViscosity, tsConductivity)) / ( 1 + 12.7 * Math.pow((frictionFactor(tsMassFlowRate, tsDensity, tsInnerDiameter, numOfTubes, tsViscosity) / 2), 0.5) * (Math.pow(prandtlNum(tsHeatCapacity, tsViscosity, tsConductivity), (2/3)) - 1) )
    )
}

export function hTcoefficient(tsMassFlowRate, tsDensity, tsInnerDiameter, numOfTubes, tsViscosity, tsHeatCapacity, tsConductivity) {
    return (
        ( nusseltNum(tsMassFlowRate, tsDensity, tsInnerDiameter, numOfTubes, tsViscosity, tsHeatCapacity, tsConductivity) * tsConductivity ) / (tsInnerDiameter)
    )
}
