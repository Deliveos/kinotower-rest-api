import mongoose from "mongoose";
declare function getConnection(url: string, dbName: string): Promise<mongoose.Connection | undefined>;
export default getConnection;
