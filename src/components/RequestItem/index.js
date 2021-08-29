import React from 'react';
import PropTypes from 'prop-types';
import JSONInput from 'react-json-editor-ajrm';
import enLocale from 'react-json-editor-ajrm/locale/en';
import { Checkbox, Row, Container, Select } from './styled';
import { Field } from '../Field';
import statusTextMap from '../../utils/statusMap';

const statusCodes = Object.keys(statusTextMap);

const delayTimeOptions = [0, 100, 500, 1000, 5000];

export const RequestItem = ({
    url,
    skip,
    method,
    status,
    delay,
    response,
    onToggle,
    onStatusChange,
    onResponseChange,
    onDelayChange,
}) => {
    return (
        <Container>
            <Row>
                <Field label="URL"> {url} </Field>
                <Field label="Enable mock">
                    <Checkbox
                        type="checkbox"
                        checked={!skip}
                        onChange={onToggle}
                    />
                </Field>
            </Row>
            <Row>
                <Field label="Method"> {method} </Field>
                <Field label="Status">
                    <Select onChange={onStatusChange} value={status.toString()}>
                        {statusCodes.map((option) => (
                            <option key={option}>{option}</option>
                        ))}
                    </Select>
                </Field>
            </Row>
            <Row>
                <Field label="Response">
                    <JSONInput
                        locale={enLocale}
                        onBlur={onResponseChange}
                        placeholder={response}
                        colors={{
                            default: 'black',
                            background: 'white',
                            string: 'black',
                            number: 'black',
                            colon: 'black',
                            keys: 'black',
                            error: 'black',
                        }}
                        style={{
                            warningBox: {
                                background: 'white',
                            },
                            body: {
                                fontFamily: 'inherit',
                                fontSize: '12px',
                            },
                        }}
                        waitAfterKeyPress={1000}
                        height="120px"
                    />
                </Field>
                <Field label="Delay time">
                    <Select onChange={onDelayChange} value={delay.toString()}>
                        {delayTimeOptions.map((option) => (
                            <option key={option}>{option}</option>
                        ))}
                    </Select>
                </Field>
            </Row>
        </Container>
    );
};

RequestItem.propTypes = {
    url: PropTypes.string,
    skip: PropTypes.bool,
    method: PropTypes.string,
    delay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    status: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    response: PropTypes.object,
    onToggle: PropTypes.func,
    onStatusChange: PropTypes.func,
    onResponseChange: PropTypes.func,
    onDelayChange: PropTypes.func,
};
