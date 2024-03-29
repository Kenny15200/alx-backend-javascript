#!/usr/bin/node
import ClassRoom from './0-classroom'; // Removed ".js" extension

function initializeRooms() {
  const sizes = [19, 20, 34];
  const rooms = sizes.map((size) => new ClassRoom(size)); // Added parentheses around "size"
  return rooms;
}

export default initializeRooms;
