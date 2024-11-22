// @ts-ignore
import { v2 as cloudinary } from 'cloudinary';
import { NextRequest, NextResponse } from "next/server";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
  api_key: process.env.CLOUDINARY_API_KEY || "",
  api_secret: process.env.CLOUDINARY_API_SECRET || "",
});

// Handle POST requests for multiple file uploads
export async function POST(req: NextRequest) {
  const formData = await req.formData(); // Parse multipart data
  const files = formData.getAll("images"); // Get all files with the "images" field

  if (!files || files.length === 0) {
    return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
  }

  // Ensure all files are of type File
  if (!files.every((file) => file instanceof File)) {
    return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
  }

  try {
    const uploadPromises = files.map(async (file) => {
      const buffer = Buffer.from(await file.arrayBuffer()); // Convert file to buffer

      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "CampListings" },
          (error: any, result: unknown) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        uploadStream.end(buffer); // Send buffer to Cloudinary
      });
    });

    // Wait for all uploads to finish
    const results = await Promise.all(uploadPromises);

    // Extract secure URLs
    const urls = results.map((result: any) => result.secure_url);

    // Return all uploaded image URLs
    return NextResponse.json({ urls });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Disable default body parser for multipart requests
export const config = {
  api: {
    bodyParser: false,
  },
};