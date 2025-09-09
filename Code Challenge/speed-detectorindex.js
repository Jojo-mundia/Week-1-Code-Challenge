function speedDetector(speed) {
  // Allowed speed is 70
  const speedLimit = 70;
  // 5km/s above the speed limit is equal to 1 demerit point
  const kmPerSpeedlimit = 5;

  if (speed <= speedLimit) {
    return "Ok";
  }

  // If 5km/s = to 1 demerit point, we should be able to get
  // the difference between the allowed speed and the speed above
  // the speed limit.
  // We divide by 5 so as to change the km to points
  else {
    const points = Math.floor((speed - speedLimit) / kmPerDemerit);
  }
  // Math.floor rounds the number down since we want to have whole numbers.
  // kmPerDemerit=5

  if (points > 12) {
    //If the demerit points are more than 12 the driver's license is suspended
    return licenseSuspended;
  }
}
