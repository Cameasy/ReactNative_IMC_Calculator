import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, Vibration} from "react-native";
import ResultImc from './ResultImc'
import styles  from "./style";

export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("Preencha o Peso e a  Altura!")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")
const [errorMessage, setErrorMessage] = useState(null)

function ImcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function verificationImc(){
    if(imc == null){
        Vibration.vibrate();
        setErrorMessage("campo obrigatório*")
    }
}

function validationImc(){
    if(weight != null && height != null){
        ImcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu IMC é Igual a: ")
        setTextButton("Calcular Novamente")
        setErrorMessage(null)
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o Peso e a  Altura!")
    verificationImc()
   
}

    return (
        <View style={styles.formContext}>
          <View style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput  style={styles.input} onChangeText={setHeight} value={height} placeholder="Ex: 1.75" keyboardType='number-pad' />
            <Text style={styles.formLabel}>Peso</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput style={styles.input} onChangeText={setWeight}  value={weight}  placeholder="Ex: 60.750" keyboardType='number-pad' />
            <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImc()}> 
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
          </View>
          <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
};

  