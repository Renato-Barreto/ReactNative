import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

const CalculoMedia = () => {
    const [nome, setNome] = useState<string>("");
    const [nota1, setNota1] = useState<string>("");
    const [nota2, setNota2] = useState<string>("");
    const [nota3, setNota3] = useState<string>("");
    const [faltas, setFaltas] = useState<string>("");
    const [mensagem, setMensagem] = useState<string>("");

    const calcularMedia = () => {
        const nota1Num = parseFloat(nota1);
        const nota2Num = parseFloat(nota2);
        const nota3Num = parseFloat(nota3);
        const faltasNum = parseFloat(faltas);

        if (!nota1Num || !nota2Num || !nota3Num) {
            Alert.alert("Erro", "Por favor, insira valores válidos.");
            return;
        }

        const media = (nota1Num + nota2Num + nota3Num)/3;
        let classificacao;

        if (media >= 7 && faltasNum < 75) {
            classificacao = "Aprovado";
        } else if (media < 7 && faltasNum < 75) {
            classificacao = "Reprovado por nota";
        } else if (media >= 7 && faltasNum >= 75) {
            classificacao = "Reprovado por falta";
        }

        setMensagem(`Olá ${nome} sua media é ${media.toFixed(2)} - ${classificacao}`);
        Alert.alert("Resultado", `Sua média é ${media.toFixed(2)} - ${classificacao}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SMC - Senai Media Calculator</Text>
            <Text style={styles.title2}>Objetividade</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Nome" 
                value={nome} 
                onChangeText={setNome} 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Nota 1" 
                keyboardType="numeric" 
                value={nota1} 
                onChangeText={setNota1} 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Nota 2" 
                keyboardType="numeric" 
                value={nota2} 
                onChangeText={setNota2} 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Nota 3" 
                keyboardType="numeric" 
                value={nota3} 
                onChangeText={setNota3} 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Porcentagem de faltas (0 a 100)" 
                keyboardType="numeric" 
                value={faltas} 
                onChangeText={setFaltas} 
            />
            <Button title="Calcular Media" onPress={calcularMedia} color="#002B4D"/>
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

export default CalculoMedia;
