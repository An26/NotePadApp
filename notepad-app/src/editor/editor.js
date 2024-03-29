import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';

class EditorComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            text: '',
            id: ''
        };
    }
    render() {

        const { classes } = this.props;

        return (
        <div className={classes.editorContainer}>
            <ReactQuill 
                value={this.state.text}
                onChange={this.updateBody}>
            </ReactQuill>
        </div>);
    }

    updateBody = async (val) => {
        this.setState({ text: val });
        this.update();
    }
    update = debounce(() => {
        console.log("updating db!!!");
    }, 1500)
}

export default withStyles(styles)(EditorComponent);