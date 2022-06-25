// Formik x React Native example
import React from "react";
import { Button, TextInput, View, Text } from "react-native";
import { Formik, FormikProps, Form } from "formik";

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface Label {
  label: string;
  name: string;
  password: boolean;
}
const InputField: React.FC<Label & any> = ({
  name,
  label,
  password,
  ...props
}) => {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <View>
        <TextInput
          secureTextEntry={password ? true : false}
          placeholderTextColor={"grey"}
          style={{
            fontSize: 18,
            borderBottomColor: "grey",
            borderBottomWidth: 2,
            width: 300,
          }}
          {...props}
        />
      </View>
    </View>
  );
};

export const MyReactNativeForm: React.FC<{}> = () => {
  //can do a map, add props to fill up initial values, then set the login based on this maybe? 
  const initialValues: MyFormValues = {
    firstName: "",
    lastName: "",
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
            label="label1"
              placeholder="First Name"
              onChangeText={props.handleChange("firstName")}
            />
            <InputField
             label="label2"
              placeholder="Last Name"
              onChangeText={props.handleChange("lastName")}
            />
            <InputField
              placeholder="Email Name"
              onChangeText={props.handleChange("email")}
            />
            <InputField
              placeholder="Password"
              password
              onChangeText={props.handleChange("password")}
            />
            <Button title="submit" onPress={() => props.handleSubmit()} />
          </View>
        )}
      </Formik>
    </View>
  );
};
