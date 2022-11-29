import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../constants/colors";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const changeHandler = (evnt) => {
    evnt.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
      setValue("");
    }
  };

  return (
    <Paper
      onSubmit={changeHandler}
      component={"form"}
      sx={{
        border: `1px solid ${colors.secondary}`,
        pl: 2,
        mr: 5,
        boxShadow: "none",
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
