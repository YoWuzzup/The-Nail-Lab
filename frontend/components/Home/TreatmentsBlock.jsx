import { useStyles } from "./treatmentsBlock";
import { WithButtonStyles, Treatment } from "../index";
import { pops } from "../../images/index";

export default function TreatmentsBlock() {
  const classes = useStyles();

  const fakeArr = [
    {
      i: 'Mani Pedi',
      img: "https://static.wixstatic.com/media/0999206fe9ad4149b39ee090d53287a3.jpg/v1/fill/w_320,h_210,al_c,q_80,usm_0.66_1.00_0.01/0999206fe9ad4149b39ee090d53287a3.webp",
    },
    {
      i: 'Gel Polish',
      img: "https://static.wixstatic.com/media/c06ad52634dc4421aecebcf2aecbdb98.jpg/v1/fill/w_320,h_210,al_c,q_80,usm_0.66_1.00_0.01/c06ad52634dc4421aecebcf2aecbdb98.webp",
    },
    {
      i: 'Nail Art',
      img: "https://static.wixstatic.com/media/1a7f9b8037f3460ab6f1dd794ecc264a.jpg/v1/fill/w_320,h_210,al_c,q_80,usm_0.66_1.00_0.01/1a7f9b8037f3460ab6f1dd794ecc264a.webp",
    },
  ];

  return (
    <div
      className={classes.root}
      style={{ backgroundImage: `url(${pops.src})` }}
    >
      <h4 className={classes.header}>OUR TREATMENTS</h4>

      <div className={classes.allTreatments}>
        {fakeArr.map((i, index) => {
          return <Treatment key={`${i}_${index}`} item={i} length={index+1} />;
        })}
      </div>

      <WithButtonStyles
        name={"book now"}
        url="treatments"
        classes={classes.bigger}
        type='bigger'
      />
    </div>
  );
}
