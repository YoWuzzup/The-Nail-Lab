import { Service } from "../";
import { useStyles } from "./treatmentsContent";
import { useDispatch, useSelector } from "react-redux";
import { changeSortingButton } from "../../Redux/Actions/Buttons";

export default function TreatmentsContent() {
  const dispatch = useDispatch();
  const activeSortingButton = useSelector((state) => state.sortingButton);
  const classes = useStyles();
  const sortingInfo = ["manicure", "pedicure", "get polish", "nail art"];

  const handleClick = (e) => {
    dispatch(changeSortingButton(e.target.textContent));
  };
  const dummyService = [1, 2, 3];

  return (
    <div className={`${classes.root}`}>
      <div className={`${classes.sorting}`}>
        {sortingInfo.map((item, index) => (
          <div
            className={`${classes.sorting_button} ${
              item.includes(activeSortingButton)
                ? classes.sorting_button_active
                : ""
            }`}
            key={`${item}_${index}`}
            onClick={handleClick}
          >
            {item}
          </div>
        ))}
      </div>

      <div className={`${classes.service_block}`}>
        {dummyService.map((item, index) => (
          <Service key={`${item}_${index}`} />
        ))}
      </div>
    </div>
  );
}
