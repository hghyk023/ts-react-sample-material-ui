import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import React from "react";

// スタイルを定義
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // デフォルトが4px
            padding: theme.spacing(2)
        },
        title: {
            borderBottom: `2px solid ${theme.palette.primary.main}`
        }
    })
)

// Propsの型を定義
type Props = {
    title?: string
}

// コンポーネントを定義
const MyStyledComponent: React.FC<Props> = (props: Props) => {
    // めちゃくちゃわかりやすい!
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h4 className={classes.title}>
                {props.title || 'My Styled Component'}
            </h4>
        </div>
    )
}

export default MyStyledComponent;