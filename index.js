function distanceFromHqInBlocks(string) {
  if (string >= 42) {
    return (string - 42);
  }
  else
    return (42 - string);
}

function distanceFromHqInFeet(string) {
  return (distanceFromHqInBlocks(string) * 264);
}

function distanceTravelledInFeet(destination, beginning) {
  if (destination > beginning) {
    return ((destination - beginning)*264);
  }
  else {
    return ((beginning - destination)*264);
  }
}

function calculatesFarePrice(destination, beginning) {
  if (((destination - beginning)*264) > 2000 && ((destination - beginning)*264) < 2500) {
    return 25;
  }
  
  else if (((destination - beginning)*264)  <= 2000) {
    return 10.56;
  }
  else if (((destination - beginning)*264) <= 400) {
    return 0;
  }
  else
    return "cannot travel that far";
}
