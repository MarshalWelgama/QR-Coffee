// Formik x React Native example
import React, { useState } from "react";
import { Button, TextInput, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Formik, FormikProps, Form } from "formik";
import COLORS from "../const/colors"
import Icon from "react-native-vector-icons/Feather";

interface MyFormValues {
  fullName: string;
  mobile: string;
  email: string;
  password: string;
}

interface Label {
  name: string;
  password: boolean;
}
const InputField: React.FC<Label & any> = ({
  name,
  password,
  onFocus = () => { },
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <View>
      <View style={[styles.inputContainer, isFocused ? { borderColor: COLORS.dark, borderWidth: 1, } : { borderColor: COLORS.lightest, borderWidth: 0.5 }]}>
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus()
            setIsFocused(true)
          }}
          onBlur={() => {
            setIsFocused(false)
          }}
          secureTextEntry={password ? true : false}
          placeholderTextColor={"grey"}
          style={styles.inputText}
          {...props}
        />

      </View>
    </View>
  );
};

export const MyReactNativeForm: React.FC<{}> = () => {
  //can do a map, add props to fill up initial values, then set the login based on this maybe?
  const initialValues: MyFormValues = {
    fullName: "",
    mobile: "",
    email: "",
    password: "",
  };
  return (
    <View>
      <Formik
        initialValues={initialValues}
        // onSubmit={(values) => console.log(values)}
        onSubmit={(val) => console.log(val)}
      >
        {(props: FormikProps<MyFormValues>) => (
          <View>
            <InputField
              label="Email"
              placeholder="Email"
              onChangeText={props.handleChange("fullName")}
            />
            <InputField
              password
              label="Password"
              placeholder="Password"
              onChangeText={props.handleChange("mobile")}
            />
            <TouchableOpacity style={{
              marginTop: 5,
              flexDirection: "row",
              justifyContent: "flex-end",
            }}><Text>Forgot Password</Text></TouchableOpacity>
            <TouchableOpacity style={styles.login} onPress={() => console.log('hi')}><Text>Sign In</Text></TouchableOpacity>
            <TouchableOpacity style={styles.google} onPress={() => console.log('hi')}><Text>Sign in with Google</Text></TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,

    color: COLORS.dark
  },
  inputText: {
    fontSize: 14,
    width: 300,

  },
  inputContainer: {
    height: 65,
    backgroundColor: COLORS.lightest,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: 'center',
    width: 300,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  login: {
    height: 65,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: "center",
    width: 300,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    top: 60
  },
  google: {
    height: 65,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: "center",
    width: 300,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    top: 60,
    borderWidth: 0.5
  }
});