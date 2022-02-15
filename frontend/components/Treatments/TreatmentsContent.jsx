import { useEffect } from "react";
import { Service } from "../";
import { useStyles } from "./treatmentsContent";
import { useDispatch, useSelector } from "react-redux";
import { changeSortingButton } from "../../Redux/Actions/Buttons";
import { getService } from "../../Redux/Actions/Service";

export default function TreatmentsContent() {
  const dispatch = useDispatch();
  const activeSortingButton = useSelector((state) => state.sortingButton);
  const fetchedService = useSelector((state) => state.service);
  const classes = useStyles();
  const sortingInfo = ["manicure", "pedicure", "get polish", "nail art"];

  const handleClick = (e) => {
    dispatch(changeSortingButton(e.target.textContent));
  };

  useEffect(() => {
    dispatch(getService(activeSortingButton));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSortingButton]);

  return (
    <div className={`${classes.root}`}>
      <div className={`${classes.sorting}`}>
        {sortingInfo.map((item, index) => (
          <div
            onClick={handleClick}
            className={`${classes.sorting_button} ${
              item.includes(activeSortingButton)
                ? classes.sorting_button_active
                : ""
            }`}
            key={`${item}_${index}`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className={`${classes.service_block}`}>
        {fetchedService.map((item, index) => (
          <Service key={`${item}_${index}`} data={item} />
        ))}
      </div>
    </div>
  );
}
