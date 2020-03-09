import { jFactorCoefficient } from "../tableOfValues/jFactorCoeffcient";

export function clearance(tubePitch, tsOuterDiameter) {
    return (
        tubePitch - tsOuterDiameter
    )
}

export function areaOfShell(tubePitch, tsOuterDiameter, ssInnerDiameter, baffleSpacing) {
    return (
        (clearance(tubePitch, tsOuterDiameter) / tubePitch) * ssInnerDiameter * baffleSpacing
    )
}

export function prandtlNum(ssHeatCapacity, ssViscosity, ssConductivity) {
    return (
        (ssHeatCapacity * ssViscosity) / ssConductivity
    )
}

export function equiDiameter(tubePitch, tsOuterDiameter) {
    return (
        (4 * Math.pow(tubePitch, 2) - Math.PI * Math.pow(tsOuterDiameter, 2)) / (Math.PI * tsOuterDiameter)
    )
}

export function reynoldNum(ssMassFlowRate, tubePitch, tsOuterDiameter, ssInnerDiameter, baffleSpacing, ssViscosity) {
    return (
        ((ssMassFlowRate) * 1/(areaOfShell(tubePitch, tsOuterDiameter, ssInnerDiameter, baffleSpacing)) * equiDiameter(tubePitch, tsOuterDiameter)) / ssViscosity
    )
}

// export function tubeLayoutAngle(tubeLayoutAngle) {
//     return (
//         tubeLayoutAngle = 30 || tubeLayoutAngle = 60 || tubeLayoutAngle = 30
//     )
// }

// export function jFactor(ssMassFlowRate, tubePitch, tsOuterDiameter, ssInnerDiameter, baffleSpacing, ssViscosity, reynoldNum, tubeLayoutAngle, tsInnerDiameter) {
//     return (
//         jFactorCoefficient(reynoldNum, tubeLayoutAngle) * Math.pow(1.33/(tubePitch/tsInnerDiameter), jFactorCoefficient(reynoldNum, tubeLayoutAngle)) * Math.pow(reynoldNum(ssMassFlowRate, tubePitch, tsOuterDiameter, ssInnerDiameter, baffleSpacing, ssViscosity), jFactorCoefficient(reynoldNum, tubeLayoutAngle))
//     )
// }

export function jFactor(ssMassFlowRate, tubePitch, tsOuterDiameter, ssInnerDiameter, baffleSpacing, ssViscosity, tsInnerDiameter, tubeLayoutAngle) {
    return (
        jFactorCoefficient(reynoldNum(ssMassFlowRate, tubePitch, tsOuterDiameter, ssInnerDiameter, baffleSpacing, ssViscosity), tubeLayoutAngle).a1

        * Math.pow(1.33/(tubePitch/tsInnerDiameter), jFactorCoefficient(reynoldNum(ssMassFlowRate, tubePitch, tsOuterDiameter, ssInnerDiameter, baffleSpacing, 
            ssViscosity),tubeLayoutAngle)).a)

        * Math.pow(reynoldNum(ssMassFlowRate, tubePitch, tsOuterDiameter, ssInnerDiameter, baffleSpacing, ssViscosity),jFactorCoefficient(reynoldNum(ssMassFlowRate,
            tubePitch, tsOuterDiameter, ssInnerDiameter, baffleSpacing, ssViscosity), tubeLayoutAngle).a2
    )
}

// export function hTcoefficient() {
//     return (

//     )
// }