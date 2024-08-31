
import axios from "axios";

const GetApiData = async () => {
  try {
    const response = await axios.get(
      `http://192.168.29.154:3332/testAllTeansaction`,
    );
    return response.data
  } catch (error) {
    console.log("🚀 ~ GetApiData ~ error:", error);
    return null; 
  }
};

export { GetApiData };
