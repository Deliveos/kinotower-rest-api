import mongoose from "mongoose";

async function getConnection (url: string, dbName: string) {
  try {
    const db = await mongoose.connect(url + "/" + dbName, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
  } catch (e) {
    console.log(e);
  }
}

export default getConnection;