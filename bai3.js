import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';

const TextInputCustom = ({placeholder, title, value, onChangeText, error}) => {
  const [isclick, setisclick] = useState(false);
  const handleFocus = () => {
    setisclick(true);
  };
  const handleBlur = () => {
    setisclick(false);
  };
  return (
    <View>
      <TextInput
        style={[
          isclick ? styles.inputnhaptext : styles.inputchuanhaptext,
          error ? styles.inputerr : null,
        ]}
        placeholder={placeholder}
        placeholderTextColor={isclick ? 'black' : 'gray'}
        onChangeText={onChangeText}
        value={value}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      {error ? (
        <Image
          source={{
            uri: 'https://img.icons8.com/?size=80&id=42452&format=png',
          }}
          style={{
            height: 22,
            width: 22,
            position: 'absolute',
            end: 10,
            tintColor: 'red',
            bottom: 40,
          }}
        />
      ) : null}
      {error ? (
        <Text style={{color: 'red', marginStart: 20, fontSize: 13}}>
          {error}
        </Text>
      ) : null}
    </View>
  );
};

const Bai3 = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [error, setError] = useState('');
  const [error2, setError2] = useState('');
  const checkten = text => {
    if (text.trim() === '') {
      setError('Không được để trống');
    } else {
      setError('');
    }
    setInputValue(text);
  };
  const checktuoi = text => {
    if (text.trim() === '') {
      setError2('Không được để trống');
    } else {
      setError2('');
    }
    setInputValue2(text);
  };

  const handleSubmit = () => {
    if (inputValue.length <= 0) {
      setError('Không được để trống');
    }
    if (inputValue2.length <= 0) {
      setError2('Không được để trống');
    } else {
      setError('');
      setError2('');
    }
  };

  return (
    <View style={{padding: 10}}>
      <Text style={styles.h1}>Tên: </Text>
      <TextInputCustom
        placeholder="Mời nhập dữ liệu"
        value={inputValue}
        onChangeText={checkten}
        error={error}
      />
      <Text style={styles.h1}>Tuổi: </Text>
      <TextInputCustom
        placeholder="Nhập tuổi"
        value={inputValue2}
        onChangeText={checktuoi}
        error={error2}
      />
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          backgroundColor: '#669999',
          alignItems: 'center',
          padding: 10,
          marginTop: 10,
          marginHorizontal: 20,
        }}
        onPress={handleSubmit}>
        <Text style={{color: 'white', fontSize: 17, fontWeight: '700'}}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bai3;

const styles = StyleSheet.create({
  h1: {color: 'black', fontSize: 16, fontWeight: '400'},
  inputerr: {
    borderWidth: 1.5,
    marginBottom: 5,
    borderColor: 'red',
    backgroundColor: 'white',
    borderColor: '#ff6666',
    fontSize: 13,
    borderRadius: 10,
    backgroundColor: '#ffcccc',
    paddingHorizontal: 10,
  },
  inputnhaptext: {
    borderWidth: 1.5,
    borderRadius: 10,
    marginBottom: 5,
    borderColor: '#99d6ff',
    fontSize: 13,
    backgroundColor: '#e6faff',
    paddingHorizontal: 10,
  },
  inputchuanhaptext: {
    borderWidth: 1.5,
    borderRadius: 10,
    marginBottom: 5,
    borderColor: '#f5f5f0',
    fontSize: 13,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
});
