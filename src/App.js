import { Stack } from "@mui/material";
import MyApp from "./MyApp";
import ButtonAppBar from "./ButtonAppBar";
import CheckboxList from "./CheckboxList";
import Divider from "@mui/joy/Divider";
import SimpleBottomNavigation from "./SimpleBottomNavigation";
import AddTask from "./AddTask";

function App() {
  return (
    <Stack direction={{ xs: "column" }} spacing={{ xs: 1, sm: 2, md: 4 }}>
      <ButtonAppBar></ButtonAppBar>
      <AddTask></AddTask>
      {/* <CheckboxList></CheckboxList> */}
      <SimpleBottomNavigation></SimpleBottomNavigation>
    </Stack>
  );
}

export default App;
