import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const add = () => {
    if (!validateInputs()) return;

    const resultValue = parseFloat(num1) + parseFloat(num2);
    setResult(resultValue.toString());
    clearErrorMessage();
  };

  const subtract = () => {
    if (!validateInputs()) return;

    const resultValue = parseFloat(num1) - parseFloat(num2);
    setResult(resultValue.toString());
    clearErrorMessage();
  };

  const multiply = () => {
    if (!validateInputs()) return;

    const resultValue = parseFloat(num1) * parseFloat(num2);
    setResult(resultValue.toString());
    clearErrorMessage();
  };

  const divide = () => {
    if (!validateInputs()) return;

    if (parseFloat(num2) === 0) {
      setErrorMessage("Cannot divide by zero!");
      return;
    }

    const resultValue = parseFloat(num1) / parseFloat(num2);
    setResult(resultValue.toString());
    clearErrorMessage();
  };

  const validateInputs = () => {
    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
      setErrorMessage("Invalid input!");
      return false;
    }

    return true;
  };

  const clearErrorMessage = () => {
    setErrorMessage('');
  };

  return (
    <View style={styles.container}>
      <Text h3 style={styles.result}>{result}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter the first number"
        value={num1}
        onChangeText={setNum1}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter the second number"
        value={num2}
        onChangeText={setNum2}
        keyboardType="numeric"
      />

      {errorMessage !== '' && <Text style={styles.errorMessage}>{errorMessage}</Text>}

      <View style={styles.buttonsContainer}>
        <Button title="+" onPress={add} icon={<Icon name="plus" size={15} color="white" />} />
        <Button title="-" onPress={subtract} icon={<Icon name="minus" size={15} color="white" />} />
        <Button title="*" onPress={multiply} icon={<Icon name="times" size={15} color="white" />} />
        <Button title="/" onPress={divide} icon={<Icon name="divided-by" size={15} color="white" />} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  result: {
    marginBottom: 20,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
});

export default App;
