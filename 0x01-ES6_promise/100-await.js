#!/usr/bin/node
import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
