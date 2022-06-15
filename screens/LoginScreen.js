import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useContext,useEffect} from 'react';

import AppStack from '../navigation/AppStack';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

import SocialButton from '../components/SocialButton';
import {windowHeight} from '../Utils/Dimensions';

import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({route,navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login, googleLogin} = useContext(AuthContext);

  useEffect(()=>{
    if(route.params){
      setEmail(route.params.em);
      setPassword(route.params.pp);
    }
  },[route.params])
  
  return (
    <View style={styles.container}>
      <View style={styles.minor}>
        <Image source={require('../assets/salad.png')} style={styles.logo} />
        <Text style={styles.text}>EatTime!</Text>

        <FormInput
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholder="joe.doe@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          onChangeText={userPassword => setPassword(userPassword)}
          placeholder="***************"
          secureTextEntry={true}
        />

        <FormButton
          buttonTitle="Sign In"
          onPress={() => {
            
            login(email, password)

          }
        }
        />

      
        {Platform.OS === 'android' ? (
          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
        ) : null}
      </View>
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Haven't got an account?{' '}
          <Text style={{color: '#F7893E', fontWeight: '500'}}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    padding: 0,
    paddingTop: 75,
    height: windowHeight,
  },
  minor: {
    backgroundColor: '#f9fafd',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    marginBottom: 10,
    height: windowHeight,
  },
  logo: {
    height: 60,
    width: 60,
    resizeMode: 'cover',
    marginBottom: 25,
  },
  text: {
    fontSize: 34,
    fontWeight: '400',
    fontFamily: 'inter Neue',
    color: '#051d5f',
    marginBottom: 10,
  },
  bottomButton: {
    marginTop: windowHeight / 7,
    backgroundColor: '#F2F2F7',
    width: '100%',
    alignItems: 'center',
    height: 70,
    borderTopColor: '#D9D9D9',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    paddingTop: 7,
    fontSize: 16,
    fontWeight: '500',
    color: '#3C3C43',
    fontFamily: 'inter Neue',
  },
});
