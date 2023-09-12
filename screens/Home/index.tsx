import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { styles } from './style';
import { useState } from 'react';

export function Home() {
    const [score, setScore] = useState(0);

    const [scoreRight, setScoreRight] = useState(0);
    const [scoreWrong, setScoreWrong] = useState(0);

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const operators = ['+', '-', '*', '/'];
    const [operator, setOperator] = useState('');

    const [result, setResult] = useState('');

    function handleSort() {
        setNumber1(Math.floor(Math.random() * (100 - 1 + 1) + 1));
        setNumber2(Math.floor(Math.random() * (100 - 1 + 1) + 1));

        setOperator(operators[Math.floor(Math.random() * operators.length)]);
        setResult('');
    }

    function handleValidate() {
        const userAnswer = parseFloat(result);

        let correctAnswer;
        if (operator === '+') {
            correctAnswer = number1 + number2;
        } else if (operator === '-') {
            correctAnswer = number1 - number2;
        } else if (operator === '*') {
            correctAnswer = number1 * number2;
        } else {
            correctAnswer = parseFloat((number1 / number2).toFixed(2));
            
        }

        if (result === '') {
            Alert.alert('Informe uma resposta')
        } else {
            if (userAnswer === correctAnswer) {
                setScoreRight(scoreRight + 1);
                setScore(score + 10);
                Alert.alert('Você acertou', 'Deseja uma nova conta?', [
                    {
                        text: 'Sim',
                        onPress: () => handleSort()
                    },
                    {
                        text: 'Não',
                        style: 'cancel'
                    }
                ])
            } else {
                setScoreWrong(scoreWrong + 1);
                setScore(score - 5);
                Alert.alert('Você errou', 'Deseja uma nova conta?', [
                    {
                        text: 'Sim',
                        onPress: () => handleSort()
                    },
                    {
                        text: 'Não',
                        style: 'cancel'
                    }
                ])
            }
        }
    }

    function newGame() {
        setScore(0);
        setScoreRight(0);
        setScoreWrong(0);
        setNumber1(0);
        setNumber2(0);
        setResult('');
    }



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Você tem {score} pontos</Text>
            <View style={styles.score}>
                <Text style={styles.right}>Certas</Text>
                <Text style={styles.points}>{scoreRight}</Text>

                <Text style={styles.wrong}>Erradas</Text>
                <Text style={styles.points}>{scoreWrong}</Text>
            </View>
            <TouchableOpacity style={styles.btnSort} onPress={handleSort}>
                <Text style={styles.txtBtnSort}>Sortear Desafio</Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine}></View>
            <Text style={styles.label}>Quanto é:</Text>
            <View style={styles.equation}>
                <View style={styles.equationComponents}>
                    <Text style={styles.equationComponentsText}>{number1}</Text>
                </View>
                <View style={styles.equationComponents}>
                    <Text style={styles.equationComponentsText}>{operator}</Text>
                </View>
                <View style={styles.equationComponents}>
                    <Text style={styles.equationComponentsText}>{number2}</Text>
                </View>
            </View>
            <Text style={styles.label}>Informe sua resposta</Text>
            <TextInput style={styles.inputAnswer}
                onChangeText={text => setResult(text)}
                onChange={text => setResult('')}
                value={result}>
                    
            </TextInput>
            <TouchableOpacity style={styles.btnValidate} onPress={handleValidate}>
                <Text style={styles.txtBtnSort}>Validar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnNewGame}>
                <Text style={styles.txtBtnSort} onPress={newGame}>Novo Jogo</Text>
            </TouchableOpacity>
        </View>
    )
}