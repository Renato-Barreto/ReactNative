import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

const CalculoIMC = () => {
    const [peso, setPeso] = useState<string>("");
    const [altura, setAltura] = useState<string>("");
    const [mensagem, setMensagem] = useState<string>("");

    const calcularIMC = () => {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        if (!pesoNum || !alturaNum) {
            Alert.alert("Erro", "Por favor, insira valores válidos para peso e altura.");
            return;
        }

        const imc = pesoNum / (alturaNum * alturaNum);
        let classificacao;

        if (imc < 18.5) {
            classificacao = "Magreza";
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = "Normal";
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = "Acima do peso";
        } else {
            classificacao = "Obesidade";
        }

        setMensagem(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}`);
        Alert.alert("Resultado", `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>BodyCheck</Text>
            <Text style={styles.title2}>Um suporte ao bem-estar</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Peso em Kg" 
                keyboardType="numeric" 
                value={peso} 
                onChangeText={setPeso} 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Altura em M" 
                keyboardType="numeric" 
                value={altura} 
                onChangeText={setAltura} 
            />
            <Button title="Calcular IMC" onPress={calcularIMC} color="#002B4D"/>
            {mensagem ? <Text style={styles.result}>{mensagem}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7DBEFC",
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontFamily: 'Inter',
        fontWeight: "bold",
        color: "#003478",
        marginBottom: 20,
    },
    title2: {
        fontSize: 19,
        fontFamily: 'Inter',
        fontWeight: "bold",
        color: "#003478",
        marginBottom: 20,
    },
    input: {
        width: "80%",
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#004A78",
        borderRadius: 20,
        backgroundColor: "#ffffff",
    },
    result: {
        marginTop: 15,
        fontSize: 16,
        fontWeight: "bold",
        color: "#003478",
    },
});

export default CalculoIMC;
