// src/App.js
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';

const App = () => {
  const [devices, setDevices] = useState([]);
  const [deviceName, setDeviceName] = useState('');

  const devicesCollectionRef = collection(db, 'devices');

  // ฟังก์ชันเพิ่มอุปกรณ์
  const addDevice = async () => {
    await addDoc(devicesCollectionRef, { name: deviceName });
    setDeviceName('');
    fetchDevices();
  };

  // ฟังก์ชันลบอุปกรณ์
  const removeDevice = async (id) => {
    const deviceDoc = doc(db, 'devices', id);
    await deleteDoc(deviceDoc);
    fetchDevices();
  };

  // ฟังก์ชันดึงข้อมูลอุปกรณ์
  const fetchDevices = async () => {
    const data = await getDocs(devicesCollectionRef);
    setDevices(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  return (
    <div>
      <h1>IT Support - Device Management</h1>
      <input
        type="text"
        value={deviceName}
        onChange={(e) => setDeviceName(e.target.value)}
        placeholder="Device Name"
      />
      <button onClick={addDevice}>Add Device</button>
      <DeviceList devices={devices} removeDevice={removeDevice} />
    </div>
  );
};

const DeviceList = ({ devices, removeDevice }) => {
  return (
    <ul>
      {devices.map((device) => (
        <li key={device.id}>
          {device.name} <button onClick={() => removeDevice(device.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default App;
