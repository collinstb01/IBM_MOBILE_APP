// sanity.js
import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: "85aiwbty",
  dataset: "production",
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: "2024-07-03", // use current date (YYYY-MM-DD) to target the latest API version
  token:
    "skAnCQH8vXKvEFYPRITJtynEXnxcYvf7Og0tbnXdUpqpYweUYziOyIfqslrDxvZZyBSVihtWLX0Ku87VUPJn2WE1Xk99evC93qd1IZxDYypFXrrO6VNefMwvTXJ36vPHtx7MT73pWtgsJv2PZn5LVWe4IBxbafHkrtsWYWWxlSwmnWKSGRS0", // Only if you want to update content with the client
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function createPost({
  email,
  firstName,
  lastName,
  dob,
  username,
  country,
  password,
}) {
  try {
    const doc = {
      _type: "user",
      email,
      firstName,
      lastName,
      dob,
      username,
      country,
      password,
    };

    console.log(doc);

    const result = client.create(doc);
    return result;
  } catch (error) {
    console.log(error);
  }
}
