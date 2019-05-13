import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button } from "native-base";

var itemArray = new Array(9).fill("empty");
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCrossed: false,
      winGame: ""
    };
  }

  componentDidUpdate() {
    this.onceAnyoneWin();
  }

  drawIcon = itemNumber => {
    //decides for icon: cross /circle/default

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = this.state.isCrossed; //set the box to cross or circle
      //setting state based on values on previous box i.e if cross then circle and vice versa
      this.setState({ isCrossed: !itemArray[itemNumber] }, () => {});
    }

    this.winGame();
  };

  onceAnyoneWin = () => {
    if (this.state.winGame.includes("wins")) {
      Alert.alert("Hurray.." + this.state.winGame + " !!!");
      this.resetGame();
    }
  };

  chooseItemIcon = itemNumber => {
    //icon to be drawn
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "cross" : "circle";
    }
    return "pencil";
  };

  chooseItemColor = itemNumber => {
    //chooose icon for a color
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "red" : "green";
    }
    return "black";
  };

  resetGame = () => {
    //reset all states and values
    itemArray.fill("empty");
    this.setState({ winGame: "" });
    //force update components
    this.forceUpdate();
  };

  winGame = () => {
    //check/decide winner 1)horizontal 3  2)vertical 3  3)diagonal 2

    if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[1] &&
      itemArray[1] == itemArray[2]
    ) {
      this.setState({
        winGame: (itemArray[0] ? "Cross" : "Circle").concat(" wins")
      });
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] == itemArray[4] &&
      itemArray[4] == itemArray[5]
    ) {
      this.setState({
        winGame: (itemArray[3] ? "Cross" : "Circle").concat(" wins")
      });
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] == itemArray[7] &&
      itemArray[7] == itemArray[8]
    ) {
      this.setState({
        winGame: (itemArray[6] ? "Cross" : "Circle").concat(" wins")
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[3] &&
      itemArray[3] == itemArray[6]
    ) {
      this.setState({
        winGame: (itemArray[0] ? "Cross" : "Circle").concat(" wins")
      });
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] == itemArray[4] &&
      itemArray[4] == itemArray[7]
    ) {
      this.setState({
        winGame: (itemArray[1] ? "Cross" : "Circle").concat(" wins")
      });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[5] &&
      itemArray[5] == itemArray[8]
    ) {
      this.setState({
        winGame: (itemArray[2] ? "Cross" : "Circle").concat(" wins")
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[4] &&
      itemArray[4] == itemArray[8]
    ) {
      this.setState({
        winGame: (itemArray[0] ? "Cross" : "Circle").concat(" wins")
      });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[4] &&
      itemArray[4] == itemArray[6]
    ) {
      this.setState({
        winGame: (itemArray[2] ? "Cross" : "Circle").concat(" wins")
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[1] !== "empty" &&
      itemArray[2] !== "empty" &&
      itemArray[3] !== "empty" &&
      itemArray[4] !== "empty" &&
      itemArray[5] !== "empty" &&
      itemArray[6] !== "empty" &&
      itemArray[7] !== "empty" &&
      itemArray[8] !== "empty"
    ) {
      this.setState({ winGame: "It's Draw..Play Again" });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.result}>Tic Tac Toe</Text>

        <View style={styles.grid}>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawIcon(0);
                }}
              >
                <Entypo
                  name={this.chooseItemIcon(0)}
                  size={50}
                  color={this.chooseItemColor(0)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawIcon(1);
                }}
              >
                <Entypo
                  name={this.chooseItemIcon(1)}
                  size={50}
                  color={this.chooseItemColor(1)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawIcon(2);
                }}
              >
                <Entypo
                  name={this.chooseItemIcon(2)}
                  size={50}
                  color={this.chooseItemColor(2)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawIcon(3);
                }}
              >
                <Entypo
                  name={this.chooseItemIcon(3)}
                  size={50}
                  color={this.chooseItemColor(3)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawIcon(4);
                }}
              >
                <Entypo
                  name={this.chooseItemIcon(4)}
                  size={50}
                  color={this.chooseItemColor(4)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawIcon(5);
                }}
              >
                <Entypo
                  name={this.chooseItemIcon(5)}
                  size={50}
                  color={this.chooseItemColor(5)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawIcon(6);
                }}
              >
                <Entypo
                  name={this.chooseItemIcon(6)}
                  size={50}
                  color={this.chooseItemColor(6)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawIcon(7);
                }}
              >
                <Entypo
                  name={this.chooseItemIcon(7)}
                  size={50}
                  color={this.chooseItemColor(7)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawIcon(8);
                }}
              >
                <Entypo
                  name={this.chooseItemIcon(8)}
                  size={50}
                  color={this.chooseItemColor(8)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Button
          onPress={() => {
            this.resetGame();
          }}
          style={styles.btnreset}
          full
          rounded
        >
          <Text style={styles.resettext}>Play Again</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0DF87",
    alignItems: "center",
    justifyContent: "center"
  },
  grid: {},
  row: {
    flexDirection: "row"
  },
  item: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#2B2B52"
  },
  result: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    paddingVertical: 20
  },
  btnreset: {
    margin: 30,
    padding: 30,
    backgroundColor: "#2475B0"
  },
  resettext: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold"
  }
});
