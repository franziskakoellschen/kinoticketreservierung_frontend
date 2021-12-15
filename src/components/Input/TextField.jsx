import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextField.css';

export default class Field extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        type: PropTypes.string,
        locked: PropTypes.bool,
        focussed: PropTypes.bool,
        value: PropTypes.string,
        error: PropTypes.string,
        label: PropTypes.string,
        onChange: PropTypes.func,
        setInputValue: PropTypes.func,
    };

    static defaultProps = {
        locked: false,
        type: "text",
        focussed: false,
        value: '',
        error: '',
        label: '',
        onChange: () => '',
        setInputValue: () => '',
    };

    constructor(props) {
        super(props);

        this.state = {
            focussed: (props.locked && props.focussed) || false,
            value: props.value || '',
            error: props.error || '',
            label: props.label || '',
        };
    }

    onChange = event => {
        const { id } = this.props;
        const value = event.target.value;
        this.setState({ value, error: '' });
        this.props.setInputValue(value);
        return this.props.onChange(id, value);
    }

    

    render() {
        const { focussed, value, error, label } = this.state;
        const { id, type, locked } = this.props;

        const fieldClassName =
            `field ${(locked  ? focussed : focussed || value) && 'focussed'} ${locked && !focussed && 'locked'}`;

        const onFocus = () => {
            !locked && this.setState({ focussed: true});
        }

        const onBlur = () => {
            !locked && this.setState({focussed: false});
        }
        

        return (
            <div style={{margin: "5%"}}>
                <div className={fieldClassName}>
                    <input
                    id ={id}
                    type={type}
                    value={value}
                    placeholder={label}
                    onChange={this.onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    />
                    <label htmlFor={id} className={error && 'error'}>
                        {error || label}
                    </label>
                </div>
            </div>
        );
    }
}