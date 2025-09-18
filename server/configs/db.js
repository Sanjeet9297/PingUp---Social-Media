import mongoose from "mongoose";

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/pingup", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

main()
  .then(() => {
    console.log("✅ Connection Successful");
  })
  .catch((err) => {
    console.error("❌ Connection Failed:", err.message);
  });

export default mongoose;
