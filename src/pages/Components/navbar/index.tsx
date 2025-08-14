import React, { useEffect, useState } from "react"
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';
import useGetAllTrainingCategories from "hooks/useGetAllTrainingCategories";
import TrainingCategoriesListResponse from "common/entities/Education/TrainingCategoriesListResponse";
const MenuNavbar=()=>{
  const { data, error:errorTraning, isLoading: isLoadingTraining} = useGetAllTrainingCategories();
  const [trainingCategories, setTrainingCategories] = useState<TrainingCategoriesListResponse[]>([]);
  useEffect(() => {
      console.log("tra"+data)
    if (data?.length) setTrainingCategories(data);
    //if (categoryProduct?.length) setProductCategories(categoryProduct);
  }, [data]);
    return(
        <>
        <Menu
  menuButton={<MenuButton>Menu</MenuButton>}
  onItemClick={(e) => console.log(`[Menu] ${e.value} clicked`)}
>


          {trainingCategories.map((value) => (
                                      <MenuItem value={value.name}
    href="/education"
        onClick={(e) => {
      console.log(`[MenuItem] ${e.value} clicked`);
      // Stop the `onItemClick` of root menu component from firing
      e.stopPropagation = true;
      // Keep the menu open after this menu item is clicked
      e.keepOpen = true;
    }}
  ></MenuItem>
                  ))}

  <MenuItem value="Cut" onClick={(e) => console.log(`[MenuItem] ${e.value} clicked`)}>
    Cut
  </MenuItem>

  <MenuItem
    value="Copy"
    onClick={(e) => {
      console.log(`[MenuItem] ${e.value} clicked`);
      // Stop the `onItemClick` of root menu component from firing
      e.stopPropagation = true;
      // Keep the menu open after this menu item is clicked
      e.keepOpen = true;
    }}
  >
    Copy
  </MenuItem>

  <MenuItem value="Paste">Paste</MenuItem>
</Menu>
        </>
    )
}
export default MenuNavbar;