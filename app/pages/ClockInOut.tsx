import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSendTransaction } from "thirdweb/react";
import { prepareContractCall } from "thirdweb";
import { contract } from "@/constants/thirdweb"; // Ensure correct path

const ClockInOut = () => {
  const [clockInTime, setClockInTime] = useState<any>(null);
  const [shiftIdCounter, setShiftIdCounter] = useState<any>(0);
  const [attendanceRecords, setAttendanceRecords] = useState<any>([]);

  const { mutate: sendTransaction } = useSendTransaction();

  const clockIn = async () => {
    const currentTime = new Date();
    setClockInTime(currentTime);
    setShiftIdCounter((prev: any) => prev + 1);

    // Format the time as a string
    const clockInString = currentTime.toISOString();

    // Create an initial record for a clocked-in shift
    const newRecord = {
      date:
        currentTime.getDate() +
        "/" +
        (currentTime.getMonth() + 1) +
        "/" +
        currentTime.getFullYear(),
      clockIn: currentTime.getHours() + ":" + currentTime.getMinutes(),
      clockOut: null, // No clock-out time yet
      duration: null, // No duration yet
      shiftId: shiftIdCounter + 1,
    };

    // Update the state with the new record
    setAttendanceRecords((prevRecords: any) => [...prevRecords, newRecord]);

    // Call the smart contract function to record clock-in
    try {
      const transaction = await prepareContractCall({
        contract,
        method: "function recordClockIn(string memory _clockInTime)",
        params: [clockInString],
      });
      sendTransaction(transaction);
      console.log("Clock-in recorded on the blockchain");
    } catch (error) {
      console.error("Error during clock-in on blockchain:", error);
    }
  };

  const clockOut = async () => {
    const currentTime = new Date();
    if (!clockInTime) {
      console.error("Please clock in before clocking out.");
      return;
    }

    // Calculate duration and update the most recent shift record
    setAttendanceRecords((prevRecords: any[]) =>
      prevRecords.map((record) =>
        record.shiftId === shiftIdCounter
          ? {
              ...record,
              clockOut: currentTime.getHours() + ":" + currentTime.getMinutes(),
              duration:
                (
                  (currentTime.getTime() - clockInTime.getTime()) /
                  1000 /
                  60
                ).toFixed(1) + " minutes",
            }
          : record
      )
    );

    // Format the clock-out time and duration
    const clockOutString = currentTime.toISOString();
    const duration =
      ((currentTime.getTime() - clockInTime.getTime()) / 1000 / 60).toFixed(1) +
      " minutes";

    // Call the smart contract function to record clock-out
    try {
      const transaction = prepareContractCall({
        contract,
        method:
          "function recordClockOut(uint256 _shiftId, string memory _clockOutTime, string memory _duration)",
        params: [shiftIdCounter, clockOutString, duration],
      });
      sendTransaction(transaction);
      console.log("Clock-out recorded on the blockchain");
    } catch (error) {
      console.error("Error during clock-out on blockchain:", error);
    }

    // Reset the clock-in time for a new shift
    setClockInTime(null);
  };

  return (
    <View style={{ display: "flex", flex: 1, margin: 20 }}>
      {!clockInTime && (
        <TouchableOpacity style={styles.clockInButton} onPress={clockIn}>
          <Text style={styles.buttonText}>Clock In</Text>
        </TouchableOpacity>
      )}
      {clockInTime && (
        <TouchableOpacity style={styles.clockOutButton} onPress={clockOut}>
          <Text style={styles.buttonText}>Clock Out</Text>
        </TouchableOpacity>
      )}

      <Text style={{ marginVertical: 10 }}>Attendance Records:</Text>
      <FlatList
        data={attendanceRecords}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "column",
              display: "flex",
              flex: 1,
              paddingBottom: 10,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Date: {item.date}</Text>
            <Text style={{ color: "white" }}>Clock In: {item.clockIn}</Text>
            <Text style={{ color: "white" }}>
              Clock Out: {item.clockOut ? item.clockOut : "In Progress"}
            </Text>
            <Text style={{ color: "white" }}>
              Duration: {item.duration ? item.duration : "In Progress"}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.shiftId.toString()}
        style={{ display: "flex", flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  clockInButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
    minWidth: "50%",
  },
  clockOutButton: {
    backgroundColor: "#F44336",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
    minWidth: "50%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ClockInOut;
