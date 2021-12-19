import React, { Component, useEffect } from 'react';
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
        margin: PropTypes.string,
        marginTop: PropTypes.string,
        marginBottom: PropTypes.string,
       
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
        margin:'5%',
        marginTop:'5%',
        marginBottom: '5%',
        


    };

    constructor(props) {
        super(props);

        this.state = {
            focussed: (props.locked && props.focussed) || false,
            value: props.value || '',
            error: props.error || '',
            label: props.label || '',
            margin: props.margin || '5%',
            marginTop: props.marginTop || '5%',
            marginBottom: props.marginBottom || '5%',
            wrongInput: props.wrongInput,
        };
    }

    componentDidUpdate(prevProps) {
        if(prevProps.wrongInput !== this.props.wrongInput) {
          this.setState({wrongInput: this.props.wrongInput});
        }}
   

    onChange = event => {
        
        const { id } = this.props;
        const value = event.target.value;
        this.setState({ value });
        this.props.setInputValue(value);
        return this.props.onChange(id, value);
    }

 
    render() {
        const { focussed, value, error, label, margin, marginTop, marginBottom , wrongInput} = this.state;
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
            <div style={{margin: margin, marginBottom: marginBottom, marginTop: marginTop} }>
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
                    <label key={this.props.wrongInput} htmlFor={id} className={error && wrongInput && 'error'}>
                        {wrongInput && error || label}
                    </label>
                </div>
            </div>
        );
    }
}