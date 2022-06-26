import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Text, StyleSheet, Button, View, Dimensions } from "react-native";
import { IStackScreenProps } from "../library/IStackScreenProps";
import { IQRCodePayload } from "../library/IQRCodePayload";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const ScanScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
  const [loading, setLoading] = useState(true);
  const [scanData, setScanData] = useState<IQRCodePayload>();
  const [permission, setPermission] = useState(true);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const { status, granted } =
        await BarCodeScanner.requestPermissionsAsync();
      console.log(`Status: ${status}, Granted: ${granted}`);

      if (status === "granted") {
        console.log("Access granted");
        setPermission(true);
      } else {
        setPermission(false);
      }
    } catch (error) {
      console.error(error);
      setPermission(false);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Text>Requesting permission ...</Text>;

  if (scanData) {
    return (
      <React.Fragment>
        <Text style={styles.text}>Name: {scanData.name}</Text>
        <Text style={styles.text}>Number: {scanData.number}</Text>
        <Button title="Scan Again" onPress={() => setScanData(undefined)}>
          Scan Again
        </Button>
      </React.Fragment>
    );
  }

  if (permission) {
    return (
      <BarCodeScanner
        style={[styles.container]}
        onBarCodeScanned={({ type, data }) => {
          try {
            console.log(type);
            console.log(data);
            let _data = JSON.parse(data);
            setScanData(_data);
          } catch (error) {
            console.error("Unable to parse string: ", error);
          }
        }}
      >
                  <View style={styles.topright}></View>
                  <View style={styles.topleft}></View>
                  <View style={styles.bottomright}></View>
                  <View style={styles.bottomleft}></View>
      </BarCodeScanner>
    );
  } else {
    return <Text style={styles.textError}>Permission rejected.</Text>;
  }
};

export default ScanScreen;

var {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 15,
    backgroundColor: "white",
  },
  textError: {
    color: "red",
  },
  topright: {
    height: 30,
    width: 30,
    borderRightWidth:5,
    borderTopWidth:5,
    right:width * 0.25,
    top: height * 0.33,
    borderColor: 'white',
    position: 'absolute', 
    alignItems: "center",
    zIndex: 99,
  }, 
  topleft: {
    height: 30,
    width: 30,
    borderLeftWidth: 5,
    borderTopWidth:5,
    left:width * 0.25,
    top: height * 0.33,
    borderColor: 'white',
    position: 'absolute', 
    alignItems: "center",
    zIndex: 99,
  },
  bottomleft: {
    height: 30,
    width: 30,
    borderLeftWidth:5,
    borderBottomWidth:5,
    left:width * 0.25,
    bottom: height * 0.33,
    borderColor: 'white',
    position: 'absolute', 
    alignItems: "center",
    zIndex: 99,
  },
  bottomright: {
    height: 30,
    width: 30,
    borderRightWidth:5,
    borderBottomWidth:5,
    right:width * 0.25,
    bottom: height * 0.33,
    borderColor: 'white',
    position: 'absolute', 
    alignItems: "center",
    zIndex: 99,
  }
});
