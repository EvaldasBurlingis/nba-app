export const checkIfValidAbbreviation = name => {
  let result = name.toLowerCase();
  // Check for wrong abbreviation
  switch (result) {
    case "bkn":
      result = "bro";
      break;
    case "uta":
      result = "uth";
      break;
    case "phx":
      result = "pho";
      break;
    case "nop":
      result = "nor";
      break;
    default:
      break;
  }
  console.log(result);
  return result;
};
