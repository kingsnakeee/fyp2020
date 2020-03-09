import React from "react";
import { ScrollView } from "react-native";
import { globalStyles } from "../styles/global";

import SS_RatingAnalysis from "./SS_RatingAnalysis";
import TS_RatingAnalysis from "./TS_RatingAnalysis";
import PP_RatingAnalysis from "./PP_RatingAnalysis";
import FVP_RatingAnalysis from "./FVP_RatingAnalysis";
import TS_Solutions from "./TS_Solutions";
import SS_Solutions from "./SS_Solutions";

import { Formik } from "formik";

export default RatingAnalysis = props => {
  const initialValue = {
    tsInletTemp: 0,
    tsOutletTemp: 0,
    ssInletTemp: 0,
    ssOutletTemp: 0,
    numOfTubes: 0,
    tsInnerDiameter: 0,
    tsMassFlowRate: 0,
    tsDensity: 0,
    tsViscosity: 0,
    tsHeatCapacity: 0,
    tsConductivity: 0,
    tubePitch: 0,
    tsOuterDiameter: 0,
    baffleSpacing: 0,
    ssMassFlowRate: 0,
    tubeLayoutAngle: 0
  };


  return (
    <Formik initialValues={initialValue}>
      <ScrollView style={globalStyles.container}>
        <TS_RatingAnalysis />
        <TS_Solutions />
        <SS_RatingAnalysis />
        <SS_Solutions />
        <PP_RatingAnalysis />
        <FVP_RatingAnalysis />
      </ScrollView>
    </Formik>
  );
};
