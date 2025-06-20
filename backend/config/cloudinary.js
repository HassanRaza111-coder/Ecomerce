import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: "dbfo54fd9",
    api_key: "393341454417347",
    api_secret: "ljOGXV_jJul6GJCIqfq70FfTsEA",
  });
};

export default connectCloudinary;
