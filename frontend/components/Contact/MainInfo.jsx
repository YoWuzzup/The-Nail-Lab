import { useStyles } from "./mainInfo";

export default function MainInfo(props) {
  const classes = useStyles();
  const replaced = props.header.replace(" ", "\n");

  return (
    <>
      <div className={`wrapper ${classes.root}`}>
        <h2 className={`${classes.header} italic`}>{replaced} </h2>

        <p className={`${classes.para}`}>
          I'm a paragraph.It’s easy. Just click “Edit Text” or double click me
          to add your own content and make changes to the font.
        </p>
      </div>

      {props.children}
    </>
  );
}
