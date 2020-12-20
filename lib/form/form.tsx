import * as React from "react";
import {ReactFragment} from "react";
import Input from "../input/input";
import classes from "../helpers/classes";
import './form.scss'

export interface FormValue {
    [K: string]: any
}

interface Props {
    value: FormValue;
    fields: Array<{ name: string, label: string, input: { type: string } }>;
    buttons: ReactFragment;
    onSubmit: React.FormEventHandler;
    onChange: (value: FormValue) => void;
    errors: { [K: string]: string[] }
}

const Form: React.FunctionComponent<Props> = (props) => {
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        props.onSubmit(e);
    }
    const onInputChange = (name: string, value: string) => {
        const newFormValue = {...formData, [name]: value}
        props.onChange(newFormValue)
    }
    const formData = props.value
    console.log("formData: " + formData);
    return (
        <form onSubmit={onSubmit}>
            <table>
                {props.fields.map(f =>

                    <tr className={classes('fui-form-row')} key={f.name}>
                        <td>
                          <span >
                         {f.label}
                          </span>
                        </td>
                        <td>
                            <Input typeof={f.input.type} value={formData[f.name]}
                                   onChange={(e) => onInputChange(f.name, e.target.value)}
                            />
                            <div>{props.errors[f.name]}</div>
                        </td>


                    </tr>
                )}
                <div>
                    {props.buttons}
                </div>
            </table>
        </form>
    )
}

export default Form;