//This file contains functions that initialize and update the database

//Create/Initialize our indexeddb databases
const openIndexdb = idb.open("inputs", 2, (db) => {
  if (!db.objectStoreNames.contains("expense")) {
    db.createObjectStore("expense", { keyPath: "id" });
  }
  if (!db.objectStoreNames.contains("income")) {
    db.createObjectStore("income", { keyPath: "id" });
  }
  if (!db.objectStoreNames.contains("expenses-sync")) {
    db.createObjectStore("expenses-sync", { keyPath: "timestamp" });
  }
});

//Write Data
const writeData = async (obStore, data) => {
  try {
    const dbPromise = await openIndexdb;
    const tx =await dbPromise.transaction(obStore, "readwrite");
    await tx
      .objectStore(obStore)
      .put(data);
    return tx.complete;
  } catch (error) {
    console.error("Put Error", error);
    return error;
  }
};

//Read All Data
const readData = async (obStore) => {
  try {
    const dbPromise = await openIndexdb;
    const tx = await dbPromise.transaction(obStore, "readonly");
    return await tx.objectStore(obStore).getAll();
  } catch (error) {
    console.error(error);
    return error;
  }
};

//Clear Data
const clearDatabase = async (obStore) => {
  try {
    const dbPromise = await openIndexdb;
    const tx = await dbPromise.transaction(obStore, "readwrite");
    await tx.objectStore(obStore).clear();
    return tx.complete;
  } catch (error) {
    console.error(error);
    return error;
  }
};

//Delete one data entry instance
const deleteData = async (obStore, id) => {
  try {
    const dbPromise = await openIndexdb;
    const tx = await dbPromise.transaction(obStore, "readwrite");
    await tx.objectStore(obStore).delete(id);
    return tx.complete;
  } catch (error) {
    console.error(error);
    return error;
  }
};
