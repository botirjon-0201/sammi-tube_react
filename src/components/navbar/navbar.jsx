import { Stack, Box } from "@mui/material";
import { logo } from "../../constants";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
    >
      <h2>Logo</h2>
      SearchBar
      <Box />
    </Stack>
  );
};

export default Navbar;
